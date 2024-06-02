<template>
    <!-- Kids Cafe Menu Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="bg-light rounded overflow-hidden">
                <div class="row g-0">
                    <div class="col-lg-6 col-md-12 d-flex align-items-stretch">
                        <div class="position-relative w-100">
                            <img class="img-fluid w-100 h-100" src="@/assets/images/menu.png" alt="Kids Cafe Menu"
                                style="object-fit: cover;" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 d-flex align-items-center">
                        <div class="p-5">
                            <h1 class="mb-4">Kids Cafe Menu</h1>
                            <p class="mb-4">
                                Welcome to our Kids Cafe, where every dish is handcrafted with love and care. Our menu
                                features a variety of delicious and healthy options that are perfect for kids and
                                adults alike.
                            </p>
                            <ul class="mb-4">
                                <li>Freshly made sandwiches with whole grain bread</li>
                                <li>Organic fruit smoothies</li>
                                <li>Homemade soups and salads</li>
                                <li>Yummy pasta dishes</li>
                                <li>Delightful desserts that are low in sugar</li>
                            </ul>
                            <p class="mb-4">
                                Come and experience the joy of dining in a family-friendly atmosphere where every meal
                                is a special occasion. We can't wait to serve you and your little ones!
                            </p>
                            <a class="btn btn-primary py-3 px-5" href="/menu">Discover More<i
                                    class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Kids Cafe Menu End -->
</template>

<script>
export default {
    name: 'KidsCafeMenu'
};
</script>

<style scoped>
.position-relative {
    position: relative;
}

.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .p-5 {
        padding: 1rem !important;
    }
}
</style>
