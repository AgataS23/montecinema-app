<template>
  <div class="password">
    <label class="password__label">Password</label>
    <div class="password-container">
      <input
        :type="inputType"
        class="password-container__input"
        placeholder="Enter your password"
        :value="value"
        @input="onInput"
      />
      <button
        type="button"
        class="password-container__button"
        @click="toggleShow"
      >
        <span class="password-container__button-eye">
          <img
            :src="eyeIcon"
            class="password-container__button-img"
            :class="{ 'eye-open': showPassword, 'eye-close': !showPassword }"
          />
        </span>
      </button>
    </div>
    <!-- inside {{ value }} -->
  </div>
</template>
<script>
import OpenEye from "../assets/eye-open.svg";
import CloseEye from "../assets/eye-close.svg";
console.log(OpenEye);
export default {
  props: {
    value: String,
  },
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    inputType() {
      return this.showPassword ? "text" : "password";
    },
    eyeIcon() {
      return this.showPassword ? CloseEye : OpenEye;
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__label {
    text-transform: uppercase;
    margin: 5px;
    color: red;
    align-self: flex-start;
  }
}
.password-container {
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  &__input {
    width: 100%;
    max-width: 416px;
    height: 56px;
    border-radius: 8px 0 0 8px;
    padding: 0 24px;
    background: #f7f7f7;
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #85868d;
  }
  &__button {
    width: 56px;
    height: 56px;
    background: #f7f7f7;
    border: none;
    padding: 0 21px 0 0;
    border-radius: 0 8px 8px 0;
  }
  &__button-eye {
  }
  &__button-img {
  }
}
</style>
