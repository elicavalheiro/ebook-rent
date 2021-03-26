<template>
  <router-link :to="{ name: 'Book', params: { id: book.id } }">
    <div class="book-card">
      <img :src="book.mainImg.src" >
      <div class="book-info">
        <h3 class="title">{{ book.title }}</h3>
        <p class="author">{{ book.author }}</p>
      </div>
      <p class="price">{{ priceFormated }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    priceFormated(){
      const formated = this.book.price.toLocaleString('pt-BR', { 
        style: "currency",
        currency: 'BRL'
      })
      
      return formated;
    }
  }
}
</script>

<style scoped>
.book-card {
  padding: 1.5rem;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  border: 1px solid white;
  transition: border 200ms ease;
}

.book-card:hover {
  border: 1px solid rgba(106,102,163, 20%);
  cursor: pointer;
}

img {
  align-self: center;
  max-height: 200px;
}

.title, .author {
  font-size: .8rem;
}

.title {
  margin-top: 10px;
}

.author {
  color: #595959;
}

.price {
  align-self: flex-end;
  font-size: 1rem;
  color: var(--primary-color);
}

a {
  text-decoration: none;
}
</style>