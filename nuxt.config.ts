// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: [{ src: '~/plugins/aos', mode: 'client' }],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/image', '@nuxt/icon', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Raleway: true,
      Inter: true
    },
  },
});
