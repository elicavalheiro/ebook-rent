<template>
  <radio v-for="{ key, label } in options" :key="key">
    {{ label }}
  </radio>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Radio from "../Radio/Radio.vue";

export default defineComponent({
  components: { Radio },

  props: {
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },

  setup({ options }) {
    return {
      options,
    };
  },
});
</script>

<style lang="scss" scoped></style>
