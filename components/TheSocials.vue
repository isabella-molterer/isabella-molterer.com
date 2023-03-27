<template>
  <nav>
    <ul class="socials">
      <li>
        <NuxtLink class="socials__link" to="https://github.com/isabella-molterer" target="_blank">
          <Icon name="GithubIcon" size="32" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="socials__link" to="https://www.linkedin.com/in/isabella-molterer" target="_blank">
          <Icon name="LinkedInIcon" size="32" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="socials__link" to="mailto:isabella.molterer@gmail.com">
          <Icon name="MailIcon" size="36" />
        </NuxtLink>
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
