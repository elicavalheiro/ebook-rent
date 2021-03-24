<template>
  <button class="g-btn">
    <img src="../assets/img/google_icon.svg" alt="Google Icon">
    {{ btnText }} <strong>Google</strong>
  </button>
</template>

<script>
export default {
  name: 'GoogleBtn',
  props: {
    btnText: {
      type: String,
      default: 'Continue com'
    }
  }
}
</script>

<style scoped>
.g-btn {
  width: 100%;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--black-color);

  background: none;

  border: 1px solid #595959;
  border-radius: 3px;
  outline: none;

  cursor: pointer;
}

.g-btn img {
  margin: 0 10px;
}

.g-btn strong {
  color: var(--black-color);
  margin: 0 5px;
}

.g-btn:active {
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
}
</style>