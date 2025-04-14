<template>
  <div>
    <!-- 英雄轮播图区域 - 使用Bootstrap轮播图代替Swiper -->
    <div class="hero-section">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(item, index) in carouselItems" :key="index" :class="{ active: index === 0 }">
            <div class="position-relative header-carousel">
              <div class="overlay-gradient"></div>
              <img class="img-fluid hero-img" :src="item.image" alt="">
              <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-10 col-lg-7">
                      <div class="hero-content">
                        <span class="hero-subtitle animated fadeInUp">Welcome to Babyccino</span>
                        <h1 class="hero-title animated fadeInUp">{{ item.title }}</h1>
                        <p class="hero-text animated fadeInUp">{{ item.description }}</p>
                        <div class="hero-buttons animated fadeInUp">
                          <a href="" class="btn btn-primary">{{ item.button1 }}</a>
                          <a href="" class="btn btn-light">{{ item.button2 }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="hero-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>
    </div>

    <!-- 设施特色区域 -->
    <section id="facilities" class="section-wrapper">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subheading">Our Features</span>
          <h2 class="section-heading">What Makes Us Special</h2>
          <div class="divider mx-auto"></div>
        </div>
        <Facilities></Facilities>
      </div>
    </section>

    <!-- 关于我们区域 -->
    <section id="about" class="section-wrapper bg-light">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subheading">About Us</span>
          <h2 class="section-heading">Our Story</h2>
          <div class="divider mx-auto"></div>
        </div>
        <About></About>
      </div>
    </section>

    <!-- 菜单区域 -->
    <section id="menu" class="section-wrapper">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subheading">Our Menu</span>
          <h2 class="section-heading">Delicious & Nutritious</h2>
          <div class="divider mx-auto"></div>
        </div>
        <Menu></Menu>
      </div>
    </section>

    <!-- 预约区域 -->
    <section id="appointment" class="section-wrapper bg-pattern">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subheading">Book Now</span>
          <h2 class="section-heading">Make An Appointment</h2>
          <div class="divider mx-auto"></div>
        </div>
        <Appointment></Appointment>
      </div>
    </section>

    <!-- 返回顶部按钮 -->
    <a href="#" class="back-to-top" :class="{ 'show': showBackToTop }">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</template>

<script>
import Facilities from '@/components/AppFacilities.vue';
import About from '@/components/AppAbout.vue';
import Menu from '@/components/AppMenu.vue';
import Appointment from '@/components/AppAppointment.vue';

export default {
  name: 'HomePage',
  components: {
    Facilities,
    About,
    Menu,
    Appointment
  },
  data() {
    return {
      carouselItems: [
        {
          image: require('@/assets/images/play3.jpg'),
          title: 'The Perfect Cafe for Kids and Families',
          description: 'At our cafe, kids can play and learn while parents enjoy a cup of coffee. Our environment is safe and welcoming for all families.',
          button1: 'Learn More',
          button2: 'Our Activities'
        },
        {
          image: require('@/assets/images/play2.jpg'),
          title: 'Creating a Brighter Future for Your Child',
          description: 'We offer a variety of educational and entertaining activities to help children learn and grow. Join us in creating a joyful and knowledgeable future for kids.',
          button1: 'Learn More',
          button2: 'Our Activities'
        },
        {
          image: require('@/assets/images/play1.jpg'),
          title: 'Growing Up with Joy',
          description: 'Our cafe is not just a playground for kids but also a place for them to learn and grow. We strive to provide an environment where children are happy and parents are at ease.',
          button1: 'Learn More',
          button2: 'Our Activities'
        }
      ],
      showBackToTop: false
    };
  },
  mounted() {
    // 添加滚动时的淡入动画
    this.addScrollAnimation();

    // 添加滚动事件监听
    window.addEventListener('scroll', this.handleScroll);

    // 检查URL中是否包含#facilities锚点
    if (window.location.hash === '#facilities') {
      this.$nextTick(() => {
        const facilitiesSection = document.getElementById('facilities');
        if (facilitiesSection) {
          // 给一点延迟确保DOM完全加载
          setTimeout(() => {
            facilitiesSection.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        }
      });
    }

    // 检查URL查询参数中是否包含scrollTo
    if (this.$route.query.scrollTo) {
      const targetId = this.$route.query.scrollTo;
      
      // First scroll to top to reset position
      window.scrollTo({ top: 0, behavior: 'auto' });
      
      // 使用更长的延迟和重试机制确保元素已加载
      const maxAttempts = 8; // Increased from 5 to 8
      let attempts = 0;
      
      const tryScrolling = () => {
        attempts++;
        const section = document.getElementById(targetId);
        
        if (section) {
          console.log(`Found ${targetId} section on attempt ${attempts}, scrolling...`);
          
          // 找到了目标元素，执行滚动
          const yOffset = -80; // 考虑到导航栏的高度
          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          
          // 滚动后聚焦到该部分
          section.setAttribute('tabindex', '-1');
          section.focus();
          
          // Add a second scroll attempt after animation for reliability
          setTimeout(() => {
            const currentPosition = window.scrollY;
            const targetPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
            
            if (Math.abs(currentPosition - targetPosition) > 50) {
              console.log('Position correction needed:', currentPosition, targetPosition);
              window.scrollTo({ top: targetPosition, behavior: 'auto' });
            }
            
            // 清除查询参数，保持URL干净
            this.$router.replace({ path: this.$route.path, query: {} }).catch(() => {});
          }, 800);
        } else if (attempts < maxAttempts) {
          // 没找到元素但还有重试次数，继续尝试
          console.log(`Attempt ${attempts}: ${targetId} not found, retrying...`);
          setTimeout(tryScrolling, 700); // Increased from 500ms to 700ms
        } else {
          console.error(`Failed to find ${targetId} section after ${maxAttempts} attempts`);
          // Clear query params even if scrolling failed
          this.$router.replace({ path: this.$route.path, query: {} }).catch(() => {});
        }
      };
      
      // 延迟更长时间后开始第一次尝试，确保页面完全加载
      setTimeout(tryScrolling, 800); // Increased from 500ms to 800ms
    }
  },
  beforeDestroy() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    addScrollAnimation() {
      // 获取所有section元素
      const sections = document.querySelectorAll('.section-wrapper');

      // 使用Intersection Observer API检测元素是否进入视口
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target); // 一旦添加了类，就不再观察
          }
        });
      }, { threshold: 0.1 }); // 当10%的元素可见时触发

      // 观察每个section
      sections.forEach(section => {
        observer.observe(section);
      });
    },
    handleScroll() {
      // 处理返回顶部按钮的显示/隐藏
      this.showBackToTop = window.scrollY > 300;
    }
  }
};
</script>

