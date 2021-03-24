<template>
  <div class="container">
    <img class="logo" src="../assets/img/logo_1.svg" alt="E-book Rent">

    <div class="content">
      <div class="rent-info">
        <h1>Empreste Livros!</h1>
        <ul class="benefits">
          <li>Leia seus títulos favoritos por preços acessíveis</li>
          <li>Mais de 5.000 títulos à sua disposição</li>
          <li>A maior biblioteca online!</li>
        </ul>
      </div>
      <Form label="Cadastro">
        <template v-slot:fields>
          <Input
            type="text"
            label="Nome"
            placeholder="Insira o seu nome"
            v-model="user.name"
          />
          <Input
            type="email"
            label="Email"
            placeholder="Insira o seu email"
            v-model="user.email"
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Insira a sua senha"
            v-model="user.password"
          />
        </template>
        <template v-slot:actions>
          <Button style="margin: 0 0 0 auto" title="Cadastrar-se" @click.prevent="loginWithEmail" />
        </template>
        <template v-slot:extra>
          <GoogleBtn btnText="Cadastre-se com" @click.prevent="loginWithGoogle" />
        </template>
        <template v-slot:redirect>
          <a @click="redirectToLogin" class="link">Já possui cadastro? Acesse aqui!</a>
        </template>
      </Form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input';
import Button from '@/components/Button';
import GoogleBtn from '@/components/GoogleBtn';
import Form from '@/components/Form';

export default {
  name: "Login",
  components: {
    Input,
    GoogleBtn,
    Button,
    Form,
  },
  data(){
    return {
      user: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    redirectToLogin(){
      this.$router.push('/acesso');
    },

    loginWithEmail(){
      this.$router.push('/')
    },

    loginWithGoogle(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container {
  background: url('../assets/img/bg_1.svg') no-repeat fixed;
  background-position: center;
  background-size: cover;

  padding: 2rem 5rem;

  width: 100%;
  height: 100vh;
}

.logo {
  width: 6rem;
}

.content {
  margin-top: 8%;

  display: flex;
  justify-content: space-between;
}

.rent-info {
  margin-top: 2.5rem;
  padding: 3rem 1.5rem;
  background: rgba(255,255,255, .1);

  border-radius: 3px;
  max-width: 20rem;
  max-height: 25rem;
}

.rent-info h1 {
  margin-bottom: 3.1rem;
  font-size: 1.5rem;
  text-align: center;
  color: white;
}

.benefits li {
  color: white;
  margin: 1.5rem 0;
  margin-left: 1.5rem;

  display: flex;
  align-items: center;
}

.benefits li::before {
  content: '';
  position: absolute;
  margin-left: -1.25rem;
  width: 0.8rem;
  height: 0.8rem;
  background: #9B97C9;
}

.benefits li:first-child:before,
.benefits li:nth-child(2):before {
  margin-top: -1.3rem;
}

.link {
  font-size: 0.8rem;
  color: #595959;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 1200px){
  .container {
    background: url('../assets/img/bg.svg') no-repeat fixed;

    padding: 2rem 3rem;
  }
}

@media screen and (min-width: 1550px){
  .container {
    padding-left: 10rem;
  }
}
</style>