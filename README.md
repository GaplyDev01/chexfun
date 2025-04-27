This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## pawnsfun

## Environment Variables Required

You must set the following environment variables for both local development and production deployment:

- `NEXT_PUBLIC_SUPABASE_URL` — Your Supabase project URL (e.g. https://ospgpgpahqgalaufcomo.supabase.co)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Your Supabase anon public key

These must be set in both `.env` and `.env.local` files at the root of the project. Without these, the app will fail to connect to Supabase and builds will fail on deployment.

Example `.env`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ospgpgpahqgalaufcomo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcGdwZ3BhaHFnYWxhdWZjb21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NzYzMzIsImV4cCI6MjA2MTE1MjMzMn0.houQzJX0k4S9MbnPODy13rK8oIXq-QwuuRxD9lOjE9s
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
