<template>
  <form @submit.prevent="handleLogin" class="login-form-container">
    <h1>Login</h1>
    <form-input
      label="Email"
      v-model="email"
      placeholder="Insira o seu email"
    ></form-input>
    <form-input
      type="password"
      label="Senha"
      v-model="password"
      placeholder="*******"
    ></form-input>
    <div class="action-button">
      <router-link to="">Esqueceu a senha? Clique aqui!</router-link>
      <common-button type="submit">Acessar</common-button>
    </div>
    <divider></divider>
    <common-button type="button" buttonType="secondary">
      Continuar com <strong>Google</strong>
    </common-button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FormInput from "../FormInput/FormInput.vue";
import CommonButton from "../../Common/CommonButton/CommonButton.vue";
import Divider from "../../Common/Divider/Divider.vue";

export default defineComponent({
  components: {
    FormInput,
    CommonButton,
    Divider,
  },
  setup() {
    const email = ref("");
    const password = ref("");

    const handleLogin = () => console.log(email.value, password.value);

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-form-container {
  display: grid;
  row-gap: 30px;
  align-self: center;
  justify-self: center;
  width: 100%;
  max-width: 450px;

  & h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  .action-button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
      text-decoration: none;
      color: #595959;
    }
  }
}
</style>
