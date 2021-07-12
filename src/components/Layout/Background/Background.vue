<template>
  <div class="background-container">
    <img
      src="../../../assets/images/bg.png"
      alt="Background"
      class="background-image"
      style="width: 100%; height: 100vh"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.background-container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;

  .background-image {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .background-image {
    display: none;
  }
}
</style>
