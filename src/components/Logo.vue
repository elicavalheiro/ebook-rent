<template>
  <img v-if="mode === 'vertical'" :style="clickable ? { width: size, cursor: 'pointer' } : { width: size }" src="../assets/img/logo_1.svg" alt="E-book Rent">
  <img v-else :style="clickable ? { width: size, cursor: 'pointer' } : { width: size }" src="../assets/img/logo_2.svg" alt="E-book Rent">
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
    },
    clickable: {
      type: Boolean,
      default: false,
    }
  }
}
</script>