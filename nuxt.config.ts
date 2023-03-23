// Nuxt config: https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode', 'nuxt-icon', 'nuxt-jsonld', 'nuxt-simple-sitemap'],
    watchers: {
      webpack: {
        aggregateTimeout: 300,
      },
    },
    // Sitemap:
    runtimeConfig: {
      public: {
        siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://isabella-molterer.com',
      }
    },
    // Global css:
    css: [
      '@/assets/styles/styles.scss',
    ],
    // Global page headers: https://go.nuxtjs.dev/config-head
    app: {
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        title: 'Isabella Molterer - Web Developer Portfolio',
        meta: [
          { 
            name: 'author', 
            content: 'Isabella Molterer'
          },
          { 
            name: 'description', 
            content: 'Explore the web portfolio of Isabella, a web developer based in Salzburg, Austria.'
          },
          { 
            name: 'keywords', 
            content: 'Isabella Molterer, portfolio, web developer, web designer'
          },
          // favicon
          { 
            name: 'msapplication-TileColor',
            content: '#ea5657' 
          },
          { 
            name: 'theme-color',
            content: '#ffffff' 
          },
          // robots
          { 
            name: 'robots', 
            content: 'index,follow'
          },
          // opengraph
          { 
            property: 'og:site_name', 
            content: 'isabella-molterer'
          },
          { 
            property: 'og:title', 
            content: 'Isabella Molterer - Web Developer Portfolio'
          },
          { 
            property: 'og:description', 
            content: 'Explore the web portfolio of Isabella, a web developer based in Salzburg, Austria.'
          },
          { 
            property: 'og:type', 
            content: 'website'
          },
          { 
            property: 'og:image', 
            content: '/isabella-molterer-social-sharing.jpg'
          },
          { 
            property: 'og:url', 
            content: 'https://isabella-molterer.com'
          },
          // twitter
          { 
            name: 'twitter:card', 
            content: 'website'
          },
          { 
            name: 'twitter:site', 
            content: 'Isabella Molterer'
          },
          { 
            name: 'twitter:title', 
            content: 'Isabella Molterer - Web Developer Portfolio'
          },
          { 
            name: 'twitter:description', 
            content: 'Explore the web portfolio of Isabella, a web developer based in Salzburg, Austria.'
          },
          { 
            name: 'twitter:image', 
            content: '/isabella-molterer-social-sharing.jpg'
          },
        ],
        // favicons
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
          { rel: 'manifest', href: '/site.webmanifest' },
        ]
      }
    }
  });
  