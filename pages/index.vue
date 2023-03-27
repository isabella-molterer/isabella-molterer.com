<template>
  <div class="page page-index container">
    <TheHeader />
    <TheAbout />
    <TheFooter />
  </div> 
</template>

<script setup lang="ts">
  useJsonld({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Isabella Molterer',
    'url': 'https://isabella-molterer.com/',
    'description': 'Online portfolio of Isabella Molterer, a web developer based in Salzburg, Austria.'
  });

  useHead({
    link: [{ rel: 'canonical', href: 'https://isabella-molterer.com/' }],
  });
</script>
