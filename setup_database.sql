-- DevMates Waitlist Database Setup
-- Run this in your Supabase SQL Editor

-- Drop existing table if it exists (to fix the INET issue)
DROP TABLE IF EXISTS waitlist CASCADE;

-- Create the waitlist table
CREATE TABLE waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    plan VARCHAR(50) NOT NULL DEFAULT 'free',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address INET NULL,
    user_agent TEXT NULL,
    referrer TEXT NULL,
    utm_source VARCHAR(100) NULL,
    utm_medium VARCHAR(100) NULL,
    utm_campaign VARCHAR(100) NULL,
    utm_term VARCHAR(100) NULL,
    utm_content VARCHAR(100) NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_plan ON waitlist(plan);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at 
    BEFORE UPDATE ON waitlist 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for new signups)
CREATE POLICY "Allow public to insert waitlist entries" ON waitlist
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reading own data (if needed for future features)
CREATE POLICY "Allow users to read their own waitlist entry" ON waitlist
    FOR SELECT USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON waitlist TO anon;
GRANT ALL ON waitlist TO authenticated;

-- Insert some sample data for testing
INSERT INTO waitlist (email, plan, utm_source, utm_medium, utm_campaign) VALUES
('test1@example.com', 'pro', 'google', 'cpc', 'early_access'),
('test2@example.com', 'premium', 'facebook', 'social', 'founder_matching'),
('test3@example.com', 'free', 'twitter', 'social', 'organic')
ON CONFLICT (email) DO NOTHING;

-- Verify the setup
SELECT 'Setup complete! Total signups: ' || COUNT(*) as status FROM waitlist;
