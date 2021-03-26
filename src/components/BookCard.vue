<template>
  <div class="book-card">
    <img src="https://images-na.ssl-images-amazon.com/images/I/71lFUYuLmuL.jpg" >
    <div class="book-info">
      <h3 class="title">A revolução dos bichos</h3>
      <p class="author">George Orwell</p>
    </div>
    <p class="price">R$ 0,99</p>
  </div>
</template>

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
</style>