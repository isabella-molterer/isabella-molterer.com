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
  gap: 1rem;

  &__link {
    .icon,
    .icon path {
      fill: $color--black;
      transition: all 300ms ease;
    }

    &:hover {
      .icon,
      .icon path {
        fill: $color--primary;
        transition: all 300ms ease;
      }
    }
  }
}

.dark-mode {
  .icon,
  .icon path {
    fill: $color--white;
  }
}
</style>
