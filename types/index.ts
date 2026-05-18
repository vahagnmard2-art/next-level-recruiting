export type { Database, Tables, TablesInsert, TablesUpdate, Enums } from './database.types'

export type Sport =
  | 'Basketball'
  | 'Baseball'
  | 'Football'
  | 'Soccer'
  | 'Volleyball'
  | 'Softball'
  | 'Track & Field'
  | 'Lacrosse'
  | 'Wrestling'
  | 'Tennis'

export type TapeStatus = 'submitted' | 'in_progress' | 'review' | 'delivered'

export type UserRole = 'athlete' | 'admin'

export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  body: BlogSection[]
}

export interface BlogSection {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'blockquote'
  content: string | string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  sport?: string
  message: string
}
