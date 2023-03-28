<template>
  <footer>
    <div class="regulartory-links" role="navigation">
      <NuxtLink title="Home" to="/">Home</NuxtLink> |
      <NuxtLink title="Imprint" to="/imprint">Imprint</NuxtLink> |
      <NuxtLink title="Privacy" to="/privacy">Privacy</NuxtLink>
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
  gap: $space-md;
  transition: $transition--normal;
  padding: $space-xl 0;
  flex-direction: column;
  border-style: solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: $color--gradient;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  margin-top: $space-xl;

  @media screen and (min-width: $breakpoint--md) {
    flex-direction: row;
  }
}
</style>
