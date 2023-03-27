<template>
  <div class="page page-imprint container">
    <TheHeader />
    <div class="imprint">
      <h1 class="imprint__headline headline headline--has-separator">Imprint</h1>

      <div class="imprint__address">
        <h3>Address</h3>
        <p>
          Isabella Molterer<br>
          Leitnerstraße 23<br>
          5412 Puch bei Hallein<br>
          Austria
        </p>
      </div>

      <div class="imprint__contact">
        <h3>Contact</h3>
        <p>
          <span><NuxtLink to="mailto:isabella.molterer@gmail.com">isabella.molterer@gmail.com</NuxtLink></span><br>
          <span><NuxtLink to="tel:+43 660 3569 577">+43 660 3569 577</NuxtLink></span>
        </p>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.imprint {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 670px;
  padding: $space-sm 0;
  margin: 0 auto;
  text-align: center;            
}
</style>