# Pages

Nuxt provides a file-based routing to create routes within your web application using Vue Router under the hood.
This directory is optional, meaning that vue-router won't be included if you only use app.vue (unless you set pages: true in nuxt.config or have a app/router.options.ts), reducing your application's bundle size.

Pages must have a single root element to allow route transitions between pages. (HTML comments are considered elements as well.)