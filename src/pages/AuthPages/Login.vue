<template>
  <background></background>
  <form>
    <form-input label="Email" v-model="email" placeholder="Email"></form-input>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";
import Background from "../../components/Layout/Background/Background.vue";
import FormInput from "../../components/Form/FormInput/FormInput.vue";

export default defineComponent({
  components: {
    Background,
    FormInput,
  },
  setup() {
    const email = ref("");
    return {
      email,
    };
  },
});
</script>
