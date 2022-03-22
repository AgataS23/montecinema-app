<template>
  <div class="contact">
    <h2 class="contact__heading">Contact us</h2>
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
        <a href="tel:+48 533 600 136" class="contact__phone">+48 533 600 136</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>
<style lang="scss" scoped>
.contact {
  width: 100%;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  &__mail,
  &__phone {
    text-decoration: none;
    color: $tuna;
  }
  &__heading {
    font: normal 600 6.4rem/102% "Eczar";
    text-align: center;
    letter-spacing: -0.01em;
    color: $tuna;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6.4rem;
    margin: 4.8rem auto 12.4rem;
    width: 100%;
    max-width: 60rem;
    background: $athens-grey;
    border-radius: 2.4rem;
    font: normal 400 1.8rem/3.2rem "Roboto Mono";
    letter-spacing: 0.015em;
    color: $tuna;
    &--address,
    &--email {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 4rem;
    }
    &--phone {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    &--icon {
      margin-right: 1.6rem;
    }
  }
}
</style>
