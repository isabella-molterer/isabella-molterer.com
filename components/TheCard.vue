<template>
  <div :class="`card ${additionalClasses}`">
    <h3>{{ headline }}</h3>
    <h4 v-if="subline">{{ subline }}</h4>
    <p v-if="beginDate && endDate" class="card__date">
      {{ beginDate }} - {{ endDate }}
    </p>
    <p v-if="description" v-html="description"></p>
  </div>
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
    beginDate: {
      type: String,
      default: "",
    },
    endDate: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.card {
  background: $color--gradient-10;
  padding: $space-lg;
  position: relative;

  @media screen and (min-width: $breakpoint--lg) {
    padding: $space-xl;
  }

  h3 {
    font-family: "Poppins-Bold", monospace, sans-serif;
    margin-top: 0;
    text-transform: capitalize;
  }

  h4 {
    margin-bottom: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  &__date {
    color: $color--grey;
    margin-bottom: $space-sm;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    border-width: 3px;
    border-style: solid;
    top: 0;
    left: 0;
  }

  &::before {
    width: 40px;
    height: 40px;
    border-color: $color--primary;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-color: transparent;
    @include gradient(0.4turn);
    border-left: none;
    border-top: none;
  }
}

.dark-mode {
  .card__date {
    color: $color--silver;
  }
}
</style>
