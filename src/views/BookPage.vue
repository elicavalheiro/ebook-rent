<template>
  <PageHeader />
  <div class="book-container">
    <Breadcrumbs />
    <div>
      Galeria
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
  name: 'BookPage',
  components: {
    PageHeader,
    Breadcrumbs
  }
}
</script>

<style scoped>
.book-container {
  padding: 0 15%;

  display: flex;
  flex-direction: column;
}
</style>