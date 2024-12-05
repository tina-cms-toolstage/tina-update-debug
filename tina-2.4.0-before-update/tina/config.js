import { defineConfig } from 'tinacms'

import globalSettings from './collections/global-settings'
import navigation from './collections/navigation'
import page from './collections/page'
import testimonial from './collections/testimonial'

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  admin: {
    auth: {
      onLogin: async ({ token }) => {
        location.href = `/api/preview/enter?token=${token.id_token}&slug=${location.pathname}`
      },
      onLogout: async () => {
        location.href = `/api/preview/exit?slug=${location.pathname}`
      },
    },
  },
  media: {
    // If you wanted cloudinary do this
    loadCustomStore: async () => {
      const pack = await import('next-tinacms-cloudinary')
      return pack.TinaCloudCloudinaryMediaStore
    },
    // this is the config for the tina cloud media store
    // tina: {
    //   publicFolder: 'public',
    //   mediaRoot: 'uploads',
    // },
  },
  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin', // within the public folder
  },
  schema: {
    collections: [globalSettings, navigation, page, testimonial],
  },
})

export default config
