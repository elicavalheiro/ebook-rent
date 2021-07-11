<template>
  <background></background>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import Background from "../components/layout/Background.vue";

export default defineComponent({
  components: { Background },
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.User.user),
    }
  },
});
</script>