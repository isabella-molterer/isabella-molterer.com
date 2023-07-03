<template>
  <div class="toggle-buttons">
    <a
      :class="['btn', 'btn--toggle', !toggleOn ? 'is--active' : '']"
      @click="toggle"
    >
      <FontAwesomeIcon
        class="icon"
        icon="fa-solid fa-code"
        width="32"
        alt="Code Icon"
      />
      Experience</a
    >
    <a
      :class="['btn', 'btn--toggle', toggleOn ? 'is--active' : '']"
      @click="toggle"
    >
      <FontAwesomeIcon
        class="icon"
        icon="fa-solid fa-graduation-cap"
        width="32"
        alt="Graduation Icon"
      />
      Education</a
    >
  </div>
</template>

<script lang="ts">
export default {
  props: {
    toggleOn: {
      type: Boolean,
    },
  },
  emits: ["toggle"],
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.toggle-buttons {
  text-align: center;
  margin-bottom: $space-xxl;
}
</style>
