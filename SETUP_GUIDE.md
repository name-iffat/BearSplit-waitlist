# BearSplit Waitlist - Complete Setup Guide

## Overview
Full waitlist system using:
- **Supabase** - Database to store emails
- **Resend** - Email notifications  
- **Vercel** - Hosting + Serverless API

---

## Step 1: Supabase Setup

### 1.1 Create Project
1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Name: `bearsplit-waitlist`
4. Set a password
5. Choose region closest to you
6. Click "Create Project" and wait ~2 min

### 1.2 Create Waitlist Table
1. Go to **SQL Editor** (left sidebar)
2. Click "New Query"
3. Paste this SQL and click **Run**:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from your API)
CREATE POLICY "Allow inserts" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Allow service role to read (for admin access)
CREATE POLICY "Allow service read" ON waitlist
  FOR SELECT
  USING (true);
```

### 1.3 Get Your Credentials
1. Go to **Settings** > **API** (left sidebar)
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

---

## Step 2: Resend Setup

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name: `BearSplit`
4. Permission: **Full Access**
5. Copy the key (starts with `re_`)

---

## Step 3: Add Environment Variables to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your BearSplit project
3. Go to **Settings** > **Environment Variables**
4. Add these 3 variables:

| Name | Value |
|------|-------|
| `SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `SUPABASE_ANON_KEY` | `eyJxxxxxxxxx...` |
| `RESEND_API_KEY` | `re_xxxxxxxxx...` |

5. Click **Save**

---

## Step 4: Deploy to Vercel

```bash
# Push your changes
git add .
git commit -m "Add waitlist with Supabase + Resend"
git push
```

Vercel will automatically redeploy!

---

## Local Testing (Optional)

To test locally before deploying:

### 1. Create `.env` file in project root:
```bash
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJxxxxxxxxx...
RESEND_API_KEY=re_xxxxxxxxx...
```

### 2. Run with Vercel CLI:
```bash
vercel dev
```

This runs both frontend AND the `/api/waitlist` endpoint locally.

> **Note**: Regular `npm run dev` won't work for testing the API - you must use `vercel dev`!

---

## Step 5: Test Your Waitlist

1. Go to your live site
2. Enter an email in the waitlist form
3. Check:
   - ✅ Supabase Table Editor → `waitlist` table → email appears
   - ✅ `bearsplitapp@gmail.com` receives notification

---

## View Your Waitlist Emails

### Option A: Supabase Dashboard
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click **Table Editor** (left sidebar)
4. Click `waitlist` table
5. See all emails with timestamps!

### Option B: Export to CSV
1. In Table Editor, click the `waitlist` table
2. Click **Export** (top right)
3. Download CSV

---

## Troubleshooting

### "Failed to save email"
- Check Supabase URL and Key are correct
- Verify RLS policies are created

### "Email already registered"
- Working as expected! Prevents duplicates

### No email notification
- Check Resend API key is correct
- Check spam folder
- Resend free tier: 100 emails/day

---

## Files Created

| File | Purpose |
|------|---------|
| `api/waitlist.ts` | Vercel serverless function |
| `.env.example` | Environment template |
| `src/components/WaitlistForm.tsx` | Updated form |

---

You're all set! 🐻🍯
