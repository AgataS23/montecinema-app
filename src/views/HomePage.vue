<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TopMenu></TopMenu>
    <WelcomeWrapper></WelcomeWrapper>
    <WelcomeMovieAbout></WelcomeMovieAbout>
    <WelcomeMovieWrapper></WelcomeMovieWrapper>
    <ContactUs></ContactUs>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
import HelloWorld from "../components/HelloWorld.vue";
import WelcomeWrapper from "../components/WelcomeWrapper.vue";
import WelcomeMovieAbout from "../components/WelcomeMovieAbout.vue";
import WelcomeMovieWrapper from "../components/WelcomeMovieWrapper.vue";
import ContactUs from "../components/ContactUs.vue";

export default {
  name: "App",
  components: {
    TopMenu,
    HelloWorld,
    WelcomeWrapper,
    WelcomeMovieAbout,
    WelcomeMovieWrapper,
    ContactUs,
  },
};
</script>
