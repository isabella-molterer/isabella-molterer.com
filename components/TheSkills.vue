<template>
  <div class="section section__skills skills">
    <TheHeadline
      alignment="center"
      headline="Skills"
      subline="& Technologies"
      tag-type="h2"
      has-separator
    />
    <div class="skills__swiper">
      <TheSlider :items="skills" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: "Design",
          tags: ["Figma", "InVision", "Adobe XD", "Photoshop", "Illustrator"],
        },
        {
          title: "Frontend",
          tags: [
            "HTML",
            "SCSS",
            "LESS",
            "Twig",
            "Bootstrap",
            "JavaScript",
            "TypeScript",
            "Vue.js",
            "React.js",
          ],
        },
        {
          title: "Backend",
          tags: [
            "Node.js",
            "Express.js",
            "Nest.js",
            "Python",
            "Ruby",
            "SQL",
            "PHP",
            "Symfony",
          ],
        },
        {
          title: "Platforms & Tools",
          tags: ["Docker", "Webpack", "Git", "Wordpress", "Shopware 5 & 6"],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.skills {
  padding: $space-lg 0;
  background: darken($color--background-lm, 5%);
  position: relative;

  &__swiper {
    margin: 1em -100%; /* old browsers fallback */
    margin: 1em calc(50% - 50vw);
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background: darken($color--background-lm, 5%);
  }

  &::before {
    left: -100%;
  }

  &::after {
    right: -100%;
  }
}

.dark-mode {
  .skills {
    background: lighten($color--background-dm, 5%);

    &::before,
    &::after {
      background: lighten($color--background-dm, 5%);
    }
  }
}
</style>
