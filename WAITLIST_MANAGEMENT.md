# How to Get Your Waitlist Emails with Resend Contacts

Your BearSplit waitlist now stores all emails in **Resend Contacts** automatically! 🎉

## Setup Steps

### 1. Create an Audience in Resend

1. Go to [Resend Dashboard](https://resend.com/audiences)
2. Click "**Create Audience**"
3. Name it: `BearSplit Waitlist`
4. Copy the **Audience ID** (looks like: `aud_xxxxxxxxxxxxx`)

### 2. Add Audience ID to Environment Variables

#### Local Development (.env file):
```bash
RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxxx
```

#### Vercel (Production):
1. Go to your Vercel project settings
2. Navigate to "**Environment Variables**"
3. Add new variable:
   - **Name**: `RESEND_AUDIENCE_ID`
   - **Value**: `aud_xxxxxxxxxxxxx`
4. **Redeploy** your project for changes to take effect

### 3. View Your Waitlist Emails

#### In Resend Dashboard:
1. Go to [Resend Audiences](https://resend.com/audiences)
2. Click on "**BearSplit Waitlist**" (your audience name)
3. Click the "**Contacts**" tab
4. You'll see all emails that signed up!
5. Click "**Export**" button to download CSV

**Note**: The Contacts tab shows:
- Email addresses
- When they signed up (Created date)
- Status (subscribed/unsubscribed)

#### Option B: Using Resend API
```typescript
// Get all contacts
const contacts = await resend.contacts.list({
  audienceId: 'aud_xxxxxxxxxxxxx'
});
```

## What Happens Now

When someone joins the waitlist:
1. ✅ Email is **stored** in Resend Contacts (your audience)
2. ✅ Email **notification** sent to bearsplitapp@gmail.com
3. ✅ You can **view/export** all emails from Resend Dashboard anytime

## Managing Your Waitlist

### Export Contacts
1. Go to your audience: [Resend Audiences](https://resend.com/audiences)
2. Click "BearSplit Waitlist"
3. Click "**Contacts**" tab
4. Click "**Export**" button (top right)
5. Download CSV with all emails!

### Send Broadcast Emails (When you launch!)
- Dashboard → Emails → Broadcast
- Select "BearSplit Waitlist" audience
- Write your launch announcement
- Send to all! 🚀

### Remove Duplicates
Resend automatically prevents duplicate emails in the same audience.

---

**That's it!** Your waitlist is now fully managed in Resend. No database needed! 🐻🍯
