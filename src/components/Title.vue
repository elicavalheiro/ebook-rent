<template>
  <div class="title-container">
    <div class="title">
      <h1 :style="{ fontSize: size }">{{title}}</h1>
      <slot name="extra"></slot>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '1.2rem',
    }
  }
}
</script>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: var(--black-color);
  margin: .5rem 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: #6A66A3;
  opacity: 20%;
  
  margin-bottom: 1rem;
}
</style>