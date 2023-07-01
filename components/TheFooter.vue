<template>
  <footer class="footer">
    <div class="footer__regulartory-links" role="navigation">
      <NuxtLink title="Linktree" to="/">Linktree</NuxtLink> |
      <NuxtLink title="Imprint" to="/imprint">Imprint</NuxtLink> |
      <NuxtLink title="Privacy" to="/privacy">Privacy</NuxtLink>
    </div>
    <TheSocials />
    <span class="footer__copyright">&copy; Isabella Molterer</span>
  </footer>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.footer {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  gap: $space-md;
  transition: $transition--normal;
  padding: $space-lg 0;
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
    gap: 0;

    &__copyright,
    &__regulartory-links {
      min-width: 200px;
    }
  }
}
</style>
