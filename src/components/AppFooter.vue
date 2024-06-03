<template>
    <!-- Footer Start -->
    <div class="container-fluid bg-custom text-white-50 footer pt-5 mt-5"> <!-- 应用新的类 -->
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-white mb-4">Get In Touch</h3>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>95 Forest Rd, Hurstville NSW 2220</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-white mb-4">Quick Links</h3>
                    <a class="btn btn-link text-white-50" href="#">About Us</a>
                    <a class="btn btn-link text-white-50" href="#">Contact Us</a>
                    <a class="btn btn-link text-white-50" href="#">Our Services</a>
                    <a class="btn btn-link text-white-50" href="#">Privacy Policy</a>
                    <a class="btn btn-link text-white-50" href="#">Terms & Condition</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-white mb-4">Photo Gallery</h3>
                    <div class="row g-2 pt-2">
                        <div class="col-4">
                            <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-1.jpg" alt="Class 1">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-2.jpg" alt="Class 2">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-3.jpg" alt="Class 3">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-4.jpg" alt="Class 4">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-5.jpg" alt="Class 5">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-6.jpg" alt="Class 6">
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center d-flex align-items-center flex-column">
                    <h3 class="text-white mb-4">Follow Us on WeChat</h3>
                    <div class="d-flex justify-content-center">
                        <img class="img-fluid rounded bg-light p-1" src="@/assets/images/code.png" alt="WeChat QR Code"
                            style="max-width: 200px; margin-bottom: 10px;">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Babyccino</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        Designed by <a class="border-bottom" href="">Multinode</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style scoped>
.bg-custom {
    background-color: hsla(329, 90%, 50%, 0.733);
    /* 更改为你想要的颜色 */
}

.position-relative {
    position: relative;
}

.text-center h3 {
    display: inline;
    white-space: nowrap;
}

.text-center p {
    margin-top: 10px;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}

.d-flex.justify-content-center img {
    max-width: 150px;
    height: auto;
    margin-bottom: 10px;
}

.col-lg-3.col-md-6.text-center.d-flex.align-items-center.flex-column {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
