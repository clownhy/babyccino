<template>
  <div class="pricing-page">
    <!-- Page Header -->
    <div class="container-fluid page-header py-5 mb-5">
      <div class="container py-5 text-center">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Entry Ticket</h1>
        <p class="lead text-white mb-0 animated slideInUp">Price List for All Ages</p>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="mb-3">Entry Ticket <span class="text-primary">Price List</span></h1>
          <div class="divider mx-auto"></div>
        </div>

        <!-- Adult -->
        <div class="pricing-card mb-4">
          <div class="pricing-card-header">
            <i class="fas fa-user me-2"></i> Adult
          </div>
          <div class="pricing-card-body">
            <div class="pricing-row">
              <span class="pricing-label">Entry Ticket</span>
              <span class="pricing-value">$5.0 per person weekdays / weekends / public holidays</span>
            </div>
          </div>
        </div>

        <!-- 6-12 months -->
        <div class="pricing-card mb-4">
          <div class="pricing-card-header">
            <i class="fas fa-baby me-2"></i> 6-12 Months
          </div>
          <div class="pricing-card-body">
            <div class="pricing-row">
              <span class="pricing-label">Weekdays</span>
              <span class="pricing-value">1 hour $5.0 &nbsp;|&nbsp; Day Pass (single entry): $9.0 &nbsp;|&nbsp; Free with siblings</span>
            </div>
          </div>
        </div>

        <!-- 1-6 years -->
        <div class="pricing-card mb-4">
          <div class="pricing-card-header">
            <i class="fas fa-child me-2"></i> 1-6 Years
          </div>
          <div class="pricing-card-body">
            <div class="pricing-table">
              <div class="pricing-table-header">
                <span></span>
                <span>1 Hour</span>
                <span>2 Hours</span>
                <span>Day Pass (Single entry)</span>
              </div>
              <div class="pricing-table-row">
                <span class="pricing-label">Weekdays</span>
                <span class="pricing-value">$11</span>
                <span class="pricing-value">$19</span>
                <span class="pricing-value">$25</span>
              </div>
              <div class="pricing-table-row">
                <span class="pricing-label">Weekends / Public Holidays</span>
                <span class="pricing-value">$12</span>
                <span class="pricing-value">$22</span>
                <span class="pricing-value">$28</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 8 years and over -->
        <div class="pricing-card mb-4">
          <div class="pricing-card-header">
            <i class="fas fa-running me-2"></i> 8 Years and Over
          </div>
          <div class="pricing-card-body">
            <div class="pricing-row">
              <span class="pricing-label">1 Entry Weekdays</span>
              <span class="pricing-value">$8.0 per person</span>
            </div>
            <div class="pricing-row">
              <span class="pricing-label">1 Entry Weekends</span>
              <span class="pricing-value">$10.0 per person</span>
            </div>
            <p class="pricing-note mt-3">
              <i class="fas fa-info-circle text-primary me-1"></i>
              *Kids over 7 can only enter as playmate for younger siblings.
            </p>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-5">
          <router-link to="/" class="btn btn-primary btn-lg py-3 px-5" @click.native="scrollToAppointment">
            Book Now <i class="fas fa-arrow-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingPage',
  methods: {
    scrollToAppointment() {
      if (this.$route.path === '/') {
        window.scrollTo({ top: 0, behavior: 'auto' });
        setTimeout(() => {
          const section = document.getElementById('appointment');
          if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 500);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
        this.$router.push({ path: '/', query: { scrollTo: 'appointment' } }).catch(() => {});
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

.divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, var(--primary), #8865c1);
  border-radius: 3px;
  margin-bottom: 1.5rem;
}

/* Pricing Cards */
.pricing-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
}

.pricing-card-header {
  background: linear-gradient(135deg, var(--primary), #c77dba);
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Bubblegum Sans', cursive;
}

.pricing-card-body {
  padding: 1.5rem;
}

.pricing-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
}

.pricing-row:last-of-type {
  border-bottom: none;
}

.pricing-label {
  font-weight: 600;
  color: var(--dark);
}

.pricing-value {
  font-weight: 500;
  color: var(--primary);
}

.pricing-note {
  font-size: 0.95rem;
  font-style: italic;
  color: #666;
  margin-bottom: 0;
}

/* Pricing Table */
.pricing-table {
  width: 100%;
}

.pricing-table-header {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 0.5rem;
  padding: 0.8rem 0;
  border-bottom: 2px solid rgba(255, 147, 185, 0.2);
  font-weight: 600;
  color: var(--dark);
  font-size: 0.95rem;
}

.pricing-table-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 0.5rem;
  padding: 0.8rem 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
  align-items: center;
}

.pricing-table-row:last-child {
  border-bottom: none;
}

/* Button */
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

/* Responsive */
@media (max-width: 768px) {
  .pricing-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }

  .pricing-table-header,
  .pricing-table-row {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }

  .pricing-table-header span:first-child {
    display: none;
  }

  .pricing-table-row .pricing-label {
    font-size: 1.05rem;
    padding-top: 0.5rem;
    border-top: 1px dashed rgba(0, 0, 0, 0.05);
  }

  .pricing-table-row:first-of-type .pricing-label {
    border-top: none;
  }

  .pricing-table-header {
    display: none;
  }

  .pricing-table-row {
    padding: 0.5rem 0;
  }

  .pricing-table-row .pricing-value::before {
    font-weight: 600;
    color: var(--dark);
    margin-right: 0.5rem;
  }

  .pricing-card-body {
    padding: 1rem;
  }
}
</style>
