<template>
  <div class="form-wrapper">
    <div class="input-wrapper">
      <label class="label">{{ label }}</label>
      <input
        v-bind="$attrs"
        v-model="input"
        :placeholder="placeholder"
        class="input"
      />
    </div>
    <button
      v-if="search"
      class="search-button"
      @click.prevent="handleSearch"
    >
      <font-awesome-icon icon="search" class="search-icon" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useInputValidator from "../../../hooks/useInputValidator";

export default defineComponent({
  props: {
    search: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup({ label, modelValue, placeholder, search }, { emit }) {
    const { input } = useInputValidator(modelValue, (value: string | number) =>
      emit("update:modelValue", value)
    );

    const handleSearch = () => console.log('search');

    return {
      label,
      search,
      input,
      placeholder,
      handleSearch
    };
  },
});
</script>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & .input-wrapper {
    width: 100%;
  }
}

.label {
  font-size: 0.875rem;
  font-weight: bold;
}

.input {
  margin-top: 5px;
  padding: 0 10px;
  height: 2.5rem;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  outline-color: #6a66a3;

  &::placeholder {
    color: #bfbfbf;
  }
}

.search-button {
  position: absolute;
  background: none;
  border: none;
  padding: 3px 10px;
  height: 2.5rem;
  margin-top: 22px;
  color: white;
}
</style>
