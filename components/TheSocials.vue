<template>
  <nav>
    <ul class="socials">
      <li>
        <a
          role="button"
          title="GitHub Link"
          aria-label="Follow link to GitHub"
          class="socials__link"
          href="https://github.com/isabella-molterer"
          target="_blank"
        >
          <Icon name="GithubIcon" size="32" alt="GitHub Icon" />
        </a>
      </li>
      <li>
        <a
          role="button"
          title="LinkedIn Link"
          aria-label="Follow link to LinkedIn"
          class="socials__link"
          href="https://www.linkedin.com/in/isabella-molterer"
          target="_blank"
        >
          <Icon name="LinkedInIcon" size="32" alt="LinkedIn Icon"/>
        </a>
      </li>
      <li>
        <a 
          role="button"
          title="E-mail: isabella.molterer@gmail.com"
          aria-label="E-mail: isabella.molterer@gmail.com"
          class="socials__link" 
          href="mailto:isabella.molterer@gmail.com">
          <Icon name="MailIcon" size="36" alt="Mail Icon"/>
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
