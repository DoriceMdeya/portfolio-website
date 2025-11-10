import { createClient, SupabaseClient } from '@supabase/supabase-js' 

let supabaseClient: SupabaseClient | null = null
let lastUrl: string | null = null
let lastKey: string | null = null

function getSupabaseClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If env vars are missing, use placeholder values to prevent build errors
  // This allows the build to succeed, but the app will fail at runtime if env vars aren't set
  const url = supabaseUrl || 'https://placeholder.supabase.co'
  const key = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.placeholder'

  // Recreate client if env vars changed (e.g., from placeholder to real values at runtime)
  if (supabaseClient && lastUrl === url && lastKey === key) {
    return supabaseClient
  }

  supabaseClient = createClient(url, key)
  lastUrl = url
  lastKey = key
  return supabaseClient
}

// Use a Proxy to lazily initialize the client only when accessed
// This prevents build-time errors when env vars might not be available
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabaseClient()
    const value = client[prop as keyof SupabaseClient]
    return typeof value === 'function' ? value.bind(client) : value
  }
})