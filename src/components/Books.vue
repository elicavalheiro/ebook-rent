<template>
  <div class="books-container">
    <Title title="Todos os livros" />
    <div class="grid">
      <BookCard />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import BookCard from '@/components/BookCard';

export default {
  name: 'Books',
  components: {
    Title,
    BookCard
  },
  props: {
    pageTitle: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
.books-container {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}
</style>