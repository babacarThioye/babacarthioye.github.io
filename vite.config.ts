import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // A user Pages site is served from https://<user>.github.io/.
  // Set VITE_BASE_PATH only when deliberately deploying below a subpath.
  base: process.env.VITE_BASE_PATH ?? '/',
})
