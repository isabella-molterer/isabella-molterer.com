<template>
  <label class="toggle">
    <input
      v-model="$colorMode.preference"
      class="toggle__checkbox"
      true-value="dark"
      false-value="light"
      type="checkbox"
    />
    <div class="toggle__slot slot">
      <div class="toggle__icon-wrapper icon-wrapper icon-wrapper--sun">
        <Icon name="SunIcon" />
      </div>
      <div class="toggle__button"></div>
      <div class="toggle__icon-wrapper icon-wrapper icon-wrapper--moon">
        <Icon name="MoonIcon" />
      </div>
    </div>
  </label>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.toggle {
  &__slot {
    position: relative;
    height: 2rem;
    width: 4rem;
    border: 3px solid #e4e7ec;
    border-radius: 2rem;
    background-color: lighten($color--silver, 5%);
    transition: all 250ms;

    &:hover {
      cursor: pointer;
      border: 3px solid $color--secondary;
    }
  }

  &__button {
    transform: translate(2.25rem, 0.225rem);
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    background-color: darken($color--silver, 10%);
    transition: background-color 250ms, border-color 250ms,
      transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  &__checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}

.icon-wrapper {
  &--sun {
    position: absolute;
    opacity: 1;
    transform: translate(0.5rem, -0.075rem) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);

    .icon {
      position: absolute;
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  &--moon {
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    opacity: 0;
    transform: translate(1.5rem, 0rem) rotate(0deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms,
      transform 500ms cubic-bezier(0.26, 2.5, 0.46, 0.71);

    .icon {
      position: absolute;
      height: 1.5rem;
      width: 1.5rem;
      color: $color--light;
    }
  }
}

.dark-mode {
  .toggle__slot {
    background-color: #374151;
  }

  .toggle__button {
    background-color: lighten($color--dark, 25%);
    box-shadow: inset 0px 0px 0px 0.75em $color--light;
    transform: translate(0.25rem, 0.225rem);
  }

  .icon-wrapper--sun {
    opacity: 0;
    transform: translate(1.5rem, 0rem) rotate(0deg);
  }

  .icon-wrapper--moon {
    opacity: 1;
    transform: translate(2rem, 0rem) rotate(-15deg);
  }
}
</style>
