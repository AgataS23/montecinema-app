<template>
  <div>
    <form action="" class="form-email">
      <label for="email" class="form-email__label">email</label>
      <input
        v-model="email"
        type="email"
        id="email"
        :value="value"
        placeholder="your email"
        required
        class="form-email__input"
        @input="$emit('$event.target.value')"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "InputMail",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.form-email {
  display: inline-block;
  position: relative;
  padding: 10px;
  min-width: 200px;
  &__label {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  &__input{
    border: 1px solid #333;
    padding: 8px;
    border-radius: 5px'
  }
}
</style>
