<!-- EatDrink.vue -->
<template>
  <div class="menu-page">
    <!-- Page Header -->
    <div class="container-fluid page-header py-5 mb-4">
      <div class="container py-5 text-center">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Delicious Snacks</h1>
        <p class="lead text-white mb-0 animated slideInUp">Freshly made with love</p>
      </div>
    </div>
    
    <!-- Menu Section -->
    <div class="container-xxl py-4">
      <div class="container">
        <div class="text-center mb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h1 class="mb-3">Snacks & Treats</h1>
          <div class="divider mx-auto"></div>
        </div>
        
        <!-- Menu Categories Tabs -->
        <div class="menu-tabs mb-4">
          <div class="scrollable-tabs">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="pill" href="#kids">Kids Meal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#snacks">Snacks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#rice">Japanese Rice</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#burgers">Burgers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#drinks">Drinks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#desserts">Desserts</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Menu Items -->
        <div class="tab-content">
          <!-- Kids Meal Tab -->
          <div id="kids" class="tab-pane fade show active">
            <div class="note-box mb-3">
              <p class="mb-0"><i class="fas fa-info-circle me-2"></i> All kids meals come with a small serve of fruits. Extra $2 is charged for switching to sweet potato chips.</p>
            </div>
            
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-drumstick-bite menu-icon"></i>
                  <h5>4pc Chicken Nuggets & Chips</h5>
                </div>
                <span class="menu-price">$11</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-utensils menu-icon"></i>
                  <h5>Kids Size Spaghetti Bolognese</h5>
                </div>
                <span class="menu-price">$11</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-bowl-rice menu-icon"></i>
                  <h5>Kids Size Japanese Gyudon</h5>
                </div>
                <span class="menu-price">$11.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-bread-slice menu-icon"></i>
                  <h5>Ham & Cheese Croissant & Fruit & Juice</h5>
                </div>
                <span class="menu-price">$12</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-fish menu-icon"></i>
                  <h5>2pc Fish Fillets & Chips</h5>
                </div>
                <span class="menu-price">$12.3</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-seedling menu-icon"></i>
                  <h5>Kids Rice Ball & Karaage Chicken Meal Set</h5>
                </div>
                <span class="menu-price">$13.8</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-hotdog menu-icon"></i>
                  <h5>Kids Rice Ball & Sausage Meal Set</h5>
                </div>
                <span class="menu-price">$13.8</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-drumstick-bite menu-icon"></i>
                  <h5>Chicken Schnitzel & Chips</h5>
                </div>
                <span class="menu-price">$14.3</span>
              </div>
            </div>
          </div>
          
          <!-- Snacks Tab -->
          <div id="snacks" class="tab-pane fade">
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-utensils menu-icon"></i>
                  <h5>Ham & Cheese Croissant</h5>
                </div>
                <span class="menu-price">$6</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-fish menu-icon"></i>
                  <h5>Takoyaki (6pc)</h5>
                </div>
                <span class="menu-price">$7.3</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-bacon menu-icon"></i>
                  <h5>Hash Browns (2pc)</h5>
                </div>
                <span class="menu-price">$6.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-carrot menu-icon"></i>
                  <h5>Sweet Potato Chips</h5>
                </div>
                <span class="menu-price">$7.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-drumstick-bite menu-icon"></i>
                  <h5>Cheesy Sesame Prawn Toast (3pc)</h5>
                </div>
                <span class="menu-price">$7</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-fish menu-icon"></i>
                  <h5>Crumbed Prawn Cutlets (5pc)</h5>
                </div>
                <span class="menu-price">$7.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-water menu-icon"></i>
                  <h5>Squid Rings (5pc)</h5>
                </div>
                <span class="menu-price">$7</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-fish menu-icon"></i>
                  <h5>Fish Fillets (3pc)</h5>
                </div>
                <span class="menu-price">$9</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-apple-alt menu-icon"></i>
                  <h5>Mixed Fruit Salad</h5>
                </div>
                <span class="menu-price">$7.3</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-drumstick-bite menu-icon"></i>
                  <h5>Premium Chicken Nuggets (5pc)</h5>
                </div>
                <span class="menu-price">$7.3</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-pizza-slice menu-icon"></i>
                  <h5>Chips</h5>
                </div>
                <span class="menu-price">$7.3</span>
              </div>
              
              <div class="menu-list-item special">
                <div class="menu-item-badge">Special</div>
                <div class="menu-item-name">
                  <i class="fas fa-star menu-icon"></i>
                  <h5>Mixed Fryer Platter</h5>
                </div>
                <span class="menu-price">$28.5</span>
                <p class="menu-item-desc">Chips, 5pc nuggets, 5pc squid rings, 3pc fish fillets</p>
              </div>
            </div>
          </div>
          
          <!-- Japanese Rice Don Tab -->
          <div id="rice" class="tab-pane fade">
            <h4 class="section-title">Japanese Rice Don</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-bowl-rice menu-icon"></i>
                  <h5>Gyudon</h5>
                </div>
                <span class="menu-price">$16.8</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-drumstick-bite menu-icon"></i>
                  <h5>Chicken Karaage Rice Don</h5>
                </div>
                <span class="menu-price">$16.8</span>
              </div>
            </div>
            
            <h4 class="section-title mt-4">Japanese Curry</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-bacon menu-icon"></i>
                  <h5>Katsu Curry Don</h5>
                </div>
                <span class="menu-price">$16.8</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-drumstick-bite menu-icon"></i>
                  <h5>Chicken Katsu Curry</h5>
                </div>
                <span class="menu-price">$17.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-drumstick-bite menu-icon"></i>
                  <h5>Chicken Karaage Curry</h5>
                </div>
                <span class="menu-price">$17.5</span>
              </div>
            </div>
          </div>
          
          <!-- Burgers Tab -->
          <div id="burgers" class="tab-pane fade">
            <h4 class="section-title">Burgers</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-hamburger menu-icon"></i>
                  <h5>Classic Beef Burger</h5>
                </div>
                <span class="menu-price">$18.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-hamburger menu-icon"></i>
                  <h5>Chicken Schnitzel Burger</h5>
                </div>
                <span class="menu-price">$18.5</span>
              </div>
            </div>
          </div>
          
          <div id="drinks" class="tab-pane fade">
            <h4 class="section-title">Coffee & Hot Chocolate</h4>
            <div class="note-box mb-3">
              <p class="mb-0"><i class="fas fa-info-circle me-2"></i> Almond & Soya milk +$0.5 | Medium size +$1.5</p>
            </div>
            
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-coffee menu-icon"></i>
                  <h5>Espresso</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-coffee menu-icon"></i>
                  <h5>Long Black</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-coffee menu-icon"></i>
                  <h5>Mocha</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-coffee menu-icon"></i>
                  <h5>Flat White</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-coffee menu-icon"></i>
                  <h5>Cappuccino</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-coffee menu-icon"></i>
                  <h5>Latte</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-leaf menu-icon"></i>
                  <h5>Matcha Latte</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-mug-hot menu-icon"></i>
                  <h5>Hot Chocolate</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-mug-hot menu-icon"></i>
                  <h5>Taro Latte</h5>
                </div>
                <span class="menu-price">$4.5 <small>(s)</small></span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-baby menu-icon"></i>
                  <h5>Babyccino</h5>
                </div>
                <span class="menu-price">$1.5</span>
              </div>
            </div>
            
            <h4 class="section-title mt-4">Loose Leaf Tea</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-leaf menu-icon"></i>
                  <h5>Jasmine Green Tea</h5>
                </div>
                <span class="menu-price">$5.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-leaf menu-icon"></i>
                  <h5>Honey Citron Tea</h5>
                </div>
                <span class="menu-price">$5.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-leaf menu-icon"></i>
                  <h5>Organic Black Tea</h5>
                </div>
                <span class="menu-price">$5.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-leaf menu-icon"></i>
                  <h5>Earl Grey Tea</h5>
                </div>
                <span class="menu-price">$5.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-leaf menu-icon"></i>
                  <h5>Peach Oolong Tea</h5>
                </div>
                <span class="menu-price">$5.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-lemon menu-icon"></i>
                  <h5>Ginger Lemon Honey Tea</h5>
                </div>
                <span class="menu-price">$5.0</span>
              </div>
            </div>
            
            <h4 class="section-title mt-4">Flavoured Tea</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-lemon menu-icon"></i>
                  <h5>Lemon Black Tea</h5>
                </div>
                <span class="menu-price">$7.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-lemon menu-icon"></i>
                  <h5>Lemon Green Tea</h5>
                </div>
                <span class="menu-price">$7.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-apple-alt menu-icon"></i>
                  <h5>Passion Fruit Lemon Green Tea</h5>
                </div>
                <span class="menu-price">$7.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-apple-alt menu-icon"></i>
                  <h5>Mixed Fruit Green Tea</h5>
                </div>
                <span class="menu-price">$7.0</span>
              </div>
            </div>
            
            <h4 class="section-title mt-4">Yakult & Sparklings</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-glass-martini-alt menu-icon"></i>
                  <h5>Strawberry Yakult</h5>
                </div>
                <span class="menu-price">$8.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-glass-martini-alt menu-icon"></i>
                  <h5>Mango Yakult</h5>
                </div>
                <span class="menu-price">$8.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-glass-cheers menu-icon"></i>
                  <h5>Lemon Yakult Sparkling</h5>
                </div>
                <span class="menu-price">$8.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-glass-cheers menu-icon"></i>
                  <h5>Strawberry Yakult Sparkling</h5>
                </div>
                <span class="menu-price">$8.5</span>
              </div>
            </div>
            
            <h4 class="section-title mt-4">Fresh Drinks</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-tint menu-icon"></i>
                  <h5>Watermelon Juice</h5>
                </div>
                <span class="menu-price">$9.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-tint menu-icon"></i>
                  <h5>Orange Juice</h5>
                </div>
                <span class="menu-price">$9.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-tint menu-icon"></i>
                  <h5>Apple Juice</h5>
                </div>
                <span class="menu-price">$9.0</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-tint menu-icon"></i>
                  <h5>Mixed Juice</h5>
                </div>
                <span class="menu-price">$9.0</span>
              </div>
            </div>
            
            <h4 class="section-title mt-4">Smoothies & Specialty Drinks</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-blender menu-icon"></i>
                  <h5>Watermelon Crush</h5>
                </div>
                <span class="menu-price">$8.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-blender menu-icon"></i>
                  <h5>Mango & Passion Fruit Crush</h5>
                </div>
                <span class="menu-price">$8.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-blender menu-icon"></i>
                  <h5>Mixed Berry Crush</h5>
                </div>
                <span class="menu-price">$8.5</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-blender menu-icon"></i>
                  <h5>Mango Crush</h5>
                </div>
                <span class="menu-price">$8.5</span>
              </div>
            </div>
          </div>
          
          <div id="desserts" class="tab-pane fade">
            <h4 class="section-title">Desserts</h4>
            <div class="menu-list">
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-ice-cream menu-icon"></i>
                  <h5>Belgian Waffle</h5>
                </div>
                <span class="menu-price">$13.8</span>
                <p class="menu-item-desc">2pc waffles + vanilla ice cream + fruits</p>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-apple-alt menu-icon"></i>
                  <h5>Mixed Fruit Salad</h5>
                </div>
                <span class="menu-price">$7.8</span>
              </div>
              
              <div class="menu-list-item">
                <div class="menu-item-name">
                  <i class="fas fa-ice-cream menu-icon"></i>
                  <h5>Vanilla Ice Cream</h5>
                </div>
                <span class="menu-price">$2.5 <small>each</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EatDrink',
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

