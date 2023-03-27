<template>
  <nav>
    <ul class="socials">
      <li>
        <a class="socials__link" href="https://github.com/isabella-molterer" target="_blank">
          <Icon name="GithubIcon" size="32" />
        </a>
      </li>
      <li>
        <a class="socials__link" href="https://www.linkedin.com/in/isabella-molterer" target="_blank">
          <Icon name="LinkedInIcon" size="32" />
        </a>
      </li>
      <li>
        <a class="socials__link" href="mailto:isabella.molterer@gmail.com">
          <Icon name="MailIcon" size="36" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.socials {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  &__link {
    padding: $space-sm $space-xs;

    .icon,
    .icon path {
      fill: $color--dark;
      transition: $transition--normal;
    }

    &:hover {
      .icon,
      .icon path {
        fill: $color--primary;
      }
    }
  }
}

.dark-mode {
  .icon,
  .icon path {
    fill: $color--light;
  }
}
</style>
