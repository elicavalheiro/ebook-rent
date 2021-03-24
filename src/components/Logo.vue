<template>
  <img v-if="mode === 'vertical'" :style="{ width: size }" src="../assets/img/logo_1.svg" alt="E-book Rent">
  <img v-else :style="{ width: size }" src="../assets/img/logo_2.svg" alt="E-book Rent">
</template>

<script>
export default {
  name: 'Logo',
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    },
    size: {
      type: String,
      default: '6rem'
    }
  }
}
</script>