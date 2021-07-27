<template>
  <label class="radio-wrapper">
    <span class="radio-input">
      <input type="radio" name="radio" />
      <span class="radio-control"></span>
    </span>
    <span class="radio-label"><slot></slot></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: [String, Number],
      default: "",
    },
  },

  setup({ label }) {
    return {
      label,
    };
  },
});
</script>

<style lang="scss" scoped>
.radio-wrapper {
  font-size: 0.875rem;
  color: #595959;

  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.625rem;
  align-items: center;
  padding: 2px;

  .radio-input {
    display: flex;

    & input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .radio-control {
        background: radial-gradient(#a1a1a1 55%, rgba(255, 0, 0, 0) 51%);
      }
    }

    .radio-control {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      transform: translateY(-0.05em);
    }
  }
}
</style>
