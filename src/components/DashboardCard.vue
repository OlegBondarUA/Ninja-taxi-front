<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ title }}</h2>
      <img v-if="icon" :src="icon" alt="icon" class="card-icon">
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <button v-if="buttonText" class="card-button" @click="buttonAction">
      {{ buttonText }}
      <img :src="buttonIcon" alt="button icon" class="button-icon">
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    buttonText: String,
    buttonIcon: String,
    buttonAction: Function,
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1 1 25%;
  max-width: 25%;
  box-sizing: border-box;
  background: #a1e8b9;
  border-radius: 19px;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.card-icon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.card-content {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 15px;
  color: #141e17;
}

.card-button {
  display: flex;
  align-items: center;
  background-color: #a1e8b9;
  border: none;
  cursor: pointer;
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 10px;
  color: rgba(20, 30, 23, 0.55);
}

.button-icon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
}
</style>