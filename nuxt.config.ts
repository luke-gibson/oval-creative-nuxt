// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  tailwindcss: {
    config: './tailwind.config.js',
  },
  googleFonts: {
    families: {
      'Montserrat+Alternates': [400, 500, 700, 900],
    },
    display: 'swap',
  },
})