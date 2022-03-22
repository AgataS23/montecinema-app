<template>
  <div>
    <TopMenu />
    <TopMenuNav />
    <div class="contact">
      <h2 class="contact__heading">Contact us</h2>
      <div class="contact__wrapper-main">
        <img
          src="../assets/map.svg"
          alt="map with pinned address Monterail"
          class="contact__wrapper--map"
        />
        <div class="contact__wrapper">
          <div class="contact__wrapper--address">
            <img
              src="../assets/pin-location.svg"
              class="contact__wrapper--icon"
              alt="icon pin"
            />
            <address class="contact__address">
              Monterail Sp. z o.o. <br />
              ul. Oławska 27-29 <br />
              50-123 Wrocław <br />
              Poland
            </address>
          </div>
          <div class="contact__wrapper--email">
            <img
              src="../assets/email.svg"
              class="contact__wrapper--icon"
              alt="icon email"
            />
            <a href="mailto:hello@monterail.com" class="contact__mail"
              >hello@monterail.com</a
            >
          </div>
          <div class="contact__wrapper--phone">
            <img
              src="../assets/phone.svg"
              class="contact__wrapper--icon"
              alt="icon phone"
            />
            <a href="tel:+48 533 600 136" class="contact__phone"
              >+48 533 600 136</a
            >
          </div>
        </div>
        <div class="contact__wrapper-icons">
          <img
            src="../assets/twitter.svg"
            alt="twitter icon"
            class="contact__wrapper-icons--item"
          />
          <img
            src="../assets/facebook.svg"
            alt="facebook icon"
            class="contact__wrapper-icons--item"
          />
          <img
            src="../assets/linkedin.svg"
            alt="linkedin icon"
            class="contact__wrapper-icons--item"
          />
          <img
            src="../assets/instagram.svg"
            alt="instagram icon "
            class="contact__wrapper-icons--item"
          />
          <img
            src="../assets/github.svg"
            alt="github icon"
            class="contact__wrapper-icons--item"
          />
          <img
            src="../assets/behance.svg"
            alt="behance icon"
            class="contact__wrapper-icons--item"
          />
          <img
            src="../assets/dribble.svg"
            alt="dribble icon"
            class="contact__wrapper-icons--item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import TopMenuNav from "@/components/TopMenuNav.vue";

export default {
  components: {
    TopMenu,
    TopMenuNav,
  },
};
</script>
<style lang="scss" scoped>
.contact {
  width: 100%;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  padding: 6.4rem 4.8rem;
  margin: 0 auto;
  &__mail,
  &__phone {
    text-decoration: none;
    color: $tuna;
  }
  &__heading {
    font: normal 600 8rem/102% "Eczar";
    text-align: left;
    letter-spacing: -0.01em;
    margin-bottom: 6.4rem;
    color: $tuna;
  }
  &__wrapper-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6.4rem;
    width: 100%;
    max-width: 63.2rem;
    background: $athens-grey;
    font: normal 400 1.8rem/3.2rem "Roboto Mono";
    letter-spacing: 0.015em;
    color: $tuna;
    &--address,
    &--email {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 4.6rem;
    }
    &--phone {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    &--icon {
      margin-right: 1.6rem;
    }
    &--map {
      width: 100%;
      max-width: 63.2rem;
    }
  }
  &__wrapper-icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    width: 100%;
    max-width: 8rem;
    padding: 2.18rem 2.4rem;
    background-color: $athens-grey;
    &--item {
      margin-bottom: 2.35rem;
    }
    &--item:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