/* Scrollable tabs */
.scrollable-tabs {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding-bottom: 5px;
}

.scrollable-tabs::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.menu-tabs .nav {
  display: inline-flex;
  padding-bottom: 5px;
}

.menu-tabs .nav-link {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  margin: 0 0.3rem;
  border-radius: 30px;
  color: var(--dark);
  transition: var(--transition);
  white-space: nowrap;
}

.menu-tabs .nav-link.active,
.menu-tabs .nav-link:hover {
  color: white;
  background-color: var(--primary);
  box-shadow: 0 4px 15px rgba(255, 147, 185, 0.2);
}

/* Menu list styling */
.menu-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.menu-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
}

.menu-list-item.special {
  background-color: rgba(255, 147, 185, 0.05);
  border: 1px dashed var(--primary);
  padding: 1rem;
}

.menu-item-badge {
  position: absolute;
  top: -8px;
  right: 10px;
  background: var(--primary);
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
}

.menu-item-name {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-icon {
  color: var(--primary);
  width: 20px;
  text-align: center;
}

.menu-item-name h5 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
}

.menu-price {
  font-weight: 600;
  color: var(--primary);
  white-space: nowrap;
}

.menu-item-desc {
  font-size: 0.8rem;
  margin: 0.5rem 0 0;
  width: 100%;
  color: var(--secondary);
}

.section-title {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--dark);
  position: relative;
  padding-left: 1rem;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--primary);
  border-radius: 2px;
}

.note-box {
  background-color: rgba(255, 147, 185, 0.1);
  border-left: 4px solid var(--primary);
  padding: 0.75rem 1rem;
  border-radius: 0 10px 10px 0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, var(--primary), #8865c1);
  border-radius: 3px;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .page-header {
    min-height: auto;
  }
  
  .container-xxl {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
}
</style>

