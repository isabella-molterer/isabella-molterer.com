<template>
    <header>
      <TheToggle />
      <TheSocials />
    </header>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  width: 100%;
  height: 100px;

  @media screen and (min-width: $breakpoint--md) {
    padding: 0;
  }
}
</style>