import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/')
const isUserPagesRepository =
  Boolean(repositoryOwner) && repositoryName === `${repositoryOwner.toLowerCase()}.github.io`
const defaultBase = repositoryName && !isUserPagesRepository ? `/${repositoryName}/` : '/'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Project Pages sites use /<repository>/; a <user>.github.io repository uses /.
  // GitHub Actions exposes GITHUB_REPOSITORY, so this adapts automatically after migration.
  base: process.env.VITE_BASE_PATH ?? defaultBase,
})
