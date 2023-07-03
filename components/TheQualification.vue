<template>
  <div class="section section__qualification qualification">
    <TheHeadline
      alignment="center"
      headline="Experience"
      subline="& Education"
      tag-type="h2"
    />

    <TheToggle :toggle-on="toggleOn" @toggle="toggleValue" />

    <div v-if="!toggleOn" class="qualification__experience cards">
      <TheCard
        additional-classes="card__experience"
        headline="Frontend Web Developer"
        subline="pixelart GmbH"
        begin-date="03.07.2023"
        end-date="NOW"
        description="Developing digital products and business solutions using React and Vue.js"
      />
      <TheCard
        additional-classes="card__experience"
        headline="Fullstack Web Developer"
        subline="Nolimits Digital Business GmbH"
        begin-date="01.02.2021"
        end-date="01.03.2023"
        description="Designing and developing websites using Wordpress and Shopware"
      />
      <TheCard
        additional-classes="card__experience"
        headline="Web Developer Internship"
        subline="Atikon EDV & Marketing GmbH"
        begin-date="11.02.2019"
        end-date="28.06.2019"
        description="Designing and developing websites using a custom CMS framework"
      />
    </div>

    <div v-else class="qualification__education cards">
      <TheCard
        additional-classes="card__education"
        headline="Master of Science in Engineering"
        subline="University of Applied Sciences Salzburg"
        begin-date="2019"
        end-date="2022"
        description="<u>Course of study:</u> MultiMediaTechnology with focus on web engineering"
      />
      <TheCard
        additional-classes="card__education"
        headline="Bachelor of Science in Engineering"
        subline="University of Applied Sciences Hagenberg"
        begin-date="2016"
        end-date="2019"
        description="<u>Course of study:</u> Media technology and design with focus on web engineering"
      />
      <TheCard
        additional-classes="card__education"
        headline="Grammar School"
        subline="Gymnasium Werndlpark Steyr"
        begin-date="2008"
        end-date="2016"
        description="Focus on foreign languages, fluent in German (native), English, Italian"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TheToggle from "./TheToggle.vue";

export default {
  components: {
    TheToggle,
  },
  data() {
    return {
      toggleOn: false,
    };
  },
  methods: {
    toggleValue() {
      this.toggleOn = !this.toggleOn;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.qualification {
  &__experience {
    margin-bottom: 2rem;
  }
}

.cards {
  display: grid;
  gap: $space-lg;

  @media screen and (min-width: $breakpoint--lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
