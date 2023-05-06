<template>
  <div>
    <TheHeadline
      alignment="center"
      headline="Skills"
      subline="& Technologies"
      tag-type="h2"
    />
    <TheSlider :items="skills" />
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
            "Smarty",
            "Bootstrap",
            "Tailwind",
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
</style>