<style scoped>
/* 英雄区域样式 */
.hero-section {
  position: relative;
  background-color: var(--light);
  overflow: hidden;
  margin-bottom: 6rem;
}

/* 轮播图样式 */
#heroCarousel {
  position: relative;
}

.carousel-indicators {
  z-index: 15;
}

.carousel-indicators button {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 6px;
  transition: var(--transition);
}

.carousel-indicators button.active {
  background-color: var(--primary);
  transform: scale(1.2);
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%;
  opacity: 0.7;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(255, 147, 185, 0.3);
  background-size: 20px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control-prev:hover .carousel-control-prev-icon,
.carousel-control-next:hover .carousel-control-next-icon {
  background-color: var(--primary);
  transform: scale(1.1);
}

.header-carousel {
  position: relative;
  height: 85vh;
  min-height: 600px;
  overflow: hidden;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-item.active .hero-img {
  animation: zoom-in 10s ease forwards;
}

@keyframes zoom-in {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

/* 覆盖渐变色 */
.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(74, 74, 124, 0.6) 0%, rgba(255, 147, 185, 0.3) 100%);
  z-index: 1;
}

/* 英雄内容样式 */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  color: white;
  text-align: left;
  padding: 3rem 0;
}

.carousel-item.active .hero-subtitle {
  animation: fadeInUp 1s ease 0.3s forwards;
}

.carousel-item.active .hero-title {
  animation: fadeInUp 1s ease 0.5s forwards;
}

.carousel-item.active .hero-text {
  animation: fadeInUp 1s ease 0.7s forwards;
}

.carousel-item.active .hero-buttons {
  animation: fadeInUp 1s ease 0.9s forwards;
}

.hero-subtitle {
  display: inline-block;
  font-family: 'Bubblegum Sans', cursive;
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  backdrop-filter: blur(5px);
  opacity: 0;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
}

.hero-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  opacity: 0;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  opacity: 0;
}

.hero-buttons .btn {
  padding: 0.8rem 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.hero-buttons .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.hero-buttons .btn-primary {
  background-color: var(--primary);
  border-color: var(--primary);
}

.hero-buttons .btn-light {
  color: var(--dark);
}

/* 形状分隔符 */
.hero-shape {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: 2;
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeInUp {
  animation-name: fadeInUp;
}

/* 区域通用样式 */
.section-wrapper {
  padding: 6rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section-wrapper.section-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-wrapper.bg-light {
  background-color: #F8F5FF; /* 轻微的紫色底色 */
}

.section-header {
  margin-bottom: 3rem;
}

.section-subheading {
  display: inline-block;
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.section-heading {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
  font-family: 'Bubblegum Sans', cursive;
}

.divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 3px;
  margin-bottom: 1.5rem;
}

/* 交替区域样式 */
.section-wrapper:nth-of-type(even) {
  background-color: #f8f9fa;
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 99;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background-color: var(--dark);
  transform: translateY(-3px);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .header-carousel {
    height: 70vh;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-wrapper {
    padding: 4rem 0;
  }

  .section-heading {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .header-carousel {
    height: 60vh;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .section-wrapper {
    padding: 3rem 0;
  }
}
</style>
