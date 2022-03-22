<template>
  <nav class="top-menu">
    <router-link
      class="top-menu__item"
      exact-active-class="top-menu-item--active"
      :to="{ name: 'Home' }"
    >
      <img src="../assets/logo.svg" alt="logo montecinema" />
    </router-link>
    <NavigationBar />
    <NavigationButtons />
    <img src="/assets/hamburger-menu.svg" class="top-menu__hamburger" />
  </nav>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import NavigationButtons from "./NavigationButtons.vue";
export default {
  name: "TopMenu",
  components: {
    NavigationBar,
    NavigationButtons,
  },
};
</script>

<style lang="scss" scoped>
.top-menu {
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 4.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &__item {
    margin-bottom: 0.6rem;
  }
  &__hamburger {
    display: none;
  }
}
</style>
