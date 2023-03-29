// Nuxt config: https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "nuxt-jsonld", "nuxt-simple-sitemap"],
  watchers: {
    webpack: {
      aggregateTimeout: 300,
    },
  },
  // Sitemap:
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://isabella-molterer.com",
    },
  },
  // Global css:
  css: [
    "@/assets/styles/styles.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  plugins: ["~/plugins/fontawesome.ts"],
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Isabella Molterer - Web Developer Portfolio",
      meta: [
        {
          name: "author",
          content: "Isabella Molterer",
        },
        {
          name: "description",
          content:
            "Explore the web portfolio of Isabella, a web developer based in Salzburg, Austria.",
        },
        {
          name: "keywords",
          content:
            "Isabella Molterer, web developer, web designer, web engineering, Salzburg, Austria",
        },
        // favicon
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        // robots
        {
          name: "robots",
          content: "index,follow",
        },
        // opengraph
        {
          property: "og:site_name",
          content: "isabella-molterer",
        },
        {
          property: "og:title",
          content: "Isabella Molterer - Web Developer Portfolio",
        },
        {
          property: "og:description",
          content:
            "Explore the web portfolio of Isabella, a web developer based in Salzburg, Austria.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content:
            "https://isabella-molterer.com/isabella-molterer-social-sharing.jpg",
        },
        {
          property: "og:url",
          content: "https://isabella-molterer.com",
        },
        // twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "Isabella Molterer",
        },
        {
          name: "twitter:title",
          content: "Isabella Molterer - Web Developer Portfolio",
        },
        {
          name: "twitter:description",
          content:
            "Explore the web portfolio of Isabella, a web developer based in Salzburg, Austria.",
        },
        {
          name: "twitter:image",
          content:
            "https://isabella-molterer.com/isabella-molterer-social-sharing.jpg",
        },
      ],
      // favicons
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "mask-icon", color: "#5bbad5", href: "/safari-pinned-tab.svg" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
});
