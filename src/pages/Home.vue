<template>
  <page-header></page-header>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import PageHeader from "../components/Common/PageHeader/PageHeader.vue";

export default defineComponent({
  components: { PageHeader },
  setup() {
    const {
      state: { User: userState },
      dispatch,
    } = useStore();

    const users = computed(() => userState.users);
    const getUsers = () => dispatch("User/getUsers");

    return {
      users,
      getUsers,
    };
  },
  created() {
    this.getUsers();
  },
});
</script>
