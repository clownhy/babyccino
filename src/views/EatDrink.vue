<!-- EatDrink.vue -->
<template>
  <div class="menu-page">
    <!-- Page Header -->
    <div class="container-fluid page-header py-5 mb-5">
      <div class="container py-5 text-center">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Delicious Snacks</h1>
        <p class="lead text-white mb-0 animated slideInUp">Freshly made with love</p>
      </div>
    </div>
    
    <!-- Menu Section -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 class="mb-3">Snacks <span class="text-primary">&</span> Treats</h1>
          <div class="divider mx-auto"></div>
        </div>
        
        <!-- Menu Categories Tabs -->
        <div class="menu-tabs mb-5">
          <ul class="nav nav-pills justify-content-center mb-5">
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
        
        <!-- Menu Items -->
        <div class="tab-content">
          <!-- Kids Meal Tab -->
          <div id="kids" class="tab-pane fade show active">
            <div class="note-box mb-4">
              <p class="mb-0"><i class="fas fa-info-circle me-2"></i> All kids meals come with a small serve of fruits. Extra $2 is charged for switching to sweet potato chips.</p>
              <p class="mb-0 mt-1 fst-italic">所有儿童餐均配有小份水果，薯条换成红薯条将额外收取$2</p>
            </div>
            
            <div class="row g-4">
              <!-- Kids Meal Items -->
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-drumstick-bite"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>4pc Chicken Nuggets & Chips</h5>
                      <span class="text-primary">$11</span>
                    </div>
                    <small class="fst-italic">炸鸡块薯条套餐</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-utensils"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Kids Size Spaghetti Bolognese</h5>
                      <span class="text-primary">$11</span>
                    </div>
                    <p class="small mb-0">Slow cooked beef mince sauce with onion, tomato, parsley etc.</p>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-bowl-rice"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Kids Size Japanese Gyudon</h5>
                      <span class="text-primary">$11.5</span>
                    </div>
                    <p class="small mb-0">Thinly sliced small pieces of beef and onion cooked with Japanese style sweet soya sauce and topped on steam rice.</p>
                    <small class="fst-italic">小份日式牛肉饭</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-bread-slice"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Ham & Cheese Croissant & Fruit & Juice</h5>
                      <span class="text-primary">$12</span>
                    </div>
                    <small class="fst-italic">牛角包套餐</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-fish"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>2pc Fish Fillets & Chips</h5>
                      <span class="text-primary">$12.3</span>
                    </div>
                    <small class="fst-italic">炸鱼柳薯条套餐</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-seedling"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Kids Rice Ball & Karaage Chicken Meal Set</h5>
                      <span class="text-primary">$13.8</span>
                    </div>
                    <p class="small mb-0">Rice ball with Japanese rice seasoning mix (dried seaweed/vegetable and seasoning powder), fresh vegetable, karaage chicken.</p>
                    <small class="fst-italic">儿童饭团配日式鸡块套餐</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-hotdog"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Kids Rice Ball & Sausage Meal Set</h5>
                      <span class="text-primary">$13.8</span>
                    </div>
                    <p class="small mb-0">Rice ball with Japanese rice seasoning mix (dried seaweed/vegetable and seasoning powder), fresh vegetable, beef sausage.</p>
                    <small class="fst-italic">儿童饭团配牛肉香肠套餐</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.8s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-drumstick-bite"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Chicken Schnitzel & Chips</h5>
                      <span class="text-primary">$14.3</span>
                    </div>
                    <small class="fst-italic">炸鸡排薯条套餐</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Snacks Tab -->
          <div id="snacks" class="tab-pane fade">
            <div class="row g-4">
              <!-- Snacks Menu Items -->
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-utensils"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Ham & Cheese Croissant</h5>
                      <span class="text-primary">$6</span>
                    </div>
                    <small class="fst-italic">芝士火腿牛角包</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-fish"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Takoyaki (6pc)</h5>
                      <span class="text-primary">$7.3</span>
                    </div>
                    <small class="fst-italic">日式章鱼丸子6个</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-bacon"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Hash Browns (2pc)</h5>
                      <span class="text-primary">$6.5</span>
                    </div>
                    <small class="fst-italic">炸薯饼</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-carrot"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Sweet Potato Chips</h5>
                      <span class="text-primary">$7.5</span>
                    </div>
                    <small class="fst-italic">炸红薯条</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-drumstick-bite"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Cheesy Sesame Prawn Toast (3pc)</h5>
                      <span class="text-primary">$7</span>
                    </div>
                    <small class="fst-italic">芝士芝麻虾香彬</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-fish"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Crumbed Prawn Cutlets (5pc)</h5>
                      <span class="text-primary">$7.5</span>
                    </div>
                    <small class="fst-italic">炸凤尾虾5个</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-water"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Squid Rings (5pc)</h5>
                      <span class="text-primary">$7</span>
                    </div>
                    <small class="fst-italic">炸鱿鱼圈5个</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.8s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-fish"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Fish Fillets (3pc)</h5>
                      <span class="text-primary">$9</span>
                    </div>
                    <small class="fst-italic">炸鱼柳3个</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.9s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-apple-alt"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mixed Fruit Salad</h5>
                      <span class="text-primary">$7.3</span>
                    </div>
                    <small class="fst-italic">水果碗</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-drumstick-bite"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Premium Chicken Nuggets (5pc)</h5>
                      <span class="text-primary">$7.3</span>
                    </div>
                    <small class="fst-italic">炸鸡块5块</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="1.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-pizza-slice"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Chips</h5>
                      <span class="text-primary">$7.3</span>
                    </div>
                    <small class="fst-italic">炸薯条</small>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Mixed Fryer Platter (Special Item) -->
            <div class="row mt-5">
              <div class="col-12 wow fadeInUp" data-wow-delay="1.2s">
                <div class="menu-item-special">
                  <div class="special-badge">
                    <span>Special</span>
                  </div>
                  <div class="menu-content text-center">
                    <h4 class="text-primary mb-3">Mixed Fryer Platter</h4>
                    <div class="divider mx-auto mb-3"></div>
                    <p class="mb-2">Chips, 5pc nuggets, 5pc squid rings, 3pc fish fillets</p>
                    <small class="fst-italic d-block mb-3">至尊小吃拼盘(炸薯条、5个鸡块、5个鱿鱼圈、3个鱼柳)</small>
                    <span class="price-tag">$28.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Japanese Rice Don Tab -->
          <div id="rice" class="tab-pane fade">
            <div class="row">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Japanese Rice Don <span class="fst-italic">日式盖饭</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-bowl-rice"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Gyudon</h5>
                      <span class="text-primary">$16.8</span>
                    </div>
                    <p class="small mb-0">Thinly sliced small pieces of beef and onion cooked with japanese style sweet soya sauce and topped on steam rice.</p>
                    <small class="fst-italic">日式牛肉饭</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-drumstick-bite"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Chicken Karaage Rice Don</h5>
                      <span class="text-primary">$16.8</span>
                    </div>
                    <p class="small mb-0">Japanese style fried chicken served with garlic sauce & Takoyaki sauce.</p>
                    <small class="fst-italic">日式鸡块饭</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Japanese Curry <span class="fst-italic">日式咖喱</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-bacon"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Katsu Curry Don</h5>
                      <span class="text-primary">$16.8</span>
                    </div>
                    <p class="small mb-0">Japanese style pork cutlets served with curry sauce and steam rice.</p>
                    <small class="fst-italic">日式炸猪排咖喱饭</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-drumstick-bite"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Chicken Katsu Curry</h5>
                      <span class="text-primary">$17.5</span>
                    </div>
                    <p class="small mb-0">Japanese style chicken schnitzel served with curry sauce and steam rice.</p>
                    <small class="fst-italic">日式炸鸡排咖喱饭</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-drumstick-bite"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Chicken Karaage Curry</h5>
                      <span class="text-primary">$17.5</span>
                    </div>
                    <p class="small mb-0">Japanese style fried chicken served with curry sauce and steam rice.</p>
                    <small class="fst-italic">日式炸鸡块咖喱饭</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Burgers Tab -->
          <div id="burgers" class="tab-pane fade">
            <div class="row">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Burgers <span class="fst-italic">汉堡</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-hamburger"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Classic Beef Burger</h5>
                      <span class="text-primary">$18.5</span>
                    </div>
                    <p class="small mb-0">Beef burger paty with cheese, tomato, lettuce and onion, topped with tomato sauce and burger sauce, served with chips.</p>
                    <small class="fst-italic">经典牛肉汉堡配薯条</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-hamburger"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Chicken Schnitzel Burger</h5>
                      <span class="text-primary">$18.5</span>
                    </div>
                    <p class="small mb-0">Japanese style chicken schnitzel, cheese, tomato and lettuce, topped with our special mayonnaise sauce, served with chips.</p>
                    <small class="fst-italic">日式鸡排汉堡配薯条</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Drinks Tab -->
          <div id="drinks" class="tab-pane fade">
            <div class="row">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Coffee & Hot Chocolate <span class="fst-italic">咖啡 & 热巧</span></h3>
                <div class="note-box mb-4">
                  <p class="mb-0"><i class="fas fa-info-circle me-2"></i> Almond & Soya milk +$0.5 | Medium size +$1.5</p>
                  <p class="mb-0 mt-1 fst-italic">杏仁奶 & 豆奶 +$0.5 | 中杯 +$1.5</p>
                </div>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Espresso</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">意式特浓</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Long Black</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">美式咖啡</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mocha</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">摩卡</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Flat White</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">澳白</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Cappuccino</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">卡布奇诺</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Latte</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">拿铁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Matcha Latte</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">抹茶拿铁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-mug-hot"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Hot Chocolate</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">热巧克力</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-mug-hot"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Taro Latte</h5>
                      <span class="text-primary">$4.5 <small>(s)</small></span>
                    </div>
                    <small class="fst-italic">香芋拿铁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.0s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-baby"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Babyccino</h5>
                      <span class="text-primary">$1.5</span>
                    </div>
                    <small class="fst-italic">儿童奶泡</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Loose Leaf Tea <span class="fst-italic">茶</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Jasmine Green Tea</h5>
                      <span class="text-primary">$5.0</span>
                    </div>
                    <small class="fst-italic">茉莉绿茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Honey Citron Tea</h5>
                      <span class="text-primary">$5.0</span>
                    </div>
                    <small class="fst-italic">蜂蜜柚子茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Organic Black Tea</h5>
                      <span class="text-primary">$5.0</span>
                    </div>
                    <small class="fst-italic">有机红茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Earl Grey Tea</h5>
                      <span class="text-primary">$5.0</span>
                    </div>
                    <small class="fst-italic">伯爵茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Peach Oolong Tea</h5>
                      <span class="text-primary">$5.0</span>
                    </div>
                    <small class="fst-italic">蜜桃乌龙茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-lemon"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Ginger Lemon Honey Tea</h5>
                      <span class="text-primary">$5.0</span>
                    </div>
                    <small class="fst-italic">柠檬蜂蜜姜茶</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Flavoured Tea <span class="fst-italic">果味茶</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-lemon"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Lemon Black Tea</h5>
                      <span class="text-primary">$7.0</span>
                    </div>
                    <small class="fst-italic">柠檬红茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-lemon"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Lemon Green Tea</h5>
                      <span class="text-primary">$7.0</span>
                    </div>
                    <small class="fst-italic">柠檬绿茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-apple-alt"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Passion Fruit Lemon Green Tea</h5>
                      <span class="text-primary">$7.0</span>
                    </div>
                    <small class="fst-italic">百香果柠檬绿茶</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-apple-alt"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mixed Fruit Green Tea</h5>
                      <span class="text-primary">$7.0</span>
                    </div>
                    <small class="fst-italic">满杯水果茶</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Yakult & Sparklings <span class="fst-italic">养乐多 & 气泡水</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-glass-martini-alt"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Strawberry Yakult</h5>
                      <span class="text-primary">$8.0</span>
                    </div>
                    <small class="fst-italic">草莓养乐多</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-glass-martini-alt"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mango Yakult</h5>
                      <span class="text-primary">$8.0</span>
                    </div>
                    <small class="fst-italic">芒果养乐多</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-glass-cheers"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Lemon Yakult Sparkling</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">柠檬养乐多气泡水</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-glass-cheers"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Strawberry Yakult Sparkling</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">草莓养乐多气泡水</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Smoothies <span class="fst-italic">沙冰</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-blender"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Watermelon Crush</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">西瓜沙冰</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-blender"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mango & Passion Fruit Crush</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">芒果百香果沙冰</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-blender"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mixed Berry Crush</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">莓子沙冰</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-blender"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mango Crush</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">芒果沙冰</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Seasonal Fresh Juice <span class="fst-italic">鲜榨果汁</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-tint"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Watermelon Juice</h5>
                      <span class="text-primary">$9.0</span>
                    </div>
                    <small class="fst-italic">西瓜汁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-tint"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Orange Juice</h5>
                      <span class="text-primary">$9.0</span>
                    </div>
                    <small class="fst-italic">橙汁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-tint"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Apple Juice</h5>
                      <span class="text-primary">$9.0</span>
                    </div>
                    <small class="fst-italic">苹果汁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-tint"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mixed Juice</h5>
                      <span class="text-primary">$9.0</span>
                    </div>
                    <small class="fst-italic">混合果汁</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Iced Coffee & Chocolate <span class="fst-italic">冰咖啡 & 巧克力</span></h3>
              </div>
            </div>

            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Iced Long Black</h5>
                      <span class="text-primary">$6.6</span>
                    </div>
                    <small class="fst-italic">冰美式</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Iced Latte</h5>
                      <span class="text-primary">$7.8</span>
                    </div>
                    <small class="fst-italic">冰拿铁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-coffee"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Iced Mocha</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">冰摩卡</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Iced Matcha Latte</h5>
                      <span class="text-primary">$7.5</span>
                    </div>
                    <small class="fst-italic">冰抹茶拿铁</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-cube"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Iced Chocolate</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">冰巧克力</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-glass-whiskey"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Chocolate Crush</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">巧克力星冰乐</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-glass-whiskey"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Matcha Crush</h5>
                      <span class="text-primary">$8.5</span>
                    </div>
                    <small class="fst-italic">抹茶星冰乐</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="desserts" class="tab-pane fade">
            <div class="row">
              <div class="col-12">
                <h3 class="menu-category-title mb-4">Desserts <span class="fst-italic">甜品</span></h3>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-ice-cream"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Belgian Waffle</h5>
                      <span class="text-primary">$13.8</span>
                    </div>
                    <p class="small mb-0">2pc waffles + vanilla ice cream + fruits</p>
                    <small class="fst-italic">比利时华夫饼配冰淇淋和水果</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-apple-alt"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Mixed Fruit Salad</h5>
                      <span class="text-primary">$7.8</span>
                    </div>
                    <small class="fst-italic">水果沙拉</small>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="menu-item">
                  <div class="menu-item-icon">
                    <i class="fas fa-ice-cream"></i>
                  </div>
                  <div class="menu-content">
                    <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                      <h5>Vanilla Ice Cream</h5>
                      <span class="text-primary">$2.5 <small>each</small></span>
                    </div>
                    <small class="fst-italic">香草冰淇淋</small>
                  </div>
                </div>
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

