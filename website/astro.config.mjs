// @ts-check
import {defineConfig, fontProviders} from 'astro/config'
import {loadEnv} from 'vite'

import sanity from '@sanity/astro'

const {PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET} = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  '',
)

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Work Sans',
      cssVariable: '--font-work-sans',
    },
  ],
})
