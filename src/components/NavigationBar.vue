<template>
  <div class="navigation-bar">
    <router-link
      class="navigation-bar__item"
      exact-active-class="top-menu-item--active"
      :to="{ name: 'Movies' }"
    >
      Movies
    </router-link>

    <router-link
      class="navigation-bar__item"
      active-class="top-menu-item--active"
      :to="{ name: 'Screenings' }"
    >
      Screenings
    </router-link>

    <router-link
      class="navigation-bar__item"
      active-class="top-menu-item--active"
      :to="{ name: 'Contact' }"
    >
      Contact us
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
};
</script>
<style lang="scss" scoped>
.navigation-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  &__item {
    padding: 4.55rem 2.7rem;
    align-self: center;
    text-decoration: none;
    font: normal 400 1.8rem/2.1rem "Roboto";
    color: $jumbo;
  }
  &__item:hover {
    cursor: pointer;
    color: $abbey;
    padding-bottom: 4.25rem;
    border-bottom: 3px solid $cherry-red;
  }
}
</style>
