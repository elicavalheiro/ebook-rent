<template>
  <button
    class="button"
    :style="{ backgroundColor: background, color: textColor }"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    background: {
      type: String,
      default: '#6A66A3',
    },
    textColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style scoped>
.button {
  padding: .8rem 3rem;

  border: none;
  border-radius: 3px;

  font-size: .8rem;
  font-weight: 700;

  cursor: pointer;

  outline: none;

  transition: all 100ms ease;
}

.button:hover {
  background: #7975AC !important;
}

.button:active {
  box-shadow: 0px 0px 5px 0px rgba(121,117,172,1);
}
</style>