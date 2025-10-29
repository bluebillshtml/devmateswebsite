// Test Supabase Connection
// Run this in your browser console on the waitlist page to test the connection

import { waitlistService } from './src/supabase.js';

// Test the connection
async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test getting stats
    const stats = await waitlistService.getWaitlistStats();
    console.log('✅ Connection successful!');
    console.log('Stats:', stats);
    
    if (stats.success) {
      console.log(`Total signups: ${stats.totalSignups}`);
      console.log('Plan breakdown:', stats.planStats);
    }
  } catch (error) {
    console.error('❌ Connection failed:', error);
  }
}

// Test adding to waitlist
async function testAddToWaitlist() {
  console.log('Testing waitlist addition...');
  
  try {
    const result = await waitlistService.addToWaitlist(
      'test@example.com', 
      'pro', 
      {
        userAgent: navigator.userAgent,
        referrer: document.referrer
      }
    );
    
    if (result.success) {
      console.log('✅ Successfully added to waitlist!');
    } else {
      console.log('❌ Failed to add to waitlist:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run tests
testConnection();
