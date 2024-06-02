<template>
  <div id="app">
    <AppNavbar />
    <div class="content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

#app {
  text-align: center;
}

.content {
  padding: 20px;
}

/* Add global styles to beautify the page */
header {
  background: url('/src/assets/images/zhengti.png') no-repeat center center;
  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(251, 251, 251);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

header h1 {
  font-size: 3rem;
}

.section {
  margin: 20px 0;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section img {
  width: 100%;
  border-radius: 10px;
}
</style>
