<template>
  <div class="error">
    <div class="error-message">
      <h1>Error 404</h1>
      <h2 class="headline headline--has-separator headline--has-outline">
        Page not found
      </h2>

      <NuxtLink class="btn-link" to="/">Return to home page</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: [Object, Function],
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.error {
  margin: $space-md 0 $space-xl;
  align-items: center;
  display: flex;
  justify-content: center;

  &-message {
    text-align: center;

    h1,
    h2 {
      margin-top: 0;
    }
  }

  footer {
    margin-top: 0;
  }
}
</style>
