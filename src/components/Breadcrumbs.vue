<template>
  <div class="breadcrumbs">
    <router-link to="/">Home</router-link>
    <p class="breadcrumbs-divider">/</p>
    <p class="current-page">A revolução dos bichos</p>
  </div>
</template> 

<style scoped>
a {
  text-decoration: none;
  color: #595959;
}

p {
  color: var(--black-color);
}

.breadcrumbs {
  display: flex;
  margin: 1.5rem 0;

  font-style: italic;
  font-size: .8rem;

  width: 100%;
}

.breadcrumbs-divider {
  margin: 0 .5rem;
}

.current-page {
  font-weight: 700;
}
</style>