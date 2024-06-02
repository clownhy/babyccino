<template>
<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <a href="/" class="navbar-brand">
      <h1 class="m-0 text-primary">
        <i class="fa fa-book-reader me-3"></i>Babyccino
      </h1>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/play-area">Play Area</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/eat-drink">Eat & Drink</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/parties">Parties</router-link>
          </li>
      </ul>
      <a href="#" class="btn btn-primary rounded-pill px-3 d-none d-lg-block"
        >Visit Us<i class="fa fa-arrow-right ms-3"></i
      ></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  // You can add component methods, data, computed properties, etc.
};
</script>

<style scoped>
/* If you need to override any Bootstrap styles or add your own,
   you can do so here. For example:

.navbar {
  background-color: rgba(255, 255, 255, 0.9);
}

.nav-link {
  color: #333;
}

.nav-link:hover {
  color: #007bff;
}
*/
</style>

<!-- <template>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">B A B Y C C I N O</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/play-area">Play Area</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/eat-drink">Eat & Drink</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/parties">Parties</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    background: linear-gradient(90deg, #FFB6C1, #ADD8E6); /* 粉色和蓝色的渐变 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-brand {
    font-size: 1.8rem;
    font-weight: bold;
    color: white !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-family: 'Pacifico', cursive;
  }
  
  .navbar-nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .nav-item {
    margin: 0 1rem;
  }
  
  .nav-link {
    color: white !important;
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 30px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  </style>
   -->