<template>
  <div class="page page-error container">
    <Head>
      <Meta name="robots" content="noindex, nofollow" />
    </Head>
    <TheHeader />

    <TheError :error="error" />

    <TheFooter />
  </div>
</template>

<script>
import TheError from "./components/TheError.vue";

export default {
  components: { TheError },
  data() {
    return {
      error: Object,
    };
  },
};
</script>
