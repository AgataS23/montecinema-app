<template>
  <div class="top-menu__buttons">
    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Register' }"
    >
      <ButtonMain medium empty borderNone color="primary">Register</ButtonMain>
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Login' }"
    >
      <ButtonMain medium color="primary">Login</ButtonMain>
    </router-link>
  </div>
</template>
<script>
import ButtonMain from "./ButtonMain.vue";
export default {
  name: "NavigationButtons",
  components: {
    ButtonMain,
  },
};
</script>
<style scoped>
.top-menu__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}
.top-menu-item {
  text-decoration: none;
}
.top-menu-item:first-of-type {
  margin-right: 1.6rem;
}
</style>
