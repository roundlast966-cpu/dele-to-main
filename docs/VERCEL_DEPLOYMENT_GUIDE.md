# Vercel Deployment Guide (DELE.TO)

This guide is tailored to this repository (`dele-to-main`) and aims to help you deploy to **Vercel** without runtime surprises.

## 1) Prerequisites

- Node.js **20+** (recommended for this repo)
- A Vercel account
- An Upstash Redis database (recommended/required for Vercel)

## 2) Understand the Storage Requirement on Vercel

This project stores encrypted shares server-side.

- **Local development** can use file storage (`.secure-shares/shares.json`).
- **Vercel** runs on serverless/edge infrastructure where the filesystem is **ephemeral**.

Because of that, this repo has been adjusted so that:

- On **Vercel**, the app **requires Redis**.
- File storage is disabled by default on Vercel.

## 3) Create an Upstash Redis database

1. Go to https://upstash.com/
2. Create a Redis database.
3. Copy the REST credentials:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`

> This project also supports `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`.

## 4) Configure Environment Variables in Vercel

In Vercel:

1. Open your project
2. Go to:
   - **Settings**
   - **Environment Variables**

Add these variables (Production + Preview as needed):

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

Recommended:

- `SALT`
  - Used for password-protected shares.
  - Use a strong random value.

Optional:

- `DEBUG_ENABLED`
  - Set to `true` only for short debugging sessions.

Notes:

- Do **not** commit `.env` to git.
- `.env.example` shows the required variable names.

## 5) Import the repository into Vercel

### Option A: Deploy from GitHub

1. Push this repository to GitHub.
2. In Vercel dashboard, click **Add New… → Project**.
3. Import the GitHub repo.

### Option B: Deploy from Vercel CLI

1. Install Vercel CLI
2. Run `vercel` in the repo
3. Follow prompts

## 6) Build & Install Settings (important for this repo)

This repo uses:

- `pnpm-lock.yaml`
- `packageManager` field specifying pnpm

Vercel usually detects pnpm automatically. If you need to set it explicitly:

- **Install Command**: `pnpm install`
- **Build Command**: `pnpm build`
- **Output Directory**: `.next` (default)

### patch-package

This repo includes a Next.js patch in `patches/` and `package.json` has:

- `postinstall`: `patch-package`

So Vercel will apply patches during install.

## 7) Node Version

This repo is configured to expect Node **>= 20**.

In Vercel:

- Go to **Settings → General → Node.js Version**
- Select **20.x**

## 8) First Deploy Checklist

Before pressing deploy:

- Verify env vars exist in Vercel:
  - `KV_REST_API_URL`
  - `KV_REST_API_TOKEN`
  - `SALT` (recommended)
- Verify Node version is **20.x**

## 9) Post-Deploy Verification

After deployment, test:

- `/` home page loads
- `/create` creates a secret
- The generated link:
  - `/view/<id>#<key>`
  - opens and decrypts successfully

## 10) Common Issues & Fixes

### A) “Failed to store secure share” on Vercel

Cause:

- Redis env vars are missing/incorrect.

Fix:

- Add `KV_REST_API_URL` and `KV_REST_API_TOKEN` (or Upstash equivalents) in Vercel project env vars.
- Redeploy.

### B) pnpm / dependency mismatch

Cause:

- Using `latest` dependency versions can break reproducibility.

Fix:

- This repo pins critical dependencies (Upstash Redis + Radix switch) and relies on `pnpm-lock.yaml`.

### C) Password-protected shares fail across deploys

Cause:

- `SALT` changes between deployments.

Fix:

- Set a stable `SALT` env var in Vercel.

## 11) Recommended Production Settings

- Always use Redis on Vercel.
- Keep `DEBUG_ENABLED` off in production.
- Use a strong, stable `SALT`.

