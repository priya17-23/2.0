# Liquid Effect

Next.js app with **shadcn-style** structure, **Tailwind CSS**, and **TypeScript**. Includes the Liquid Effect background component using Three.js (loaded via CDN).

## Setup

```bash
npm install
# If you hit peer dependency conflicts:
# npm install --legacy-peer-deps

npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use **Open demo** to see the full-screen liquid effect at `/demo`.

## Project structure

- **Components:** `@/components` (alias in `tsconfig.json`)
- **UI components:** `@/components/ui` — reusable pieces like the liquid effect
- **Styles:** Tailwind in `app/globals.css`; config in `tailwind.config.ts`
- **Entry:** `app/page.tsx` (home), `app/demo/page.tsx` (liquid demo)

## Why `components/ui`?

Keeping UI primitives in `components/ui`:

- Matches shadcn’s default layout so you can add more components with the shadcn CLI without moving files.
- Keeps a clear split between layout/page components and reusable UI.
- Lets tools (e.g. `components.json`) assume a stable path for generated components.

If your default were different, you’d need to either create `components/ui` and put shared components there, or update `components.json` and any docs to match your chosen path.

## Liquid Effect component

- **File:** `components/ui/liquid-effect-animation.tsx`
- **Usage:** Import and render `<LiquidEffectAnimation />` (e.g. on `/demo`).
- **Image:** Background image is an Unsplash stock image (gradient); change `LIQUID_IMAGE_URL` in the component to use another URL.
- **Dependencies:** No extra npm packages; Three.js liquid background is loaded from jsDelivr CDN as an ES module in the browser.
- **Icons:** This component doesn’t use icons; the rest of the app can use `lucide-react` (already in `package.json`).

## Adding more shadcn components

With the existing structure you can use the shadcn CLI:

```bash
npx shadcn@latest init   # if you need to re-init
npx shadcn@latest add button
```

Components will be added under `components/ui` by default.
