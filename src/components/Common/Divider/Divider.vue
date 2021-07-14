<template>
  <div class="divider">
    <div class="left"></div>
    <p>or</p>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "ou",
    },
  },
  setup({ text }) {
    return {
      text,
    };
  },
});
</script>

<style lang="scss" scoped>
.divider {
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #595959;
    font-size: 0.75rem;
    margin: 0 15px;
  }

  & .left {
    height: 1px;
    width: 100%;
    background: #d9d9d9;
  }

  & .right {
    height: 1px;
    width: 100%;
    background: #d9d9d9;
  }
}
</style>
