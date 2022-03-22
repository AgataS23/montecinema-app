<template>
  <div class="main">
    <h1 class="heading">
      Hi there! <br />
      <span class="heading--light">Care to log in?</span>
    </h1>
    <div class="form">
      <form @submit.prevent="onSubmit">
        <InputMail @emailChanged="onEmailChanged" />
        parent{{ email }}
        <InputPassword v-model="password" />
        <!-- parent {{ password }} -->

        <div class="form__buttons">
          <!-- <ButtonGhost>Register instead</ButtonGhost> -->
          <router-link
            class="top-menu-item"
            active-class="top-menu-item--active"
            :to="{ name: 'Register' }"
          >
            <!-- <ButtonGhost>Register instead</ButtonGhost> -->
          </router-link>
          <!-- <ButtonMain>Log in</ButtonMain> -->
          <router-link
            class="top-menu-item"
            active-class="top-menu-item--active"
            :to="{ name: 'Login' }"
          >
            <ButtonMain>Login</ButtonMain>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputMail from "../components/InputMail.vue";
import InputPassword from "../components/InputPassword.vue";
import ButtonMain from "../components/ButtonMain.vue";

export default {
  name: "LogInFormPage",
  components: {
    InputMail,
    InputPassword,
    ButtonMain,
  },
  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    onEmailChanged(email) {
      this.email = email;
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
.heading {
  text-align: left;
  font-family: Eczar;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 102%;
  letter-spacing: -0.01em;
  color: #343541;
  &--light {
    color: #85868d;
  }
}
.form {
  background: #ffffff;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  border-radius: 24px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 64px;
  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
