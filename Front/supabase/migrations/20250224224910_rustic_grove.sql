/*
  # Initial Schema for Price Comparison Website

  1. New Tables
    - `products`
      - Core product information
      - Tracks basic product details and metadata
    
    - `prices`
      - Historical price tracking
      - Stores price changes over time
    
    - `stores`
      - Store information
      - Tracks details about each marketplace/store
    
    - `price_alerts`
      - User price alerts
      - Stores alert preferences for price notifications

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create stores table
CREATE TABLE IF NOT EXISTS stores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  logo_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  category text,
  brand text,
  model text,
  sku text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create prices table
CREATE TABLE IF NOT EXISTS prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
  price decimal NOT NULL,
  currency text DEFAULT 'BRL',
  url text NOT NULL,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  UNIQUE(product_id, store_id, created_at)
);

-- Create price alerts table
CREATE TABLE IF NOT EXISTS price_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  target_price decimal NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_alerts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public stores are viewable by everyone" 
  ON stores FOR SELECT 
  USING (true);

CREATE POLICY "Public products are viewable by everyone" 
  ON products FOR SELECT 
  USING (true);

CREATE POLICY "Public prices are viewable by everyone" 
  ON prices FOR SELECT 
  USING (true);

CREATE POLICY "Users can view their own alerts" 
  ON price_alerts FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own alerts" 
  ON price_alerts FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own alerts" 
  ON price_alerts FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own alerts" 
  ON price_alerts FOR DELETE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_search 
  ON products USING GIN (to_tsvector('portuguese', title || ' ' || COALESCE(description, '')));

CREATE INDEX IF NOT EXISTS idx_prices_product_id 
  ON prices(product_id);

CREATE INDEX IF NOT EXISTS idx_prices_store_id 
  ON prices(store_id);

CREATE INDEX IF NOT EXISTS idx_price_alerts_user_id 
  ON price_alerts(user_id);

CREATE INDEX IF NOT EXISTS idx_price_alerts_product_id 
  ON price_alerts(product_id);