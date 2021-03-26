<template>
  <div class="filters-container">
    <h2>Filtros</h2>
    <div class="filter">
      <div class="filter-group">
        <Title title="Status" size=".8rem" />
        <Checkbox label="Todos" value="all" v-model="status" />
        <Checkbox label="Disponíveis" value="available" v-model="status" />
        <Checkbox label="Indisponíveis" value="unavailable" v-model="status" />
      </div>
      <div class="filter-group">
        <Title title="Preço" size=".8rem">
          <template v-slot:extra>
            <a class="clear-button" @click="price = ''">Limpar</a>
          </template>
        </Title>
        <Checkbox label="Até R$ 10" value="bellow_10" v-model="price" />
        <Checkbox label="R$ 10 à R$ 30" value="between_10_30" v-model="price" />
        <Checkbox label="R$ 30 à R$ 50" value="between_30_50" v-model="price" />
      </div>
      <div class="filter-group">
        <Title title="Categoria" size=".8rem">
          <template v-slot:extra>
            <a class="clear-button" @click="category = ''">Limpar</a>
          </template>
        </Title>
        <Checkbox label="Romance" value="romance" v-model="category" />
        <Checkbox label="Internacionais" value="international" v-model="category" />
        <Checkbox label="Suspense" value="suspense" v-model="category" />
        <Checkbox label="Mistério" value="mistery" v-model="category" />
      </div>
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
      status: 'all',
      price: '',
      category: ''
    }
  }
}
</script>

<style scoped>
.filters-container {
  width: 15%;
}

.filter-group {
  margin-bottom: 3rem;
}

.clear-button {
  text-decoration: none;
  font-size: .8rem;
  color: #6A66A3;
  cursor: pointer;
}

h2 {
  font-size: 1.2rem;
  margin: .5rem 0;
}
</style>