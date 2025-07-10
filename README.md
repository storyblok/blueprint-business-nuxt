# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Then, generate SSL certificates for local development (into `./certifcates`). This is required to run the Next.js app with HTTPS, which is required to embed the application in Storyblok:

```bash
brew install mkcert
mkcert -key-file certificates/localhost-key.pem -cert-file certificates/localhost.pem localhost
```

## Set up environment variables

Copy and rename the `.env.example` file to `.env` in the root directory, then set your environment variables as needed.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
