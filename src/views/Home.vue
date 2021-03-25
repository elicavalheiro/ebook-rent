<template>
  <PageHeader />
  <div class="content">
    <Filters />
    <div class="v-divider"></div>
    <Title title="Todos os livros" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Title from '@/components/Title'
import Filters from '@/components/Filters'

export default {
  name: 'Home',
  components: {
    PageHeader,
    Title,
    Filters
  }
}
</script>

<style scoped>
.content {
  display: flex;
  height: 80vh;
  padding: 3.5rem 2rem;
}

.v-divider {
  margin: 0 1.5rem;
  width: 1px;
  height: 100% !important;
  background: #6A66A3;
  opacity: 20%;
}
</style>