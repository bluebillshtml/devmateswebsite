-- Sample data for testing the waitlist functionality
-- This file contains example insert statements for testing

-- Insert sample waitlist entries
INSERT INTO waitlist (email, plan, utm_source, utm_medium, utm_campaign) VALUES
('john.doe@example.com', 'pro', 'google', 'cpc', 'early_access'),
('jane.smith@example.com', 'premium', 'facebook', 'social', 'founder_matching'),
('mike.wilson@example.com', 'free', 'twitter', 'social', 'organic'),
('sarah.jones@example.com', 'pro', 'linkedin', 'social', 'networking'),
('alex.brown@example.com', 'premium', 'email', 'newsletter', 'product_launch');

-- Query to get waitlist statistics
SELECT 
    plan,
    COUNT(*) as signup_count,
    DATE_TRUNC('day', created_at) as signup_date
FROM waitlist 
GROUP BY plan, DATE_TRUNC('day', created_at)
ORDER BY signup_date DESC;

-- Query to get total signups by plan
SELECT 
    plan,
    COUNT(*) as total_signups,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM waitlist 
GROUP BY plan
ORDER BY total_signups DESC;
