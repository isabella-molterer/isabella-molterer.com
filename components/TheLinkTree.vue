<template>
  <ul class="linktree">
    <li class="linktree__item">
      <NuxtLink class="linktree__link btn-link" to="/CV.pdf" target="_blank">Download CV</NuxtLink>
    </li>
    <li class="linktree__item">
      <a class="linktree__link btn-link" href="https://www.linkedin.com/in/isabella-molterer" target="_blank">LinkedIn</a>
    </li>
    <li class="linktree__item">
      <a class="linktree__link btn-link" href="https://github.com/isabella-molterer" target="_blank">GitHub</a>
    </li>
    <li class="linktree__item">
      <a class="linktree__link btn-link" href="https://www.instagram.com/re_be11a" target="_blank">Instagram</a>
    </li>
    <li class="linktree__item">
      <a class="linktree__link btn-link" href="mailto:isabella.molterer@gmail.com">Contact</a>
    </li>
  </ul>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.linktree {
  text-align: center;

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
