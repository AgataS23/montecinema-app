<template>
  <div id="app">
    <HomePage></HomePage>
    <RegisterPage></RegisterPage>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";
import RegisterPage from "./views/RegisterPage.vue";

export default {
  name: "App",
  views: {
    HomePage,
    RegisterPage,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global/index.scss";
#app {
  // $red: red;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
