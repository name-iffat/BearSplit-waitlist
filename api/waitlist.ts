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

        // 2. Send thank you email to customer
        try {
            await resend.emails.send({
                from: 'BearSplit <onboarding@resend.dev>',
                to: [email],
                subject: 'Welcome to BearSplit! 🐻✨',
                html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(135deg, #FFF8F0 0%, #FFE4C4 100%);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #6B4423; font-size: 32px; margin: 0;">🐻 Welcome to BearSplit!</h1>
            </div>
            
            <div style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
              <p style="color: #5D4037; font-size: 18px; line-height: 1.6; margin: 0 0 20px;">
                Hey there! 👋
              </p>
              
              <p style="color: #5D4037; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Thanks for joining the BearSplit waitlist! We're building something special – a cozy, stress-free way to split bills with friends.
              </p>
              
              <p style="color: #5D4037; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                You'll be the first to know when we launch. No spam, just the good stuff! 🍯
              </p>
              
              <div style="background: #FFF3E0; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #FF9800;">
                <p style="color: #5D4037; font-size: 14px; margin: 0;">
                  <strong>What's coming:</strong><br/>
                  ✨ Easy bill splitting with friends<br/>
                  ✨ Beautiful share cards with QR codes<br/>
                  ✨ No more awkward "who owes who" moments
                </p>
              </div>
              
              <p style="color: #8D6E63; font-size: 14px; line-height: 1.6; margin: 20px 0 0;">
                Stay cozy,<br/>
                <strong>The BearSplit Team</strong> 🐻
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #A1887F; font-size: 12px; margin: 0;">
                You're receiving this because you signed up at bearsplit.app<br/>
                © ${new Date().getFullYear()} BearSplit. Made with 🍯 and ❤️
              </p>
            </div>
          </div>
        `,
            });
            console.log(`✅ Sent welcome email to ${email}`);
        } catch (welcomeError) {
            console.error('Failed to send welcome email:', welcomeError);
            // Don't fail - signup is still successful
        }

        // 3. Send notification to admin
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
