<template>
  <header>
    <TheThemeToggle />
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
  width: 100%;
  height: 100px;
  min-height: 100px;
}
</style>