.menu-tabs .nav-link {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  margin: 0 0.5rem;
  border-radius: 30px;
  color: var(--dark);
  transition: var(--transition);
}

.menu-tabs .nav-link.active,
.menu-tabs .nav-link:hover {
  color: white;
  background-color: var(--primary);
  box-shadow: 0 4px 15px rgba(255, 147, 185, 0.2);
}

.menu-item {
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
}

.menu-item-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 147, 185, 0.1);
  color: var(--primary);
  border-radius: 50%;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 1.25rem;
  transition: var(--transition);
}

.menu-item:hover .menu-item-icon {
  background-color: var(--primary);
  color: white;
  transform: scale(1.1);
}

.menu-content {
  flex: 1;
}

.menu-item-special {
  background-color: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 0.5rem 2rem rgba(255, 147, 185, 0.15);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  border: 2px dashed var(--primary);
}

.menu-item-special:hover {
  transform: translateY(-8px);
  box-shadow: 0 1rem 3rem rgba(255, 147, 185, 0.2);
}

.special-badge {
  position: absolute;
  top: 1.5rem;
  right: -3rem;
  background: var(--primary);
  color: white;
  padding: 0.5rem 4rem;
  transform: rotate(45deg);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.price-tag {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  display: inline-block;
  padding: 0.5rem 2rem;
  border-radius: 50px;
  background-color: rgba(255, 147, 185, 0.1);
}

.divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, var(--primary), #8865c1);
  border-radius: 3px;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .menu-tabs .nav-link {
    font-size: 1rem;
    padding: 0.4rem 1rem;
    margin: 0 0.2rem;
  }
  
  .menu-item {
    padding: 1rem;
  }
  
  .menu-item-special {
    padding: 1.5rem;
  }
  
  .special-badge {
    top: 0.5rem;
    right: -3.5rem;
    padding: 0.25rem 3.5rem;
    font-size: 0.7rem;
  }
  
  .price-tag {
    font-size: 1.5rem;
    padding: 0.4rem 1.5rem;
  }
}

.note-box {
  background-color: rgba(255, 147, 185, 0.1);
  border-left: 4px solid var(--primary);
  padding: 1rem 1.5rem;
  border-radius: 0 10px 10px 0;
  margin-bottom: 2rem;
}

.note-box p {
  color: var(--dark);
}

.menu-category-title {
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--dark);
  font-family: 'Bubblegum Sans', cursive;
  font-size: 1.8rem;
}

.menu-category-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--primary), transparent);
  border-radius: 3px;
}
</style>

