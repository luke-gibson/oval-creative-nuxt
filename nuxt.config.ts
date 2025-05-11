// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/strapi',
  ],
  tailwindcss: {
    config: './tailwind.config.js',
  },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL,
      siteUrl: 'https://ovalcreative.co.uk',
    }
  },
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  googleFonts: {
    families: {
      'Montserrat+Alternates': [400, 500, 700, 800],
    },
    display: 'swap',
  },
  css: [
    '@/assets/typography.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ]
    }
  }
})