<template>
  <div class="top-menu-nav">
    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Home' }"
    >
      <ButtonMain medium empty color="secondary"
        ><img src="../assets/arrow-left.svg" />Back
      </ButtonMain>
    </router-link>
    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Movies' }"
    >
      <ButtonMain medium empty borderNone color="secondary">Movies</ButtonMain>
    </router-link>
  </div>
</template>
<script>
import ButtonMain from "./ButtonMain.vue";
export default {
  name: "TopMenuNav",
  components: {
    ButtonMain,
  },
};
</script>
<style lang="scss" scoped>
.top-menu-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  max-width: 134.4rem;
  margin: 0 auto;
  padding: 1.8rem 2.4rem;
  background-color: $pink;
}
.top-menu-item {
  text-decoration: none;
}
</style>
