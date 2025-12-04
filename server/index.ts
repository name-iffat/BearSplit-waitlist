import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/waitlist', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Store email in Resend Contacts (Audience)
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (audienceId) {
            try {
                await resend.contacts.create({
                    email: email,
                    audienceId: audienceId,
                });
                console.log(`✅ Added ${email} to Resend audience`);
            } catch (contactError: any) {
                console.error('Failed to add contact to Resend:', contactError);
                // Continue even if contact creation fails
            }
        } else {
            console.warn('⚠️ RESEND_AUDIENCE_ID not set - email not stored in contacts');
        }

        // Send email notification to your app email
        const { data, error } = await resend.emails.send({
            from: 'BearSplit Waitlist <onboarding@resend.dev>', // Change this to your verified domain
            to: ['bearsplitapp@gmail.com'],
            subject: 'New Waitlist Signup! 🐻',
            html: `
        <div style="font-family: 'Comic Sans MS', cursive, sans-serif; padding: 20px;">
          <h1 style="color: #8B5E3C;">New BearSplit Waitlist  Signup!</h1>
          <p style="font-size: 18px;">Someone just joined the waitlist:</p>
          <p style="font-size: 24px; font-weight: bold; color: #D4A373;">${email}</p>
          <p style="color: #666; margin-top: 20px;">🍯 Keep building that cozy app!</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ error: error.message });
        }

        res.json({ success: true, data });
    } catch (error: any) {
        console.error('Server error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🐻 BearSplit API running on port ${PORT}`);
});
