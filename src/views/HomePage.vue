<template>
  <div class="container-fluid p-0 mb-5">
    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true, dynamicBullets: true }">
      <swiper-slide v-for="(item, index) in carouselItems" :key="index">
        <div class="position-relative header-carousel">
          <img class="img-fluid" :src="item.image" alt="">
          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style="background: rgba(0, 0, 0, .2);">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-10 col-lg-8">
                  <h1 class="display-2 text-white animated slideInDown mb-4">{{ item.title }}</h1>
                  <p class="fs-5 fw-medium text-white mb-4 pb-2">{{ item.description }}</p>
                  <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">{{
                    item.button1 }}</a>
                  <a href="" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">{{ item.button2
                    }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>
  <Facilities></Facilities>
  <About></About>
  <Menu></Menu>
  <Appointment></Appointment>
</template>

<script>
import { defineComponent } from 'vue';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import Facilities from '@/components/AppFacilities.vue';
import About from '@/components/AppAbout.vue';
import Appointment from '@/components/AppAppointment.vue';
import Menu from '@/components/AppMenu.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide,
    Facilities,
    About,
    Menu,
    Appointment
  },
  setup() {
    // 如果Facilities组件不需要特殊的setup逻辑，可以省略这一部分
    return {
      modules: [Pagination]
    };
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      },
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
      ]
    }
  }
});
</script>

<style scoped>
/* Swiper container styles */
.container-fluid {
  position: relative;
}

/* Swiper slide styles */
.header-carousel {
  position: relative;
  overflow: hidden;
}

.header-carousel::before,
.header-carousel::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 10px;
  top: 0;
  left: 0;
  background: url('@/assets/img/bg-header-top.png') center center repeat-x;
  z-index: 1;
}

.header-carousel::after {
  height: 19px;
  top: auto;
  bottom: 0;
  background: url('@/assets/img/bg-header-bottom.png') center center repeat-x;
}

/* Adjust image size */
img.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Additional custom styles */
.position-absolute {
  background: rgba(0, 0, 0, 0.2);
}
</style>
