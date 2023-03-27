<template>
  <div class="page page-error container">
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
