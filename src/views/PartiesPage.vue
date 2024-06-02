<!-- PartiesPage.vue -->
<template>
  <div class="parties">
    <h2>Parties</h2>
    <p>Celebrate your kid's birthday with us for an unforgettable experience.</p>
    <div class="icon-container">
      <img src="@/assets/images/parties-icon.jpg" alt="Parties Icon" class="icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartiesPage',
};
</script>

<style scoped>
.parties {
  background-color: #ffcccb; /* Light pastel pink */
  color: #f0f8ff; /* Light pastel blue */
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
