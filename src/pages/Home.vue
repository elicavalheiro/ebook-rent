<template>
  <page-header></page-header>
  <radio-group :options="radioOptions" v-model="selectedOption"></radio-group>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import PageHeader from "../components/Common/PageHeader/PageHeader.vue";
import RadioGroup from "../components/Common/RadioGroup/RadioGroup.vue";

export default defineComponent({
  components: { PageHeader, RadioGroup },
  setup() {
    const radioOptions = ref([
      { key: "all", label: "Todos" },
      { key: "available", label: "Disponível" },
      { key: "rented", label: "Emprestado" },
    ]);

    const selectedOption = ref("");

    const {
      state: { User: userState },
      dispatch,
    } = useStore();

    const users = computed(() => userState.users);
    const getUsers = () => dispatch("User/getUsers");

    return {
      users,
      getUsers,
      radioOptions,
      selectedOption,
    };
  },
  created() {
    this.getUsers();
  },
});
</script>
