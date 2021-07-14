<template>
  <div>
    <img
      src="../../../assets/images/logo-horizontal.png"
      v-if="direction === 'horizontal'"
    />
    <img src="../../../assets/images/logo-vertical.png" v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    direction: {
      type: String,
      default: "horizontal",
    },
  },

  setup({ direction }) {
    return {
      direction,
    };
  },
});
</script>
