<template>
  <div>
    <h1>Hi there! Care to log in?</h1>
    <div>
      <form action="" class="form">
        <label for="email">email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          :value="value"
          class="form__input"
          placeholder="Something ending with monterail.com"
          required
        />
        <label for="password">password</label>
        <input
          v-model="password"
          id="password"
          type="password"
          class="form__input"
          placeholder="Enter your password"
        />
        <button type="submit" class="form__button-submit">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  // data() {
  //   return {
  //     content: "email",
  //   };
  // },
  // methods: {
  //   show() {
  //     console.log(this.content);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
// .form {
//   margin: 0 auto;
//   &__input {
//     margin: 10px;
//   }
//   &__button-submit {
//     margin: 10px;
//   }
// }
</style>
