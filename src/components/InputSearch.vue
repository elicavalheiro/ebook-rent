<template>
  <input
    :value="modelValue"
    class="input-search"
    type="text"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)" />
  <span class="search-icon"></span>
</template>

<script>
export default {
  name: 'InputSearch',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>
.input-search {
  min-width: 24rem;
  height: 2rem;
  border: 1px solid white;
  border-radius: 3px;

  color: white;

  background: none;
  padding: 0 .5rem;
  outline: none;
}

.input-search::placeholder {
  color: rgba(255, 255, 255, .5);
}

.search-icon {
  background: url('../assets/img/search_icon.svg') no-repeat;
  width: 1rem;
  height: 1rem;
  margin-left: -1.5rem;

  cursor: pointer;
}
</style>