# SQL Database Schema for DevMates Waitlist

This folder contains the SQL files needed to set up the Supabase database for the DevMates waitlist functionality.

## Files

- `waitlist_schema.sql` - Main database schema with table creation, indexes, triggers, and security policies
- `sample_data.sql` - Sample data and useful queries for testing

## Setup Instructions

1. **Create a new Supabase project** at [supabase.com](https://supabase.com)

2. **Run the schema file** in your Supabase SQL editor:
   - Copy the contents of `waitlist_schema.sql`
   - Paste into the SQL editor in your Supabase dashboard
   - Execute the script

3. **Configure your environment variables**:
   - Get your Supabase URL and anon key from the project settings
   - Add them to your `.env` file (see below)

4. **Test with sample data** (optional):
   - Run the queries in `sample_data.sql` to test the setup

## Environment Variables

Create a `.env` file in your project root with:

```
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema

The `waitlist` table includes:

- `id` - Unique identifier (UUID)
- `email` - User's email address (unique)
- `plan` - Selected plan (free, pro, premium, enterprise)
- `created_at` - Timestamp when user signed up
- `updated_at` - Timestamp when record was last updated
- `ip_address` - User's IP address for analytics
- `user_agent` - Browser information
- `referrer` - Referring URL
- `utm_*` fields - Marketing campaign tracking

## Security

- Row Level Security (RLS) is enabled
- Public can insert new waitlist entries
- Public can read waitlist entries (for analytics)
- All necessary permissions are granted to anon and authenticated users
