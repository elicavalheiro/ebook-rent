<template>
  <div class="input-container">
    <label class="label">{{ label }}</label>
    <input
      :value="modelValue"
      v-bind="$attrs"
      class="input"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    placeholder: String,
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
  width: 100%;
}

.label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--black-color);
  margin-bottom: 5px;
}

.input {
  height: 40px;
  width: 100%;
  padding: 0 .5rem;
  
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  outline-color: var(--primary-color);
}

.input::placeholder {
  color: #bfbfbf;
}
</style>