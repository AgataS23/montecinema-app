<template>
  <div class="email">
    <label for="email" class="email__label">email</label>
    <input
      v-model="email"
      type="email"
      name="email"
      id="email"
      class="email__input"
      placeholder="user@email.com"
      required
      v-on:input="changedEmail"
    />
    {{ errors }}
  </div>
</template>

<script>
export default {
  name: "InputMail",
  data() {
    return {
      errors: [],
      email: "",
    };
  },
  methods: {
    changedEmail(e) {
      this.$emit("emailChanged", this.email);
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email required");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__label {
    text-transform: uppercase;
    margin: 5px;
    color: red;
    align-self: flex-start;
  }
  &__input {
    background-color: #f7f7f7;
    padding: 24px;
    margin: 12px 0;
    border: none;
    border-radius: 8px;
    width: 100%;
    max-width: 472px;
  }
}
</style>
