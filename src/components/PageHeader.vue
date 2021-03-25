<template>
  <header class="header-container">
    <router-link to="/">
      <Logo size="6.25rem" clickable />
    </router-link>

    <div class="actions">
      <form @submit.prevent="searchBooks">
        <InputSearch placeholder="Buscar livro ou autor(a)" v-model="searchData"  />
      </form>
      <UserMenu />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import InputSearch from '@/components/InputSearch'
import UserMenu from '@/components/UserMenu'

export default {
  name: 'PageHeader',
  components: {
    Logo,
    InputSearch,
    UserMenu
  },
  data(){
    return {
      searchData: ''
    }
  },
  methods: {
    searchBooks(){
      console.log(this.searchData);
      this.searchData = '';
    }
  }
}
</script>

<style scoped>
.header-container {
  background: var(--primary-color);
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  align-items: center;
}

form {
  margin-right: 2.5rem;
}
</style>