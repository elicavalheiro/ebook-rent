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
      <div class="login-area">
        <h1>Sign In</h1>
        <form class="form">
          <Input
            type="email"
            label="Email"
            placeholder="Insira o seu email"
            v-model="email"
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Insira a sua senha"
            v-model="password"
          />
          <div class="actions">
            <a>Esqueceu a senha? Clique aqui!</a>
            <Button title="Acessar" @click.prevent="loginWithEmail" />
          </div>
          <div class="divider">
          </div>
          <GoogleBtn @click.prevent="loginWithGoogle" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input';
import Button from '@/components/Button';
import GoogleBtn from '@/components/GoogleBtn';

export default {
  name: "Login",
  components: {
    Input,
    GoogleBtn,
    Button,
  },
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    loginWithEmail(){
      console.log('loga co email');
    },

    loginWithGoogle(){
      console.log('loga co googles')
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

.login-area {
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-area h1 {
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.form {
  width: 30rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions a {
  font-size: 0.8rem;
  color: #595959;
  cursor: pointer;
}

.actions a:hover {
  text-decoration: underline;
}

.divider {
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.divider::before {
  content: 'ou';
  position: absolute;
  z-index: 10;
  background: white;
  padding: 0 10px;
  color: #595959;
  font-size: 0.7rem;
}

.divider::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 30rem;
  background: #d9d9d9;
  z-index: 1;
}

@media screen and (max-width: 1200px){
  .container {
    background: url('../assets/img/bg.svg') no-repeat fixed;

    padding: 2rem 3rem;
  }
}
</style>