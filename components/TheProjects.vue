<template>
  <div class="section section__projects projects">
    <TheHeadline
      alignment="center"
      headline="Projects"
      subline="Overview"
      tag-type="h2"
      has-separator
    />
    <p>
      If you're interested in exploring more of my work, please take a moment to
      check out my Github profile! Browse my repositories and feel free to reach
      out with any questions or feedback – I'm always happy to connect with
      others in the tech community!
    </p>
    <a
      class="btn btn--primary btn--black"
      href="https://github.com/isabella-molterer"
      target="_blank"
    >
      <span
        ><FontAwesomeIcon
          class="icon"
          icon="fa-brands fa-github"
          width="32"
          alt="GitHub Icon"
      /></span>
      GitHub</a
    >
  </div>
</template>

<style lang="scss">
@import "./assets/styles/abstracts/variables.scss";

.projects {
  text-align: center;

  .btn {
    display: inline-flex;
  }
}
</style>
