<template>
    <footer class="footer">
        <!-- 波浪效果 -->
        <div class="footer-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="var(--primary)" fill-opacity="0.15"
                    d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
                <path fill="var(--primary)" fill-opacity="0.3"
                    d="M0,96L80,101.3C160,107,320,117,480,128C640,139,800,149,960,138.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg>
        </div>

        <div class="container-fluid footer-content py-5">
            <div class="container py-4">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="footer-title mb-4">Get In Touch</h3>
                        <div class="contact-info">
                            <p class="footer-item"><i class="fa fa-map-marker-alt me-3"></i>95 Forest Rd, Hurstville NSW 2220</p>
                            <p class="footer-item"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="footer-item"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                        <div class="social-links mt-4">
                            <a class="social-icon" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="social-icon" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="social-icon" href="#"><i class="fab fa-instagram"></i></a>
                            <a class="social-icon" href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="footer-title mb-4">Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="footer-title mb-4">Photo Gallery</h3>
                        <div class="gallery">
                            <a href="#" class="gallery-item">
                                <img src="@/assets/images/play1.jpg" alt="Gallery 1">
                            </a>
                            <a href="#" class="gallery-item">
                                <img src="@/assets/images/play2.jpg" alt="Gallery 2">
                            </a>
                            <a href="#" class="gallery-item">
                                <img src="@/assets/images/play3.jpg" alt="Gallery 3">
                            </a>
                            <a href="#" class="gallery-item">
                                <img src="@/assets/images/play1.jpg" alt="Gallery 4">
                            </a>
                            <a href="#" class="gallery-item">
                                <img src="@/assets/images/play2.jpg" alt="Gallery 5">
                            </a>
                            <a href="#" class="gallery-item">
                                <img src="@/assets/images/play3.jpg" alt="Gallery 6">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="footer-title mb-4">Follow Us on WeChat</h3>
                        <div class="wechat-container">
                            <img src="@/assets/images/code.png" alt="WeChat QR Code" class="qr-code">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-3 mb-md-0">
                        &copy; <a href="#">Babyccino</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-md-end">
                        Designed by <a href="">Multinode</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style scoped>
.footer {
    position: relative;
    color: var(--light);
    margin-top: 5rem;
}

.footer-wave {
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.footer-content {
    background: linear-gradient(135deg, var(--dark) 0%, #6665A5 100%);
    position: relative;
    z-index: 1;
}

.footer-title {
    position: relative;
    font-family: 'Bubblegum Sans', cursive;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
}

.footer-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 50px;
    background: var(--primary);
    border-radius: 3px;
}

.footer-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.8);
    transition: var(--transition);
}

.footer-item:hover {
    color: white;
    transform: translateX(5px);
}

.footer-item i {
    color: var(--primary);
    margin-top: 0.25rem;
}

.social-links {
    display: flex;
    gap: 10px;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: var(--transition);
}

.social-icon:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: var(--transition);
    position: relative;
    padding-left: 15px;
}

.footer-links a:before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--primary);
    transition: var(--transition);
}

.footer-links a:hover {
    color: white;
    padding-left: 20px;
}

.footer-links a:hover:before {
    left: 5px;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.gallery-item img {
    width: 100%;
    height: 70px;
    object-fit: cover;
    transition: var(--transition);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.wechat-container {
    display: flex;
    justify-content: center;
}

.qr-code {
    max-width: 80%;
    border-radius: 8px;
    background: white;
    padding: 10px;
    transition: var(--transition);
}

.qr-code:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.footer-bottom {
    background: rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    color: rgba(255, 255, 255, 0.8);
}

.footer-bottom a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
}

.footer-bottom a:hover {
    color: white;
}

@media (max-width: 767px) {
    .footer-wave {
        top: -40px;
    }
    
    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-bottom [class*="col-"] {
        text-align: center !important;
    }
}
</style>
