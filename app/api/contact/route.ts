import { NextResponse, type NextRequest } from 'next/server'
import type { ContactFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Send via Resend when RESEND_API_KEY is configured
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from, to, subject, react: ContactEmail({ ...body }) })

    console.warn('Contact form submission received — email sending not yet configured', {
      name: body.name,
      email: body.email,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
