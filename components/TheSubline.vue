<template>
  <component :is="tagType" :class="`headline ${additionalClasses}`">
    {{ text }}
  </component>
</template>

<script lang="ts">
export default {
  props: {
    additionalClasses: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      required: true,
    },
    tagType: {
      type: String,
      required: true,
    },
  },
};
</script>
