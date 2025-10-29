import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Waitlist functions
export const waitlistService = {
  // Add email to waitlist
  async addToWaitlist(email, plan, additionalData = {}) {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim(),
            plan,
            ip_address: additionalData.ipAddress,
            user_agent: additionalData.userAgent,
            referrer: additionalData.referrer,
            utm_source: additionalData.utmSource,
            utm_medium: additionalData.utmMedium,
            utm_campaign: additionalData.utmCampaign,
            utm_term: additionalData.utmTerm,
            utm_content: additionalData.utmContent,
          }
        ])
        .select()

      if (error) {
        throw error
      }

      return { success: true, data }
    } catch (error) {
      console.error('Error adding to waitlist:', error)
      return { success: false, error: error.message }
    }
  },

  // Check if email already exists
  async checkEmailExists(email) {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email.toLowerCase().trim())
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        throw error
      }

      return { exists: !!data, data }
    } catch (error) {
      console.error('Error checking email:', error)
      return { exists: false, error: error.message }
    }
  },

  // Get waitlist statistics
  async getWaitlistStats() {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('plan, created_at')

      if (error) {
        throw error
      }

      // Calculate statistics
      const totalSignups = data.length
      const planStats = data.reduce((acc, entry) => {
        acc[entry.plan] = (acc[entry.plan] || 0) + 1
        return acc
      }, {})

      return { 
        success: true, 
        totalSignups, 
        planStats,
        recentSignups: data.slice(-10) // Last 10 signups
      }
    } catch (error) {
      console.error('Error getting waitlist stats:', error)
      return { success: false, error: error.message }
    }
  }
}
