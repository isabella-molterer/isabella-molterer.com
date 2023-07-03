<template>
  <ul class="linktree">
    <li class="linktree__item">
      <NuxtLink class="linktree__link btn btn--primary btn-link" to="/"
        >Portfolio</NuxtLink
      >
    </li>
    <li class="linktree__item">
      <NuxtLink
        class="linktree__link btn btn--primary btn-link"
        to="/CV.pdf"
        target="_blank"
        >CV</NuxtLink
      >
    </li>
    <li class="linktree__item">
      <a
        class="linktree__link btn btn--primary btn-link"
        href="https://www.linkedin.com/in/isabella-molterer"
        target="_blank"
        >LinkedIn</a
      >
    </li>
    <li class="linktree__item">
      <a
        class="linktree__link btn btn--primary btn-link"
        href="https://github.com/isabella-molterer"
        target="_blank"
        >GitHub</a
      >
    </li>
    <li class="linktree__item">
      <a
        class="linktree__link btn btn--primary btn-link"
        href="mailto:isabella.molterer@gmail.com"
        >Contact</a
      >
    </li>
  </ul>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.linktree {
  margin-top: 100px;
  text-align: center;

  @media screen and (min-width: $breakpoint--sm) {
    margin-top: 0;
  }

  &__item {
    margin: $space-sm 0;
  }

  &__link {
    width: 100%;

    @media screen and (min-width: $breakpoint--sm) {
      max-width: 495px;
    }
  }
}
</style>
