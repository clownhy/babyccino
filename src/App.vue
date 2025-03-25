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
  margin: 0;
  padding: 0;
  background-color: var(--light);
  /* 移除Comic Sans字体，全局样式已在style.css中定义 */
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 0;
}

/* 添加滚动平滑效果 */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* 为固定导航栏留出空间 */
}

/* 添加针对滚动到锚点的处理 */
section[id] {
  scroll-margin-top: 80px;
}

/* 添加加载动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--dark);
}

/* 图片悬停效果 */
.img-hover {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.img-hover:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 背景图案 */
.bg-pattern {
  background-color: var(--light);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B6B' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* 清除旧样式，使用全局定义的样式 */
section {
  padding: 80px 0;
}

.section {
  margin: 20px 0;
  padding: 40px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.section:hover {
  box-shadow: var(--shadow-hover);
}

.section img {
  width: 100%;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.section img:hover {
  transform: scale(1.02);
}

/* 移除旧的覆盖样式，采用全局统一颜色 */

/* Navbar styles */
.navbar {
  background-color: rgba(255, 255, 255, 0.9);
}

.nav-link {
  color: hsl(329, 92%, 70%) !important;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 1.2rem;
}

.nav-link:hover {
  color: #fda470 !important;
}

.text-primary {
  color: hsl(329, 92%, 70%) !important;
}

.btn-primary {
  background-color: hsl(329, 92%, 70%) !important;
  border-color: hsl(329, 92%, 70%) !important;
}

.btn-primary:hover {
  background-color: #fda470 !important;
  border-color: #fda470 !important;
}
</style>
