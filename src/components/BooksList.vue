<template>
  <div class="books-container">
    <Title title="Todos os livros" />
    <div class="grid">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Title from '@/components/Title';
import BookCard from '@/components/BookCard';

export default {
  name: 'BooksList',
  components: {
    Title,
    BookCard
  },
  props: {
    pageTitle: {
      type: String,
      default: '',
    }
  },
  data(){
    return {
      books: []
    }
  },
  computed: {
    ...mapState(['books_state'])
  },
  methods: {
    ...mapActions([
      'get_books'
    ]),

    populateBooks(){
      this.books = this.books_state;
    },

    async getBooks(){
      try {
        await this.get_books();
      } catch (error) {
        console.log(error);
      }

      this.populateBooks();
    }
  },
  created(){
    this.getBooks();
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