<template>
  <div class="filters-container">
    <h2>Filtros</h2>
    <div class="filter">
      <Title title="Status" size=".8rem" />
      <Checkbox label="Todos" v-model="statusFilter.all" />
      <Checkbox label="Disponíveis" v-model="statusFilter.available" />
      <Checkbox label="Indisponíveis" v-model="statusFilter.unavailable" />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Checkbox from '@/components/Checkbox'

export default {
  name: 'Filters',
  components: {
    Title,
    Checkbox,
  },
  data(){
    return {
      statusFilter: {
        all: true,
        available: false,
        unavailable: false,
      }
    }
  }
}
</script>

<style scoped>
.filters-container {
  width: 15%;
}

h2 {
  font-size: 1.2rem;
  margin: .5rem 0;
}
</style>