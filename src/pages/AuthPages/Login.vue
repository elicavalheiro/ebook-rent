<template>
  <background></background>
  <auth-layout>
    <div class="left-column">
      <logo direction="vertical"></logo>
      <hero-box></hero-box>
    </div>
    <login-form></login-form>
  </auth-layout>
</template>

<script>
import Background from "../../components/Layout/Background/Background.vue";
import Logo from "../../components/Common/Logo/Logo.vue";
import AuthLayout from "../../components/Layout/AuthLayout/AuthLayout.vue";
import LoginForm from "../../components/Form/LoginForm/LoginForm.vue";
import HeroBox from "../../components/Layout/HeroBox/HeroBox.vue";

export default {
  components: {
    Background,
    Logo,
    AuthLayout,
    LoginForm,
    HeroBox,
  },
}
</script>

<style lang="scss" scoped>
.left-column {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
