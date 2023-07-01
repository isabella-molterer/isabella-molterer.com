<template>
  <div class="quote">
    <FontAwesomeIcon
      class="icon"
      icon="fa-solid fa-quote-right"
      alt="Quote Icon"
    />
    <div class="quote__content">
      <p>
        Hi, nice to meet you! I am Isabella, a Salzburg-based web developer.
      </p>
      <p>
        With a master's degree in Web Engineering, I specialize in full-stack
        web development, with a keen focus on frontend development. Passionate
        about web development and design, I am driven to learn new technologies
        and tackle challenging projects.
      </p>
      <p>
        I created this website to showcase my portfolio and connect with
        like-minded individuals. As you explore my website, you will find a
        collection of my best projects, accomplishments, and experiences.
      </p>
      <p>
        If you have any questions or comments, please do not hesitate to reach
        out to me. I would love to hear from you!
      </p>
    </div>
    <FontAwesomeIcon
      class="icon"
      icon="fa-solid fa-quote-left"
      alt="Quote Icon"
    />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.quote {
  margin: 3rem 0 !important;
  position: relative;
  width: 100%;

  @media screen and (min-width: $breakpoint--lg) {
    margin: 3rem 0 0 !important;
  }

  .icon {
    width: 40px;
    height: 40px;
    position: absolute;
    background: $color--background-lm;

    @media screen and (min-width: $breakpoint--lg) {
      width: 45px;
      height: 45px;
    }

    path {
      fill: none;
      stroke-width: 20px;
    }

    &.fa-quote-right {
      left: 0;
      bottom: 5%;
      transform: translate(-50%, -5%);

      path {
        stroke: $color--primary;
      }
    }

    &.fa-quote-left {
      right: 0;
      top: 5%;
      transform: translate(50%, 5%);

      path {
        stroke: $color--secondary;
      }
    }
  }

  .headline {
    margin-top: 0;
  }

  &__content {
    border: 2px solid transparent;
    border-image: linear-gradient(90deg, $color--primary, $color--secondary) 1;
    padding: calc($space-unit * 2) calc($space-unit * 2);

    @media screen and (min-width: $breakpoint--lg) {
      padding: calc($space-unit * 3);
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }
}

.dark-mode {
  .quote .icon {
    background: $color--background-dm;
  }
}
</style>
