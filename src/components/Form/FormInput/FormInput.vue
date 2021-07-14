<template>
  <div class="form-wrapper">
    <label class="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      v-model="input"
      :placeholder="placeholder"
      class="input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useInputValidator from "../../../features/useInputValidator";

export default defineComponent({
  props: {
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
  setup({ label, modelValue, placeholder }, { emit }) {
    const { input } = useInputValidator(modelValue, (value: string | number) =>
      emit("update:modelValue", value)
    );

    return {
      label,
      input,
      placeholder,
    };
  },
});
</script>

<style lang="scss" scoped>
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
</style>
