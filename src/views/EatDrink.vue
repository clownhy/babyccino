<!-- EatDrink.vue -->
<template>
  <div class="eat-drink">
    <h2>Eat & Drink</h2>
    <p>Delicious and healthy snacks for kids and parents.</p>
    <div class="icon-container">
      <img src="@/assets/images/eat-drink-icon.jpg" alt="Eat & Drink Icon" class="icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'EatDrink',
};
</script>

<style scoped>
.eat-drink {
  background-color: #f0f8ff; /* Light pastel blue */
  color: #ffcccb; /* Light pastel pink */
  padding: 20px;
  text-align: center;
}

.icon-container {
  margin-top: 20px;
}

.icon {
  width: 100px;
}
</style>
