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
        <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 class="mb-3">Party <span class="text-primary">Packages</span></h1>
          <div class="divider mx-auto"></div>
        </div>
        
        <div class="row g-4 mb-5">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="party-image-container">
              <img src="@/assets/images/party1.jpg" alt="Party" class="img-fluid rounded shadow">
            </div>
          </div>
          
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="party-info h-100 d-flex flex-column">
              <h2 class="mb-4">Package <span class="text-primary">Includes</span></h2>
              <ul class="party-features">
                <li><i class="fas fa-check-circle text-primary me-2"></i> Entry for 20 kids & 30 adults</li>
                <li><i class="fas fa-check-circle text-primary me-2"></i> 3-hours play time for private party</li>
                <li><i class="fas fa-check-circle text-primary me-2"></i> No walk-in accepted during private party period</li>
                <li><i class="fas fa-check-circle text-primary me-2"></i> 20 kids meals included</li>
              </ul>
              
              <h3 class="mt-4 mb-3">Kids Party Menu</h3>
              <ul class="party-features">
                <li><i class="fas fa-utensils text-primary me-2"></i> Chips & Chicken Nuggets</li>
                <li><i class="fas fa-wine-bottle text-primary me-2"></i> Bottle of Juice</li>
                <li><i class="fas fa-apple-alt text-primary me-2"></i> Fresh fruits</li>
              </ul>
              
              <div class="mt-auto">
                <p class="party-note"><i class="fas fa-info-circle me-2"></i> Extra Entry: $15 per kid</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Party Schedule & Prices -->
        <div class="row g-4">
          <div class="col-12">
            <div class="section-title mb-4">
              <h2 class="mb-3">Party <span class="text-primary">Schedule & Prices</span></h2>
              <div class="divider"></div>
            </div>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="party-package">
              <div class="package-header">
                <h3>Weekend & Public Holiday Morning</h3>
                <span class="time">10:00am - 1:00pm</span>
              </div>
              <div class="package-price">
                <span class="price-tag">$999</span>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="party-package">
              <div class="package-header">
                <h3>Weekend & Public Holiday Afternoon</h3>
                <span class="time">3:00pm - 6:00pm</span>
              </div>
              <div class="package-price">
                <span class="price-tag">$849</span>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="party-package">
              <div class="package-header">
                <h3>Weekend Late Party</h3>
                <span class="time">5:00pm - 8:00pm</span>
              </div>
              <div class="package-price">
                <span class="price-tag">$649</span>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="party-package">
              <div class="package-header">
                <h3>Weekdays Afternoon</h3>
                <span class="time">4:00pm - 7:00pm</span>
              </div>
              <div class="package-price">
                <span class="price-tag">$649</span>
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
                
                <div class="policy-item">
                  <i class="fas fa-clipboard-list text-primary"></i>
                  <div class="policy-text">
                    <p>For adults party menu options, please see our party food menu.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA Section -->
        <div class="row mt-5">
          <div class="col-12 text-center">
            <a href="/#appointment" class="btn btn-primary btn-lg py-3 px-5 wow fadeInUp" data-wow-delay="0.3s">
              Book Your Party Now <i class="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartiesPage',
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
}

@media (max-width: 768px) {
  .party-info {
    padding: 1.5rem;
  }
  
  .party-package {
    padding: 1.5rem;
  }
  
  .price-tag {
    font-size: 2rem;
  }
}
</style>
