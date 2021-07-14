<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.auth-container {
  padding: 100px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
}
</style>
