PlayArea.vue
<template>
  <div class="play-area">
    <h2>Our Play Area</h2>
    <p>Safe and fun play equipment for kids of all ages.</p>
    <div class="icon-container">
      <img src="@/assets/images/play-area-icon.jpg" alt="Play Area Icon" class="icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayArea',
};
</script>

<style scoped>
.play-area {
  background-color: #ffcccb;
  /* Light pastel pink */
  color: #f0f8ff;
  /* Light pastel blue */
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
