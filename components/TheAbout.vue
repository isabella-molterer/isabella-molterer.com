<template>
  <div class="about">
    <div class="about__headline">
      <TheHeadline
        alignment="left"
        headline="Isabella"
        subline="Web Developer"
        tag-type="h1"
        has-separator
      />
    </div>
    <div class="about__text">
      <p>
        Hello and welcome to my portfolio website! I am Isabella, a web
        developer based in Salzburg, Austria. Explore my website to learn more
        about my latest projects and experiences. Thanks for visiting!
      </p>
    </div>
    <div class="about__buttons">
      <a class="btn btn--primary" href="/CV.pdf" target="_blank">Download CV</a>
      <a
        class="btn btn--secondary"
        href="mailto:isabella.molterer@gmail.com"
        target="_blank"
        >Contact me</a
      >
    </div>
  </div>
</template>

<style lang="scss">
.about {
  &__buttons {
    .btn {
      display: inline-block;

      &:first-of-type {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
