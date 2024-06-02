<template>
  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 class="mb-4">Discover the Magic of Babyccino Kids Cafe</h1>
          <p>At Babyccino Kids Cafe, we create a wonderland where children aged 2 to 10 can play, learn, and grow. Our
            cafe offers a variety of engaging activities designed to spark creativity and joy. From interactive play
            areas to educational workshops, every corner of Babyccino is filled with opportunities for fun and
            discovery.</p>
          <p class="mb-4">Parents can relax and enjoy a cup of our finest coffee while their children explore a safe and
            stimulating environment. Our facilities include a vibrant play area, an arts and crafts zone, a
            mini-library, and regular themed events. Join us and let your child's imagination soar at Babyccino Kids
            Cafe!</p>
          <div class="row g-4 align-items-center">
            <div class="col-sm-6">
              <a class="btn btn-primary rounded-pill py-3 px-5" href="">Learn More</a>
            </div>
            <div class="col-sm-6">
              <div class="d-flex align-items-center">
                <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt=""
                  style="width: 45px; height: 45px;">
                <div class="ms-3">
                  <h6 class="text-primary mb-1">Jane Smith</h6>
                  <small>Founder & CEO</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
          <div class="row">
            <div class="col-12 text-center">
              <img class="img-fluid w-75 rounded-circle bg-light p-3" src="@/assets/img/about-1.jpg" alt="">
            </div>
            <div class="col-6 text-start" style="margin-top: -150px;">
              <img class="img-fluid w-100 rounded-circle bg-light p-3" src="@/assets/img/about-2.jpg" alt="">
            </div>
            <div class="col-6 text-end" style="margin-top: -150px;">
              <img class="img-fluid w-100 rounded-circle bg-light p-3" src="@/assets/img/about-3.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<script>
export default {
  name: 'AppAbout'
}
</script>

<style scoped>
.container-xxl {
  padding: 2.5rem 0;
}

.about-img img {
  margin-top: 1.5rem;
}

.text-primary {
  color: #007bff !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

p {
  margin-bottom: 1.5rem;
}

h1,
h6 {
  margin-bottom: 1rem;
}
</style>
