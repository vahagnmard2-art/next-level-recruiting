declare namespace NodeJS {
  interface ProcessEnv {
    // Supabase
    readonly NEXT_PUBLIC_SUPABASE_URL: string
    readonly NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    readonly SUPABASE_SERVICE_ROLE_KEY: string

    // App
    readonly NEXT_PUBLIC_SITE_URL: string
    readonly NEXT_PUBLIC_FORMSPREE_ID?: string
    readonly NEXT_PUBLIC_SAMPLE_TAPE_ID?: string

    // Email (Resend or Formspree)
    readonly RESEND_API_KEY: string

    // Analytics (optional)
    readonly NEXT_PUBLIC_POSTHOG_KEY?: string
    readonly NEXT_PUBLIC_POSTHOG_HOST?: string
  }
}
