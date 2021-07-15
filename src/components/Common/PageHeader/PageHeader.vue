<template>
  <div class="page-header-wrapper">
    <logo></logo>
    <div class="actions-wrapper">
      <form @submit.prevent="handleSearch">
        <form-input
          placeholder="Buscar livro ou autor(a)"
          search
          inputStyle="outlined"
        ></form-input>
      </form>
      <avatar></avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormInput from "../../Form/FormInput/FormInput.vue";
import Avatar from "../Avatar/Avatar.vue";
import Logo from "../Logo/Logo.vue";

export default defineComponent({
  components: {
    Avatar,
    Logo,
    FormInput,
  },
  setup() {
    const handleSearch = () => console.log("buscar");

    return {
      handleSearch,
    }
  },
});
</script>

<style lang="scss" scoped>
.page-header-wrapper {
  background: #6a66a3;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  .actions-wrapper {
    display: grid;
    grid-template-columns: 400px 40px;
    column-gap: 25px;
    align-items: center;
  }
}
</style>
