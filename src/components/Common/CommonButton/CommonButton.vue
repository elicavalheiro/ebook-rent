<template>
  <button v-bind="$attrs" class="button" :class="classConfig[buttonType]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buttonType: {
      type: String,
      default: "primary",
    },
  },

  setup({ buttonType }) {
    const classConfig: { [index: string]: string } = {
      primary: "button__primary",
      secondary: "button__secondary",
      rounded: "button__rounded",
    };

    return {
      buttonType,
      classConfig,
    };
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 0.625rem 3rem;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  cursor: pointer;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &__primary {
    font-weight: bold;
    color: white;
    background: #6a66a3;

    &:disabled {
      cursor: not-allowed;
      background: #d9d9d9;
      color: #a1a1a1;
      border: 1px solid #bfbfbf;
    }
  }

  &__secondary {
    background: white;
    border: 1px solid #6a66a3;
    color: #6a66a3;
    
    &:disabled {
      cursor: not-allowed;
      background: #d9d9d9;
      color: #a1a1a1;
      border: 1px solid #bfbfbf;
    }
  }

  &__rounded {
    padding: 10px 15px;
    border-radius: 999px;
    color: white;
    background: #6a66a3;

    &:disabled {
      cursor: not-allowed;
      background: #d9d9d9;
      color: #a1a1a1;
      border: 1px solid #bfbfbf;
    }
  }
}
</style>
