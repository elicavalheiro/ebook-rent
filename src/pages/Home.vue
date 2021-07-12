<template>
  <background></background>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import Background from "../components/Layout/Background/Background.vue";

export default defineComponent({
  components: { Background },
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
