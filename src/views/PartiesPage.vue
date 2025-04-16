<!-- PartiesPage.vue -->
<template>
  <div class="parties-page">
    <!-- Page Header -->
    <div class="container-fluid page-header py-5 mb-5">
      <div class="container py-5 text-center">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Private Parties</h1>
        <p class="lead text-white mb-0 animated slideInUp">Celebrate special occasions with us</p>
      </div>
    </div>

    <!-- Party Info Section -->
    <div class="container-xxl py-5">
      <div class="container">
        <!-- Party Packages Section -->
        <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 class="mb-3">Party <span class="text-primary">Packages</span></h1>
          <div class="divider mx-auto"></div>
        </div>

        <div class="row g-4 mb-5">
          <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="party-image-container">
              <img src="@/assets/images/party1.jpg" alt="Party" class="img-fluid rounded shadow">
            </div>
          </div>

          <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
            <div class="party-info h-100 d-flex flex-column">
              <h2 class="mb-3">Package <span class="text-primary">Includes</span></h2>
              <ul class="party-features">
                <li><i class="fas fa-check-circle text-primary me-2"></i> Entry for 20 kids & 30 adults</li>
                <li><i class="fas fa-check-circle text-primary me-2"></i> 3-hours play time for private party</li>
                <li><i class="fas fa-check-circle text-primary me-2"></i> No walk-in accepted during the private party period</li>
                <li><i class="fas fa-check-circle text-primary me-2"></i> 20 kids meals included (Chips & Chicken Nuggets, Bottle of Juice, Fresh fruits)</li>
                <li><i class="fas fa-info-circle text-primary me-2"></i> Extra Entry: $15 per kid</li>
              </ul>

              <div class="party-schedule-compact mt-3">
                <h3 class="mb-3">Schedule & Prices</h3>
                <div class="schedule-grid">
                  <div class="schedule-item">
                    <div class="schedule-time">Weekend & Public Holiday Morning (10:00am - 1:00pm)</div>
                    <div class="schedule-price">$999</div>
                  </div>
                  <div class="schedule-item">
                    <div class="schedule-time">Weekend & Public Holiday Afternoon (3:00pm - 6:00pm)</div>
                    <div class="schedule-price">$849</div>
                  </div>
                  <div class="schedule-item">
                    <div class="schedule-time">Weekend Late Party (5:00pm - 8:00pm)</div>
                    <div class="schedule-price">$649</div>
                  </div>
                  <div class="schedule-item">
                    <div class="schedule-time">Weekdays Afternoon (4:00pm - 7:00pm)</div>
                    <div class="schedule-price">$599</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Catering Options Section -->
        <div class="row g-4 mb-5">
          <div class="col-12">
            <div class="section-title mb-4 wow fadeInUp" data-wow-delay="0.1s">
              <h2 class="mb-3">Catering <span class="text-primary">Options</span></h2>
              <div class="divider"></div>
            </div>
          </div>

          <div class="col-12 wow fadeInUp" data-wow-delay="0.2s">
            <div class="catering-options">
              <div class="catering-accordion">
                <div class="catering-header" @click="toggleCatering">
                  <h4>View All Catering Options <i :class="[showCatering ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i></h4>
                  <p class="catering-preview">Mini Burger, Chicken Snitzel Roll, Mixed Fryer Platter, Sandwich Platter, Fruit Platter, and more...</p>
                </div>
                <div class="catering-content" :class="{active: showCatering}">
                  <div class="catering-grid">
                    <div class="catering-item">
                      <div class="catering-name">Mini Burger 12pc (chicken, beef, veggie)</div>
                      <div class="catering-price">$50</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Chicken Snitzel Roll 10PC</div>
                      <div class="catering-price">$50</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Mixed Fryer Platter (chips, nuggets, hash brown, squid rings, fish fillets)</div>
                      <div class="catering-price">$50</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Ham & chesse croissant Platter 10PC</div>
                      <div class="catering-price">$50</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Sandwich Platter (chicken, avocado, ham, egg)</div>
                      <div class="catering-price">$60</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Fruit Platter</div>
                      <div class="catering-price">$30 small / $60 large</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Fairy Bread platter with lolly & marshmallow</div>
                      <div class="catering-price">$30</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Sushi Platter</div>
                      <div class="catering-price">$60</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">3 pizzas</div>
                      <div class="catering-price">$60</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Wrap platter</div>
                      <div class="catering-price">$50</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Large bowl of salad (Caesar, chicken or Greek)</div>
                      <div class="catering-price">$38</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Taco 18pc (fish or beef)</div>
                      <div class="catering-price">$60</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Mini bruschetta 12pc</div>
                      <div class="catering-price">$30</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Bolognese pasta bowl</div>
                      <div class="catering-price">$30</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Cheese board platter</div>
                      <div class="catering-price">$60</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Fresh spring roll (prawn, beef, tofu)</div>
                      <div class="catering-price">$60</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Jar soft drinks</div>
                      <div class="catering-price">$10</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Cake (6 inch / 8 inch)</div>
                      <div class="catering-price">$160 / $180</div>
                    </div>
                    <div class="catering-item">
                      <div class="catering-name">Theme cupcake 12pc</div>
                      <div class="catering-price">$70</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Decoration Options Section -->
        <div class="row g-4 mb-5">
          <div class="col-12">
            <div class="section-title mb-4 wow fadeInUp" data-wow-delay="0.1s">
              <h2 class="mb-3">Decoration <span class="text-primary">Options</span></h2>
              <div class="divider"></div>
            </div>
          </div>

          <div class="col-12 wow fadeInUp" data-wow-delay="0.2s">
            <div class="decoration-options">
              <div class="decoration-grid">
                <div class="decoration-item">
                  <div class="decoration-icon"><i class="fas fa-birthday-cake text-primary"></i></div>
                  <div class="decoration-content">
                    <h4>Theme balloon garland with birthday number set</h4>
                    <p class="decoration-price">$180</p>
                  </div>
                </div>
                <div class="decoration-item">
                  <div class="decoration-icon"><i class="fas fa-wind text-primary"></i></div>
                  <div class="decoration-content">
                    <h4>Helium balloon</h4>
                    <p class="decoration-price">Small: $3 / Big: $5 / 5× balloon banquet: $12</p>
                  </div>
                </div>
                <div class="decoration-item">
                  <div class="decoration-icon"><i class="fas fa-image text-primary"></i></div>
                  <div class="decoration-content">
                    <h4>Backdrop or printed banner</h4>
                    <p class="decoration-price">$30-$150</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Activities Section -->
        <div class="row g-4 mb-5">
          <div class="col-12">
            <div class="section-title mb-4 wow fadeInUp" data-wow-delay="0.1s">
              <h2 class="mb-3">Party <span class="text-primary">Activities</span></h2>
              <div class="divider"></div>
            </div>
          </div>

          <div class="col-12 wow fadeInUp" data-wow-delay="0.2s">
            <div class="activities-container">
              <div class="row g-4">
                <div class="col-md-4">
                  <div class="activity-card">
                    <div class="activity-icon">
                      <i class="fas fa-paint-brush text-primary"></i>
                    </div>
                    <h4>Face Painting</h4>
                    <p>Transform your little ones with colorful face painting designs.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="activity-card">
                    <div class="activity-icon">
                      <i class="fas fa-magic text-primary"></i>
                    </div>
                    <h4>Balloon Twist</h4>
                    <p>Delight children with amazing balloon animals and shapes.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="activity-card">
                    <div class="activity-icon">
                      <i class="fas fa-mask text-primary"></i>
                    </div>
                    <h4>Costume Play</h4>
                    <p>Let kids dress up as their favorite characters for imaginative play.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Party Policies -->
        <div class="row mt-5">
          <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="party-policies">
              <h3 class="mb-4">Party <span class="text-primary">Policies</span></h3>
              <div class="divider mb-4"></div>

              <div class="policy-list">
                <div class="policy-item">
                  <i class="fas fa-utensils text-primary"></i>
                  <div class="policy-text">
                    <p>Feel free to bring food for adults. We do not cook or reheat food for adults.</p>
                  </div>
                </div>

                <div class="policy-item">
                  <i class="fas fa-wine-bottle text-primary"></i>
                  <div class="policy-text">
                    <p>No outside drinks are allowed, please order here or BYO with charge of $50.</p>
                  </div>
                </div>

                <div class="policy-item">
                  <i class="fas fa-money-bill text-primary"></i>
                  <div class="policy-text">
                    <p>We require $300 deposit to secure your booking. The deposit is not refundable.</p>
                  </div>
                </div>

                <div class="policy-item">
                  <i class="fas fa-utensils text-primary"></i>
                  <div class="policy-text">
                    <p>Please bring adults cutlery, plates, and cups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="row mt-5">
          <div class="col-12 text-center">
            <router-link to="/" class="btn btn-primary btn-lg py-3 px-5 wow fadeInUp" @click.native="scrollToAppointment" data-wow-delay="0.3s">
              Book Your Party Now <i class="fas fa-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartiesPage',
  data() {
    return {
      showCatering: false
    };
  },
  methods: {
    toggleCatering() {
      this.showCatering = !this.showCatering;
    },
    scrollToAppointment() {
      // 如果已经在首页，滚动到appointment部分
      if (this.$route.path === '/') {
        // First scroll to top to reset position
        window.scrollTo({ top: 0, behavior: 'auto' });

        setTimeout(() => {
          const appointmentSection = document.getElementById('appointment');
          if (appointmentSection) {
            const yOffset = -80; // 考虑到导航栏的高度
            const y = appointmentSection.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });

            // 滚动后聚焦到该部分，增加可访问性
            appointmentSection.setAttribute('tabindex', '-1');
            appointmentSection.focus();

            // Add a second scroll attempt after animation for reliability
            setTimeout(() => {
              const currentPosition = window.scrollY;
              const targetPosition = appointmentSection.getBoundingClientRect().top + window.scrollY + yOffset;

              if (Math.abs(currentPosition - targetPosition) > 50) {
                console.log('Position correction needed:', currentPosition, targetPosition);
                window.scrollTo({ top: targetPosition, behavior: 'auto' });
              }
            }, 800);
          }
        }, 500); // 增加延迟，确保页面完全渲染
      } else {
        // 如果不在首页，先滚动到顶部，然后导航到首页并传递scrollTo参数
        window.scrollTo({ top: 0, behavior: 'auto' });

        // 使用参数指示首页需要滚动到appointment部分
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
.page-header {
  background: linear-gradient(135deg, var(--primary) 0%, #8865c1 100%);
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff' opacity='.25'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' fill='%23ffffff' opacity='.5'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff' opacity='.75'/%3E%3C/svg%3E") no-repeat bottom;
  background-size: 100% 100%;
}

.party-image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.party-info {
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  height: 100%;
}

.party-features {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.party-features li {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.party-note {
  font-weight: 500;
  font-style: italic;
  color: var(--primary);
  margin-bottom: 0;
}

/* Party Schedule Compact Styles */
.party-schedule-compact {
  background-color: rgba(255, 147, 185, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
}

.schedule-grid {
  display: grid;
  gap: 0.8rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}

.schedule-item:last-child {
  border-bottom: none;
}

.schedule-time {
  font-weight: 500;
  font-size: 1rem;
}

.schedule-price {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--primary);
}

/* Catering Options Styles */
.catering-options {
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
}

.catering-accordion {
  width: 100%;
}

.catering-header {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 147, 185, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.catering-header:hover {
  background-color: rgba(255, 147, 185, 0.1);
}

.catering-header h4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--primary);
}

.catering-header i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.catering-preview {
  margin-bottom: 0;
  font-size: 0.95rem;
  color: var(--body);
}

.catering-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.catering-content.active {
  max-height: 2000px;
  margin-top: 1rem;
}

.catering-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.catering-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  background-color: rgba(255, 147, 185, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.catering-item:hover {
  background-color: rgba(255, 147, 185, 0.1);
}

.catering-name {
  font-weight: 500;
  flex: 1;
}

.catering-price {
  font-weight: 700;
  color: var(--primary);
  white-space: nowrap;
  margin-left: 0.8rem;
}

/* Decoration Options Styles */
.decoration-options {
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
}

.decoration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.2rem;
}

.decoration-item {
  display: flex;
  align-items: flex-start;
  padding: 1.2rem;
  background-color: rgba(255, 147, 185, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.decoration-item:hover {
  background-color: rgba(255, 147, 185, 0.1);
}

.decoration-icon {
  font-size: 1.8rem;
  margin-right: 1.2rem;
  color: var(--primary);
}

.decoration-content h4 {
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.decoration-price {
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0;
  font-size: 1rem;
}

/* Activities Styles */
.activities-container {
  margin-top: 1rem;
}

.activity-card {
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 100%;
  transition: all 0.3s ease;
}

.activity-card:hover {
  background-color: rgba(255, 147, 185, 0.05);
}

.activity-icon {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 1.2rem;
}

.activity-card h4 {
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--dark);
  font-size: 1.1rem;
}

.activity-card p {
  color: var(--body);
  margin-bottom: 0;
  font-size: 0.95rem;
}

/* Original Styles */
.party-package {
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.party-package:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
}

.package-header {
  margin-bottom: 1.5rem;
}

.package-header h3 {
  margin-bottom: 0.5rem;
  color: var(--dark);
  font-weight: 600;
}

.time {
  display: inline-block;
  padding: 0.3rem 1rem;
  background-color: rgba(255, 147, 185, 0.1);
  border-radius: 30px;
  color: var(--primary);
  font-weight: 500;
}

.package-price {
  margin-top: auto;
  text-align: center;
}

.price-tag {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  display: block;
}

.price-note {
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--dark);
  margin-top: 0.5rem;
}

.divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, var(--primary), #8865c1);
  border-radius: 3px;
  margin-bottom: 1.5rem;
}

.party-policies {
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
}

.policy-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.policy-item {
  display: flex;
  align-items: flex-start;
}

.policy-item i {
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
}

.policy-text p {
  margin-bottom: 0;
  font-size: 1.1rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  background-color: var(--primary);
  border-color: var(--primary);
  font-weight: 600;
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 147, 185, 0.3);
}

.btn-primary i {
  transition: transform 0.3s ease;
}

.btn-primary:hover i {
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .policy-list {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .party-image-container {
    margin-bottom: 2rem;
  }

  .catering-grid,
  .decoration-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .catering-item {
    font-size: 0.9rem;
  }

  .decoration-content h4 {
    font-size: 1rem;
  }

  .decoration-price {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .party-info,
  .catering-options,
  .decoration-options,
  .activity-card,
  .party-policies {
    padding: 1.2rem;
  }

  .party-package {
    padding: 1.2rem;
  }

  .price-tag {
    font-size: 1.8rem;
  }

  .schedule-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .schedule-price {
    margin-top: 0.5rem;
  }

  .catering-grid,
  .decoration-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .catering-item {
    padding: 0.5rem 0.7rem;
  }

  .decoration-item {
    padding: 1rem;
  }

  .decoration-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .activity-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .activity-card h4 {
    margin-bottom: 0.6rem;
  }

  .activity-card p {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .catering-header h4 {
    font-size: 1.1rem;
  }

  .catering-preview {
    font-size: 0.9rem;
  }

  .party-features li {
    font-size: 1rem;
  }

  .policy-item i {
    font-size: 1.2rem;
  }

  .policy-text p {
    font-size: 1rem;
  }
}
</style>
