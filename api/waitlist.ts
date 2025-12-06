import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize clients
const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email } = req.body;

        if (!email || typeof email !== 'string') {
            return res.status(400).json({ error: 'Valid email is required' });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // 1. Store in Supabase
        const { error: dbError } = await supabase
            .from('waitlist')
            .insert({ email: email.toLowerCase().trim() });

        if (dbError) {
            // Check for duplicate email
            if (dbError.code === '23505') {
                return res.status(400).json({ error: 'Email already registered' });
            }
            console.error('Supabase error:', dbError);
            return res.status(500).json({ error: 'Failed to save email' });
        }

        // 2. Send notification email via Resend
        try {
            await resend.emails.send({
                from: 'BearSplit Waitlist <onboarding@resend.dev>',
                to: ['bearsplitapp@gmail.com'],
                subject: 'New Waitlist Signup! 🐻',
                html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background: #FFF8F0; border-radius: 12px;">
            <h1 style="color: #8B5E3C;">New BearSplit Waitlist Signup!</h1>
            <p style="font-size: 18px;">Someone just joined the waitlist:</p>
            <p style="font-size: 24px; font-weight: bold; color: #6B4423; background: #FFE4C4; padding: 12px; border-radius: 8px;">${email}</p>
            <p style="color: #666; margin-top: 20px;">🍯 Keep building that cozy app!</p>
          </div>
        `,
            });
        } catch (emailError) {
            console.error('Resend email error:', emailError);
            // Don't fail the request if email fails - the signup is still saved
        }

        return res.status(200).json({ success: true, message: 'Successfully joined waitlist!' });
    } catch (error: any) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
