export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string | null
          sport: string | null
          grad_year: number | null
          school: string | null
          gpa: string | null
          email: string
          phone: string | null
          avatar_url: string | null
          role: 'athlete' | 'admin'
        }
        Insert: {
          id: string
          full_name?: string | null
          sport?: string | null
          grad_year?: number | null
          school?: string | null
          gpa?: string | null
          email: string
          phone?: string | null
          avatar_url?: string | null
          role?: 'athlete' | 'admin'
        }
        Update: {
          id?: string
          full_name?: string | null
          sport?: string | null
          grad_year?: number | null
          school?: string | null
          gpa?: string | null
          email?: string
          phone?: string | null
          avatar_url?: string | null
          role?: 'athlete' | 'admin'
          updated_at?: string
        }
      }
      tapes: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          athlete_id: string
          title: string
          sport: string
          status: 'submitted' | 'in_progress' | 'review' | 'delivered'
          file_url: string | null
          shareable_url: string | null
          notes: string | null
          delivery_date: string | null
        }
        Insert: {
          athlete_id: string
          title: string
          sport: string
          status?: 'submitted' | 'in_progress' | 'review' | 'delivered'
          file_url?: string | null
          shareable_url?: string | null
          notes?: string | null
          delivery_date?: string | null
        }
        Update: {
          athlete_id?: string
          title?: string
          sport?: string
          status?: 'submitted' | 'in_progress' | 'review' | 'delivered'
          file_url?: string | null
          shareable_url?: string | null
          notes?: string | null
          delivery_date?: string | null
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          created_at: string
          athlete_id: string
          sender: 'athlete' | 'admin'
          content: string
          read: boolean
        }
        Insert: {
          athlete_id: string
          sender: 'athlete' | 'admin'
          content: string
          read?: boolean
        }
        Update: {
          athlete_id?: string
          sender?: 'athlete' | 'admin'
          content?: string
          read?: boolean
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      tape_status: 'submitted' | 'in_progress' | 'review' | 'delivered'
      user_role: 'athlete' | 'admin'
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']

export type TablesInsert<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']

export type TablesUpdate<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']

export type Enums<T extends keyof Database['public']['Enums']> =
  Database['public']['Enums'][T]
