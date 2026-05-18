import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** shadcn/ui className merger */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format ISO date string → "May 18, 2026" */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/** Truncate string to maxLength with ellipsis */
export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}…` : str
}

/** Tape status → human-readable label + colour */
export function tapeStatusMeta(status: string) {
  const map: Record<string, { label: string; color: string }> = {
    submitted: { label: 'Submitted', color: 'bg-blue-500/15 text-blue-400' },
    in_progress: { label: 'In Progress', color: 'bg-yellow-500/15 text-yellow-400' },
    review: { label: 'Final Review', color: 'bg-purple-500/15 text-purple-400' },
    delivered: { label: 'Delivered', color: 'bg-green-500/15 text-green-400' },
  }
  return map[status] ?? { label: status, color: 'bg-muted text-muted-foreground' }
}
