# Project Scope & Architecture (DELE.TO)

## 1) What this project is

**DELE.TO** is a secure secret/credential sharing web app.

Core idea:

- Your plaintext secret is **encrypted in the browser** using the Web Crypto API (AES-256-GCM).
- The server stores only **encrypted** data.
- The decryption key is placed into the **URL fragment** (the part after `#`), which is **never sent to the server**.

This provides a zero-knowledge style workflow: the server cannot decrypt the secret.

## 2) What the project aims to solve

- Share passwords / API keys / credentials without sending plaintext through chat tools.
- Support self-destruction via:
  - expiration time
  - maximum view count
- Optional password gate for an extra protection layer.

## 3) High-level architecture

### Client-side

- Generates encryption key + IV.
- Encrypts user input.
- Sends encrypted payload to server.
- Builds the share link:
  - `/view/<id>#<exportedKey>`

### Server-side

- Receives encrypted payload.
- Stores it with TTL.
- On retrieval, returns encrypted payload.
- Tracks view count and deletes when max views reached.

### Storage

- **Redis (Upstash)** for production/serverless use.
- Optional local file storage fallback for local development.

## 4) Next.js project structure (important folders)

- `app/`
  - Next.js App Router routes.
  - Contains pages, layouts, server actions.
- `app/actions/`
  - Server Actions used for creating and fetching shares.
  - Key file: `app/actions/share.ts`
- `app/create/`
  - UI to create a secret.
- `app/view/[id]/`
  - UI to retrieve and decrypt a secret.
- `lib/`
  - Shared utilities.
  - `lib/crypto.ts` contains client-side encryption utilities.
- `components/`
  - UI components.

## 5) Key data flow (Create → View)

### Create flow

1. User enters a secret in `/create`.
2. Browser generates an AES-GCM key and IV.
3. Browser encrypts the plaintext.
4. Browser calls a server action to store:
   - `encryptedContent`
   - `iv`
   - metadata (expiry, max views, etc.)
5. Server returns an `id`.
6. Browser generates share link: `/view/<id>#<key>`.

### View flow

1. Recipient opens `/view/<id>#<key>`.
2. The UI fetches the encrypted payload from the server (server action).
3. The UI reads `<key>` from the URL fragment and decrypts locally.
4. Server increments view count and deletes data when max views is reached.

## 6) Deployment model on Vercel

### Why Redis is required on Vercel

Vercel runs Next.js on serverless infrastructure where:

- the filesystem is **not reliable for persistence** across invocations
- multiple serverless instances may run concurrently

Therefore production deployments should use Redis (Upstash REST).

### What you configure in Vercel

Environment variables:

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

Recommended:

- `SALT`

Build settings:

- Install: `pnpm install`
- Build: `pnpm build`
- Node version: **20.x**

## 7) How the main server action works

File: `app/actions/share.ts`

Responsibilities:

- Initialize Redis when credentials exist.
- Create a share record:
  - id
  - encrypted content
  - expiration
  - max views
  - password hash (optional)
- Store the record with TTL.
- Retrieve record and enforce:
  - expiration
  - view count
  - password validation
- Delete when max views reached.

## 8) Operational notes

- Encryption keys must remain in the URL fragment for the recipient to decrypt.
- If you rotate `SALT`, existing password-protected shares may become invalid.
- If Redis credentials are missing in production (Vercel), creating shares will fail.

