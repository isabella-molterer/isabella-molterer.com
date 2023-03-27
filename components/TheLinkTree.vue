<template>
  <ul class="linktree">
    <li class="linktree__item">
      <NuxtLink class="linktree__link btn-link" to="/CV.pdf" target="_blank">Download CV</NuxtLink>
    </li>
    <li class="linktree__item">
      <NuxtLink class="linktree__link btn-link" to="https://www.linkedin.com/in/isabella-molterer" target="_blank">LinkedIn</NuxtLink>
    </li>
    <li class="linktree__item">
      <NuxtLink class="linktree__link btn-link" to="https://github.com/isabella-molterer" target="_blank">GitHub</NuxtLink>
    </li>
    <li class="linktree__item">
      <NuxtLink class="linktree__link btn-link" to="https://www.instagram.com/re_be11a" target="_blank">Instagram</NuxtLink>
    </li>
    <li class="linktree__item">
      <NuxtLink class="linktree__link btn-link" to="mailto:isabella.molterer@gmail.com">Contact</NuxtLink>
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
