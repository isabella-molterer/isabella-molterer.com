<template>
  <footer>
    <div class="regulartory-links">
      <NuxtLink to="/">Home</NuxtLink> | <NuxtLink to="/imprint">Imprint</NuxtLink> | <NuxtLink to="/privacy">Privacy</NuxtLink>
    </div>
    <TheSocials />
    <span>&copy; Isabella Molterer</span>
  </footer>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

footer {
  display: flex;
  text-align: center;
  justify-content: space-between;
  gap: 1.5rem;
  transition: all 300ms ease;
  padding: 3rem 0;
  flex-direction: column;
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: $color--gradient;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  margin-top: 3rem;

  @media screen and (min-width: $breakpoint--md) {
    flex-direction: row;
  }
}
</style>