<template>
  <div class="form-container">
    <h1>{{ label}}</h1>
    <form class="form">
      <slot name="fields"></slot>

      <div class="actions">
        <slot name="actions"></slot>
      </div>

      <div class="divider"></div>

      <slot name="extra"></slot>

      <div class="registry-link">
        <slot name="redirect"></slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    label: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container h1 {
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.form {
  width: 30rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.registry-link {
  text-align: center;
  margin-top: 30px;
}

.divider {
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.divider::before {
  content: 'ou';
  position: absolute;
  z-index: 10;
  background: white;
  padding: 0 10px;
  color: #595959;
  font-size: 0.7rem;
}

.divider::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 30rem;
  background: #d9d9d9;
  z-index: 1;
}
</style>