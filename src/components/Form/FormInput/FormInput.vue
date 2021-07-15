<template>
  <div class="form-wrapper">
    <div class="input-wrapper">
      <div class="label" v-if="!search">{{ label }}</div>
      <input
        v-bind="$attrs"
        v-model="input"
        :placeholder="placeholder"
        class="input"
        :class="classConfig[inputStyle]"
      />
    </div>
    <button v-if="search" class="search-button" type="submit">
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
    inputStyle: {
      type: String,
      default: "primary"
    }
  },
  setup({ label, modelValue, placeholder, search, inputStyle }, { emit }) {
    const { input } = useInputValidator(modelValue, (value: string | number) =>
      emit("update:modelValue", value)
    );
    
    const classConfig: { [index: string]: string } = {
      primary: "",
      outlined: "input__outlined",
    };

    const handleSearch = () => console.log("search");

    return {
      label,
      search,
      input,
      placeholder,
      handleSearch,
      classConfig,
      inputStyle
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
  padding-bottom: 5px;
}

.input {
  padding: 0 10px;
  height: 2.5rem;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  outline-color: #6a66a3;

  &::placeholder {
    color: #bfbfbf;
  }

  &__outlined {
    background: none;
    color: white;
  }
}

.search-button {
  position: absolute;
  background: none;
  border: none;
  padding: 3px 10px;
  height: 2.5rem;
  color: white;
  cursor: pointer;
}
</style>
