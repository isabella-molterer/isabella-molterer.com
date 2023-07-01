<template>
  <component
    :is="tagType"
    :class="`headline ${additionalClasses}`"
    :style="{ textAlign: alignment }"
  >
    {{ headline }}
    <br />
    <span
      v-if="subline && hasSeparator"
      class="headline--has-outline headline--has-separator headline--is-subline"
    >
      {{ subline }}
    </span>
    <span v-else class="headline--has-outline headline--is-subline">
      {{ subline }}
    </span>
  </component>
</template>

<script lang="ts">
export default {
  props: {
    additionalClasses: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      required: true,
    },
    subline: {
      type: String,
      default: "",
    },
    alignment: {
      type: String,
      default: "left",
      validator: (value: string) =>
        ["left", "center", "right", "justify"].includes(value),
    },
    hasSeparator: {
      type: Boolean,
      default: false,
    },
    tagType: {
      type: String,
      required: true,
    },
  },
};
</script>
