# BearSplit Waitlist - Resend Integration Setup

## Prerequisites

1. **Get Resend API Key**:
   - Go to [resend.com](https://resend.com/)
   - Sign up for a free account
   - Navigate to API Keys section
   - Create a new API key

## Setup Steps

### 1. Create `.env` file

Create a `.env` file in the root directory:

```bash
RESEND_API_KEY=your_actual_resend_api_key_here
PORT=3001
```

> ⚠️ **Important**: Never commit your `.env` file to version control!

### 2. Verify Sending Domain (Optional but Recommended)

For production use, you should verify your own domain:

1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `bearsplit.app`)
3. Follow DNS setup instructions
4. Update `server/index.ts` line 17 to use your verified domain:
   ```typescript
   from: 'BearSplit Waitlist <waitlist@yourdomain.com>',
   ```

For testing, you can use the default `onboarding@resend.dev` domain.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

#### Option A: Run Both Frontend and Backend Together
```bash
npm run dev:all
```

This will start:
- Frontend on `http://localhost:5173` (or 5174 if 5173 is taken)
- Backend API on `http://localhost:3001`

#### Option B: Run Separately

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

### 5. Test the Waitlist Form

1. Open http://localhost:5173 in your browser
2. Enter an email address in the waitlist form
3. Click "Join the Waitlist"
4. You should receive an email at `bearsplitapp@gmail.com` with the submitted email

## How It Works

1. User submits email via the waitlist form
2. Frontend sends POST request to `http://localhost:3001/api/waitlist`
3. Backend validates the email and uses Resend API to send notification
4. Email notification sent to `bearsplitapp@gmail.com`
5. User sees success message

## Files Created

- `server/index.ts` - Express API server with Resend integration
- `.env.example` - Template for environment variables
- `tsconfig.server.json` - TypeScript config for server

## Production Deployment

### Deploy Backend

You can deploy the backend to:
- **Vercel**: Deploy the `server` folder as a serverless function
- **Railway**: Easy Node.js deployment
- **Render**: Free tier available
- **Heroku**: Classic choice

### Update Frontend API URL

After deploying the backend, update `src/components/WaitlistForm.tsx`:

```typescript
const response = await fetch('https://your-api-domain.com/api/waitlist', {
  // ...
});
```

## Troubleshooting

### CORS Error
If you get CORS errors, make sure the backend is running on `localhost:3001`.

### Resend API Error
- Check that your API key is correct in `.env`
- Verify the API key has necessary permissions

### Email Not Receiving
- Check spam folder
- Verify `bearsplitapp@gmail.com` is correct
- Check Resend dashboard for delivery logs

## Security Notes

- The `.env` file should never be committed to git
- In production, use environment variables on your hosting platform
- Consider adding rate limiting to prevent abuse
- Add input validation and sanitization

Enjoy your cozy waitlist! 🐻🍯
