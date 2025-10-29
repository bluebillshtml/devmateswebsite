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
      // Prepare data object, only including non-empty values
      const insertData = {
        email: email.toLowerCase().trim(),
        plan,
      }

      // Only add optional fields if they have values
      if (additionalData.ipAddress && additionalData.ipAddress.trim()) {
        insertData.ip_address = additionalData.ipAddress
      }
      if (additionalData.userAgent && additionalData.userAgent.trim()) {
        insertData.user_agent = additionalData.userAgent
      }
      if (additionalData.referrer && additionalData.referrer.trim()) {
        insertData.referrer = additionalData.referrer
      }
      if (additionalData.utmSource && additionalData.utmSource.trim()) {
        insertData.utm_source = additionalData.utmSource
      }
      if (additionalData.utmMedium && additionalData.utmMedium.trim()) {
        insertData.utm_medium = additionalData.utmMedium
      }
      if (additionalData.utmCampaign && additionalData.utmCampaign.trim()) {
        insertData.utm_campaign = additionalData.utmCampaign
      }
      if (additionalData.utmTerm && additionalData.utmTerm.trim()) {
        insertData.utm_term = additionalData.utmTerm
      }
      if (additionalData.utmContent && additionalData.utmContent.trim()) {
        insertData.utm_content = additionalData.utmContent
      }

      const { data, error } = await supabase
        .from('waitlist')
        .insert([insertData])
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
