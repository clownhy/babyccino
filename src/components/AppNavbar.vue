<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top px-4 px-lg-5 py-3">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/images/logo.svg" alt="Babyccino Logo" class="logo me-3" />
        <h1 class="m-0">Babyccino</h1>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click.native="goToFeatures">Our Features</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/eat-drink">Menu</router-link>
          </li>
          <!-- 暂时隐藏Play Area链接，待内容完善后再显示
          <li class="nav-item">
            <router-link class="nav-link" to="/play-area">Play Area</router-link>
          </li>
          -->
          <li class="nav-item">
            <router-link class="nav-link" to="/parties">Parties</router-link>
          </li>
        </ul>
        <a href="javascript:void(0)" @click="goToAppointment" class="btn btn-primary rounded-pill px-4 ms-3 d-none d-lg-block">
          Book Now
          <i class="fa fa-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    goToFeatures() {
      // 先判断是否已经在首页
      if (this.$route.path === '/') {
        // 如果已经在首页，直接滚动到features部分
        this.$nextTick(() => {
          const facilitiesSection = document.getElementById('facilities');
          if (facilitiesSection) {
            const yOffset = -80; // 考虑到导航栏的高度
            const y = facilitiesSection.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
      } else {
        // 如果不在首页，先导航到首页，然后设置一个标记
        // 通过导航到首页同时传递features标记参数
        this.$router.push({
          path: '/',
          query: { scrollTo: 'facilities' }
        }).catch(() => {});
      }
    },
    goToAppointment() {
      // 先判断是否已经在首页
      if (this.$route.path === '/') {
        // 如果已经在首页，直接滚动到appointment部分
        this.$nextTick(() => {
          const appointmentSection = document.getElementById('appointment');
          if (appointmentSection) {
            const yOffset = -80; // 考虑到导航栏的高度
            const y = appointmentSection.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
      } else {
        // 如果不在首页，先导航到首页，然后设置一个标记
        this.$router.push({
          path: '/',
          query: { scrollTo: 'appointment' }
        }).catch(() => {});
      }
    }
  }
};
</script>

<style scoped>
.logo {
  height: 45px;
  width: auto;
  transition: var(--transition);
}

.navbar-brand:hover .logo {
  transform: rotate(5deg);
}

.navbar-brand h1 {
  color: var(--primary) !important;
  font-family: 'Bubblegum Sans', cursive;
  transition: var(--transition);
}

.navbar-brand:hover h1 {
  text-shadow: 0 2px 10px rgba(255, 147, 185, 0.3);
}

.navbar {
  box-shadow: var(--shadow);
  background-color: rgba(255, 255, 255, 0.95);
  transition: var(--transition);
}

.navbar.scrolled {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.nav-link {
  position: relative;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  margin: 0 0.2rem;
  color: var(--dark) !important;
  transition: var(--transition);
}

/* 移除下划线，只保留颜色变化效果 */
.nav-link::after {
  content: none;
}

.router-link-exact-active, .nav-link:hover {
  color: var(--primary) !important;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  background-color: var(--primary);
  border-color: var(--primary);
}

.btn-primary i {
  transition: transform 0.3s ease;
}

.btn-primary:hover i {
  transform: translateX(5px);
}

.btn-primary:hover, .btn-primary:focus {
  background-color: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 4px 15px rgba(255, 147, 185, 0.3);
  transform: translateY(-2px);
}
</style>
