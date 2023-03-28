<template>
  <div class="page page-imprint container">
    <TheHeader />
    <div class="imprint">
      <h1 class="imprint__headline headline headline--has-separator">
        Imprint
      </h1>

      <div class="imprint__address">
        <h3>Address</h3>
        <p>
          Isabella Molterer<br />
          Leitnerstraße 23<br />
          5412 Puch bei Hallein<br />
          Austria
        </p>
      </div>

      <div class="imprint__contact">
        <h3>Contact</h3>
        <p>
          <a href="mailto:isabella.molterer@gmail.com"
             title="E-mail: isabella.molterer@gmail.com"
             aria-label="E-mail: isabella.molterer@gmail.com"
            >isabella.molterer@gmail.com</a
          ><br />
          <a href="tel:+43 660 3569 577"
             title="Call: +43 660 3569 577"
             aria-label="Call: +43 660 3569 577"
          >+43 660 3569 577</a>
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
