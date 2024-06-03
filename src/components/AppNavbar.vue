<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <a href="/" class="navbar-brand d-flex align-items-center">
      <img src="@/assets/images/logo.svg" alt="Babyccino Logo" class="logo me-3" />
      <h1 class="m-0 text-primary">Babyccino</h1>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
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
      <a href="#" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Visit Us<i
          class="fa fa-arrow-right ms-3"></i></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.logo {
  height: 50px;
  width: auto;
}

.navbar {
  background-color: rgba(255, 255, 255, 0.9);
}

.nav-link {
  color: hsl(329, 92%, 70%);
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 1.2rem;
}

.nav-link:hover {
  color: #fda470;
}

.text-primary {
  color: hsl(329, 92%, 70%) !important;
}

.btn-primary {
  background-color: hsl(329, 92%, 70%);
  border-color: hsl(329, 92%, 70%);
}

.btn-primary:hover {
  background-color: #fda470;
  border-color: #fda470;
}
</style>
