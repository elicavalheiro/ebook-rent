<template>
  <div class="checkbox-container">
    <label class="checkbox">
      {{ label }}
      <input type="checkbox" :value="modelValue" @click="$emit('update:modelValue', !modelValue)" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>
.checkbox-container {
  margin: .5rem 0;
}

.checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: .8rem;
  color: #595959;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -1px;
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
}

.checkbox:hover input ~ .checkmark {
  background-color: none;
}

.checkbox input:checked ~ .checkmark {
  background-color: none;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 4px;
  top: 4px;
  width: .6rem;
  height: .6rem;
  background: #6A66A3;
  border-radius: 2px;
}
</style>