# DevMates Waitlist Setup Guide

This guide will help you set up the Supabase-powered waitlist functionality for your DevMates website.

## 🚀 Quick Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new account
2. Click "New Project"
3. Choose your organization and enter project details:
   - **Name**: `devmates-waitlist`
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to your users
4. Click "Create new project"

### 2. Set Up Database Schema

1. In your Supabase dashboard, go to the **SQL Editor**
2. Copy the contents of `sql/waitlist_schema.sql`
3. Paste into the SQL editor and click **Run**
4. Verify the table was created by going to **Table Editor** → `waitlist`

### 3. Configure Environment Variables

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon public** key
3. Create a `.env` file in your project root:

```bash
# Copy from .env.example
cp .env.example .env
```

4. Edit `.env` and add your credentials:

```env
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Test the Integration

1. Start your development server:
   ```bash
   npm start
   ```

2. Navigate to `/waitlist` in your browser

3. Try submitting an email to test the functionality

## 📊 Features Included

### ✅ What's Working

- **Email Collection**: Users can sign up with their email and preferred plan
- **Duplicate Prevention**: System checks for existing emails
- **Real-time Stats**: Shows actual signup count from database
- **Plan Selection**: Users can choose between Free, Pro, and Premium plans
- **Error Handling**: Proper error messages for various scenarios
- **Loading States**: Visual feedback during submission
- **UTM Tracking**: Captures marketing campaign data
- **Analytics Data**: Collects referrer, user agent, and IP data

### 🎯 Database Schema

The `waitlist` table includes:

- **Basic Info**: Email, plan selection, timestamps
- **Analytics**: IP address, user agent, referrer
- **Marketing**: UTM parameters for campaign tracking
- **Security**: Row Level Security (RLS) enabled
- **Performance**: Proper indexes for fast queries

### 🔒 Security Features

- **Row Level Security**: Prevents unauthorized access
- **Input Validation**: Email format validation
- **Duplicate Prevention**: Prevents spam signups
- **Rate Limiting**: Built-in Supabase protection

## 🛠️ Customization

### Adding New Plans

1. Update the plan options in `Waitlist.jsx`:
   ```jsx
   if (plan && ['free', 'pro', 'premium', 'enterprise'].includes(plan)) {
   ```

2. Add the new plan to the form options

### Modifying Email Validation

Edit the validation in `handleSubmit`:
```jsx
if (!email.trim()) {
  setError('Please enter a valid email address');
  return;
}
```

### Custom Success Messages

Update the success message in `handleSubmit`:
```jsx
setSuccessMessage('✓ You\'re on the list! We\'ll notify you when we launch.');
```

## 📈 Analytics & Monitoring

### View Signups

1. Go to your Supabase dashboard
2. Navigate to **Table Editor** → `waitlist`
3. View all signups with timestamps and plan selections

### Run Analytics Queries

Use the queries in `sql/sample_data.sql`:

```sql
-- Total signups by plan
SELECT plan, COUNT(*) as signups 
FROM waitlist 
GROUP BY plan 
ORDER BY signups DESC;

-- Recent signups
SELECT email, plan, created_at 
FROM waitlist 
ORDER BY created_at DESC 
LIMIT 10;
```

## 🚨 Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check your `.env` file exists and has correct values
   - Restart your development server after adding `.env`

2. **"Failed to add to waitlist"**
   - Check your Supabase project is active
   - Verify the table was created correctly
   - Check browser console for detailed errors

3. **"This email is already on our waitlist!"**
   - This is expected behavior for duplicate emails
   - Test with different email addresses

### Debug Mode

Add this to your component to see detailed logs:
```jsx
console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
console.log('Supabase Key:', process.env.REACT_APP_SUPABASE_ANON_KEY);
```

## 🚀 Deployment

### Netlify Deployment

1. **Add Environment Variables**:
   - Go to your Netlify site settings
   - Navigate to **Environment Variables**
   - Add `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY`

2. **Deploy**:
   - Push your changes to GitHub
   - Netlify will automatically deploy
   - Test the live waitlist at `your-site.netlify.app/waitlist`

### Environment Variables in Production

Make sure to add your Supabase credentials to your hosting platform:
- **Netlify**: Site Settings → Environment Variables
- **Vercel**: Project Settings → Environment Variables
- **Heroku**: Config Vars

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify your Supabase project is active
3. Test with the sample data queries
4. Check the Supabase logs in your dashboard

The waitlist is now fully functional and ready for production! 🎉
