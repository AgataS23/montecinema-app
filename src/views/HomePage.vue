<template>
  <div id="app">
    <TopMenu></TopMenu>
    <WelcomeWrapper></WelcomeWrapper>
    <WelcomeMovieAbout></WelcomeMovieAbout>
    <WelcomeMovieWrapper></WelcomeMovieWrapper>
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
import WelcomeWrapper from "../components/WelcomeWrapper.vue";
import WelcomeMovieAbout from "../components/WelcomeMovieAbout.vue";
import WelcomeMovieWrapper from "../components/WelcomeMovieWrapper.vue";
import ContactUs from "../components/ContactUs.vue";

export default {
  name: "HomePage",
  components: {
    TopMenu,
    WelcomeWrapper,
    WelcomeMovieAbout,
    WelcomeMovieWrapper,
    ContactUs,
  },
};
</script>
