// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    watchers: {
        webpack: {
          aggregateTimeout: 300,
        }
    }
})