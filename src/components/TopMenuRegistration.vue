<template>
  <div class="top-menu-registration">
    <router-link
      class="top-menu-registration__item"
      exact-active-class="top-menu-registration__item--active"
      :to="{ name: 'Home' }"
    >
      <img src="../assets/logo.svg" alt="logo montecinema" />
    </router-link>
    <p class="top-menu-registration__item">
      Developed with
      <span class="top-menu-registration__item--heart">♥</span> by Monterail
    </p>
  </div>
</template>

<script>
export default {
  name: "TopMenuRegistration",
};
</script>
<style lang="scss" scoped>
.top-menu-registration {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 4.8rem;
  &__item {
    text-transform: uppercase;
    font: normal 500 1.6rem/2.1rem "Roboto Mono";
    text-align: right;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: $text;
    &--heart {
      color: $cherry-red;
    }
  }
}
</style>
