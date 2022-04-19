<template>
  <div class="welcome__movie-about">
    <span class="welcome__movie-about--black">soon in the cinema</span>
    <span class="welcome__movie-about--red">see all</span>
  </div>
</template>

<script>
export default {
  name: "WelcomeMovieAbout",
};
</script>
<style lang="scss" scoped>
.welcome__movie-about {
  width: 100%;
  max-width: 144rem;
  padding: 6.4rem 4.8rem 2.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  font: normal 700 2.2rem/170% "Roboto Mono";
  letter-spacing: 0.015em;
  &--red {
    color: $cherry-red;
  }
}
</style>
