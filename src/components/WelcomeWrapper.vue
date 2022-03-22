<template>
  <div class="welcome">
    <div class="welcome__wrapper">
      <h1 class="welcome__heading">Welcome to the best cinema in Monterail</h1>
      <p class="welcome__text">
        Best movies, best experiences, best people. And all that doesn’t exist.
        Yikes.
      </p>
      <ButtonMain large color="primary" href="#booking" class="welcome__button"
        >Book a ticket</ButtonMain
      >
    </div>
    <img
      src="../assets/audience.jpg"
      class="welcome__image"
      alt="people watching a film in a cinema"
    />
  </div>
</template>

<script>
import ButtonMain from "./ButtonMain.vue";
export default {
  name: "WelcomeWrapper",
  components: {
    ButtonMain,
  },
};
</script>
<style lang="scss" scoped>
.welcome {
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 4.8rem;
  display: flex;
  flex-direction: row;
  &__wrapper {
    max-width: 88.7rem;
    padding: 8rem;
    background-color: $pink;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: space-between;
    align-items: flex-start;
  }
  &__heading {
    font: normal 600 8rem/102% "Eczar";
    letter-spacing: -0.01em;
    font-size: 48px;
    line-height: 49px;
    margin-bottom: 40px;
    padding-right: 220px;
    text-align: start;
    color: $tuna;
  }
  &__text {
    font: normal 400 2.2rem/170% "Roboto Mono";
    letter-spacing: 0.015em;
    margin: 0;
    margin-bottom: 40px;
    padding-right: 2rem;
    text-align: start;
  }
  &__button {
    margin-right: 40rem;
  }
  &__image {
    width: 55.3rem;
    background: url(../assets/audience.jpg);
  }
}
</style>
