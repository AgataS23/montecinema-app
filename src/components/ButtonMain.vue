<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :class="[buttonTypes, buttonColors]"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonMain",
  emits: ["click"],
  props: {
    extraSmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
    borderNone: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      require: true,
    },
  },
  computed: {
    buttonTypes() {
      return [
        "button",
        { "button--extra-small": this.extraSmall },
        { "button--small": this.small },
        { "button--medium": this.medium },
        { "button--large": this.large },
        { "button--empty": this.empty },
        { "button--border-none": this.borderNone },
      ];
    },
    buttonColors() {
      if (this.color === "primary") {
        return this.empty ? "button--primary-font-color" : "button__primary";
      } else if (this.color === "secondary") {
        return this.empty
          ? "button--secondary-font-color"
          : "button__secondary";
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  border-radius: 6.4rem;
  border: 2px solid;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: $jumbo;
    cursor: not-allowed;
    border: 0;
    &hover {
      opacity: 90%;
    }
  }
  &--extra-small {
    font-size: 1.4rem;
    padding: 0.5rem 1.6rem;
  }
  &--small {
    font-size: 1.4rem;
    padding: 0.9rem 2.4rem;
  }
  &--medium {
    font-size: 1.6rem;
    padding: 1.2rem 3.2rem;
  }
  &--large {
    font-size: 1.8rem;
    padding: 1.9rem 4rem;
  }
  &--empty {
    background-color: transparent;
  }
  &--border-none {
    border: 0;
  }
  &__primary {
    background-color: $cherry-red;
    border-color: $cherry-red;
    color: $white;
  }
  &--primary-font-color {
    color: $cherry-red;
  }
  &__secondary {
    background-color: $tuna;
    border-color: $tuna;
    color: $white;
  }
  &--secondary-font-color {
    color: $tuna;
  }
}
</style>
