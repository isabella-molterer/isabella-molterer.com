<template>
  <!-- Slider main container -->
  <div id="my-swiper" class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div v-for="item in items" :key="item.id" class="swiper-slide slide">
        <h3 class="slide__title">{{ item.title }}</h3>
        <div class="slide__tags"> 
          <span v-for="tag in item.tags" :key="tag" class="slide__tags__tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script lang="ts">
// core version + navigation, pagination modules:
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper(".swiper", {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters
      direction: "horizontal",
      loop: false,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },

      initialSlide: 1,
      slidesPerView: 1,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        1024: {
          slidesPerView: 2,
        },
      },
    });
  },
};
</script>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";
.swiper {
  width: 100%;
  height: 380px;
  overflow: visible;

  @media screen and (min-width: $breakpoint--sm) {
    height: 300px;
  }

  @media screen and (min-width: $breakpoint--md) {
    height: 280px;
    width: 90%;
  }

  &-button-next,
  &-button-prev {
    color: $color--primary;
  }

  &-pagination {
    display: none;

    &-bullet-active {
      background: $color--primary;
    }
  }
}

.slide {
  padding: 0 3rem;
  display: grid;
  place-content: center;

  @media screen and (min-width: $breakpoint--md) {
    display: block;
    padding: 0 1rem;
  }

  &__title {
    margin-top: 0;
    margin-bottom: calc($space-unit * 2);
    text-align: center;
    width: 100%;

    @media screen and (min-width: $breakpoint--md) {
      margin-top: 2rem;
    }
  }

  &__tags {
    display: flex;
    gap: calc($space-unit / 2) $space-unit;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-width: $breakpoint--md) {
      padding: 0 3rem;
    }

    &__tag {
      border-radius: 100px;
      border: 1px solid $color--primary;
      color: $color--primary;
      padding: calc($space-unit / 2) $space-unit;
    }
  }
}
</style>
