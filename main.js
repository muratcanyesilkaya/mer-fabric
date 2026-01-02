/* Base styles */
:root {
    --color-orange-50: #FFF7ED;
    --color-orange-100: #FFEDD5;
    --color-orange-200: #FED7AA;
    --color-orange-300: #FDBA74;
    --color-orange-400: #FB923C;
    --color-orange-500: #F97316;
    --color-orange-600: #EA580C;
    --color-orange-700: #C2410C;
    --color-orange-800: #9A3412;
    --color-orange-900: #7C2D12;

    --color-yellow-50: #FEFCE8;
    --color-yellow-100: #FEF9C3;
    --color-yellow-200: #FEF08A;
    --color-yellow-300: #FDE047;
    --color-yellow-400: #FACC15;
    --color-yellow-500: #EAB308;
    --color-yellow-600: #CA8A04;
    --color-yellow-700: #A16207;
    --color-yellow-800: #854D0E;
    --color-yellow-900: #713F12;

    --color-gray-50: #F9FAFB;
    --color-gray-100: #F3F4F6;
    --color-gray-200: #E5E7EB;
    --color-gray-300: #D1D5DB;
    --color-gray-400: #9CA3AF;
    --color-gray-500: #6B7280;
    --color-gray-600: #4B5563;
    --color-gray-700: #374151;
    --color-gray-800: #1F2937;
    --color-gray-900: #111827;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    color: #1F2937;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Playfair Display', serif;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
}

/*teamss*/
.teams-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
    animation: fadeInUp 1s ease-out;
}

.section-title {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 2px;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
}

.teams-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    animation: fadeIn 1.5s ease-out;
}

.team-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    transform: translateY(20px);
    opacity: 0;
    animation: slideInUp 0.8s ease-out forwards;
}

.team-card:nth-child(1) {
    animation-delay: 0.1s;
}

.team-card:nth-child(2) {
    animation-delay: 0.2s;
}

.team-card:nth-child(3) {
    animation-delay: 0.3s;
}

.team-card:nth-child(4) {
    animation-delay: 0.4s;
}

.team-card:nth-child(5) {
    animation-delay: 0.5s;
}

.team-card:nth-child(6) {
    animation-delay: 0.6s;
}

.team-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
}

.team-card:hover .card-image img {
    transform: scale(1.1);
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.4s ease;
}

.team-card:hover .card-overlay {
    opacity: 1;
}

.social-links {
    display: flex;
    gap: 15px;
    transform: translateY(20px);
    transition: all 0.4s ease;
}

.team-card:hover .social-links {
    transform: translateY(0);
}

.social-link {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    background: white;
    color: #667eea;
    transform: scale(1.1);
}

.card-content {
    padding: 30px;
    text-align: center;
}

.member-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 8px;
}

.member-position {
    font-size: 1.1rem;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.member-description {
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideInUp {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .teams-section {
        padding: 60px 0;
    }

    .section-title {
        font-size: 2.2rem;
    }

    .section-subtitle {
        font-size: 1rem;
    }

    .teams-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .team-card {
        margin: 0 10px;
    }

    .card-image {
        height: 250px;
    }

    .card-content {
        padding: 25px 20px;
    }

    .member-name {
        font-size: 1.3rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .teams-grid {
        grid-template-columns: 1fr;
    }

    .team-card {
        border-radius: 15px;
    }

    .card-content {
        padding: 20px 15px;
    }
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: transparent;
    transition: all 0.3s ease;
    padding: 1rem 0;
}

.header.scrolled {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.9rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logo-text-yellow {
    color: var(--color-yellow-500);
}

.logo-text-orange {
    color: var(--color-orange-500);
}

.logo-registered {
    font-size: 0.75rem;
    margin-left: 0.25rem;
    color: #666;
}

.nav-desktop {
    display: none;
}

@media (min-width: 768px) {
    .nav-desktop {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
}

.nav-link {
    color: #4B5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--color-orange-500);
}

.language-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #4B5563;
}

.language-toggle:hover {
    color: var(--color-orange-500);
}

.nav-mobile {
    display: flex;
    align-items: center;
    gap: 1rem;
}

@media (min-width: 768px) {
    .nav-mobile {
        display: none;
    }
}

.menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
    color: #4B5563;
}

.mobile-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
    display: block;
}

.mobile-menu .nav-link {
    display: block;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
}

/* Certificates Section */
.certificates {
    padding: 5rem 0;
    background-color: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.certificates h2 {
    text-align: center;
    font-size: 2.25rem;
    color: var(--color-orange-600);
    margin-bottom: 1rem;
}

.section-subtitle {
    text-align: center;
    color: var(--color-gray-600);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.certificates-slider {
    position: relative;
    max-width: 600px;
    margin: 3rem auto;
    overflow: hidden;
}

.certificates-track {
    display: flex;
    transition: transform 0.5s ease;
}

.certificate-card {
    flex: 0 0 100%;
    background: white;
    border-radius: 0.75rem;
    padding: 2.5rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
}

.certificate-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.15);
    border-color: var(--color-orange-200);
}

.certificate-icon {
    width: 5rem;
    height: 5rem;
    background: linear-gradient(135deg, var(--color-orange-400), var(--color-yellow-400));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 2rem;
}

.certificate-card h3 {
    font-size: 1.5rem;
    color: var(--color-gray-800);
    margin-bottom: 1rem;
}

.certificate-card p {
    color: var(--color-gray-600);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.slider-nav {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.5rem;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-orange-200);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.slider-dot.active {
    background-color: var(--color-orange-600);
}

.slider-arrows {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    gap: 1rem;
}

.arrow {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--color-orange-400);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.5rem;

}

.arrow:hover {
    background: var(--color-orange-600);
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .certificate-card {
        padding: 1.5rem;
    }

    .certificate-icon {
        width: 4rem;
        height: 4rem;
        font-size: 1.5rem;
    }
}



/* Hero Section */
.hero {
    min-height: 100vh;
    background-image: url('https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg?auto=compress&cs=tinysrgb&w=1600');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    padding: 2rem 0;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.hero-content {
    position: relative;
    z-index: 1;
    color: white;
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
}

.hero h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
    .hero h1 {
        font-size: 3.5rem;
    }
}

.hero p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
}

.scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: var(--color-orange-500);
    color: white;
}

.btn-primary:hover {
    background-color: var(--color-orange-600);
    transform: translateY(-2px);
}

.btn-outline {
    border: 2px solid var(--color-yellow-400);
    color: var(--color-yellow-400);
}

.btn-outline:hover {
    background-color: var(--color-yellow-400);
    color: #1F2937;
    transform: translateY(-2px);
}

.btn-white {
    background-color: white;
    color: var(--color-orange-600);
}

.btn-white:hover {
    background-color: var(--color-orange-50);
    transform: translateY(-2px);
}

/* Products Section */
.products {
    padding: 5rem 0;
    background-color: var(--color-gray-50);
}

.section-title {
    text-align: center;
    font-size: 2.25rem;
    color: var(--color-orange-600);
    margin-bottom: 1rem;
}

.section-subtitle {
    text-align: center;
    color: #6B7280;
    max-width: 36rem;
    margin: 0 auto 3rem;
}

.category-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
}

.category-btn {
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    border: none;
    background: white;
    color: #4B5563;
    cursor: pointer;
    transition: all 0.2s ease;
}

.category-btn:hover {
    background-color: #F3F4F6;
}

.category-btn.active {
    background-color: var(--color-orange-500);
    color: white;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.product-card {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.product-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.1);
}

.product-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
    opacity: 1;
}

.product-action {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    background: white;
    color: #1F2937;
    display: flex;
    align-items: center;

    justify-content: center;
    transition: all 0.2s ease;
}

.product-action:hover {
    background-color: var(--color-orange-500);
    color: white;
}

.product-info {
    padding: 1rem;
}

.product-category {
    font-size: 0.875rem;
    color: #6B7280;
}

.product-name {
    font-weight: 500;
    margin: 0.5rem 0;
}

.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.product-price {
    font-weight: 600;
    color: var(--color-orange-600);
}

.product-colors {
    display: flex;
    gap: 0.25rem;
}

.color-option {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.color-option:hover {
    transform: scale(1.2);
}

.color-option.selected {
    outline: 2px solid var(--color-orange-500);
    outline-offset: 2px;
}

/* Modal kaplama */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
}

/* İçerideki resim */
.modal-content {
  margin: auto;
  display: block;
  max-width: 80%;
  max-height: 80%;
  border-radius: 0.5rem;
}

/* Kapatma butonu */
.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: white;
  font-size: 40px;
  cursor: pointer;
}


/* About Section */
.about {
    padding: 5rem 0;
    background-color: white;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .about-grid {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }
}

.about-image {
    position: relative;
}

.link {
  color: orangered;              /* Normalde siyah */
  text-decoration: none;     /* Alt çizgiyi kaldırır */
  font-size: 18px;           /* Yazı boyutu */
  font-weight: bold;}

.about-image img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.about-content h2 {
    margin-bottom: 1.5rem;
}

.about-content p {
    color: #6B7280;
    margin-bottom: 1.5rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 2rem 0;
}

.stat-card {
    background-color: #F9FAFB;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
}

.stat-card i {
    margin-bottom: 0.5rem;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-orange-600);
}

.stat-label {
    font-size: 0.875rem;
    color: #6B7280;
}

/* Services Section */
.services {
    padding: 5rem 0;
    background-color: var(--color-orange-50);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.service-card i {
    margin-bottom: 1rem;
}

.service-card h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.service-card p {
    color: #6B7280;
}

.cta-box {
    background: linear-gradient(to right, var(--color-orange-500), var(--color-yellow-500));
    padding: 3rem 2rem;
    border-radius: 0.5rem;
    text-align: center;
    color: white;
}

.cta-box h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.cta-box p {
    margin-bottom: 2rem;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
}

/* News Section */
.news {
    padding: 5rem 0;
    background-color: var(--color-gray-800);
    color: white;
}

.news h2 {
    color: var(--color-yellow-400);
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 1rem;
}

.news .section-subtitle {
    color: var(--color-gray-300);
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.news-card {
    background-color: var(--color-gray-700);
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
    height: 485px;
}

.news-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.news-image {
    height: 200px;
    overflow: hidden;
}

.news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.news-card:hover .news-image img {
    transform: scale(1.1);
}

.news-content {
    padding: 1.5rem;
}

.news-date {
    color: var(--color-orange-400);
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.news-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: white;
}

.news-excerpt {
    color: var(--color-gray-300);
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;

}

.news-link {
    color: var(--color-yellow-400);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s ease;
}

.news-link:hover {
    color: var(--color-yellow-300);
}

/* Testimonials Section */
.testimonials {
    padding: 5rem 0;
    background-color: #1F2937;
    color: white;
}

.testimonials h2 {
    color: var(--color-yellow-400);
}

.testimonials .section-subtitle {
    color: #9CA3AF;
}

.testimonials-slider {
    max-width: 48rem;
    margin: 0 auto;
}

.testimonial {
    background-color: #374151;
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    display: none;
}

.testimonial.active {
    display: block;
}

.stars {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 1.5rem;
    color: var(--color-yellow-400);
}

.testimonial blockquote {
    font-size: 1.25rem;
    font-style: italic;
    margin-bottom: 2rem;
}

.testimonial-author {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.author-image {
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    margin-bottom: 1rem;
}

.author-name {
    color: var(--color-orange-400);
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.author-company {
    color: #9CA3AF;
}

.testimonial-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
}

.control-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 9999px;
    transition: background-color 0.2s ease;
}

.control-btn:hover {
    background-color: #374151;
}

.testimonial-indicators {
    display: flex;
    gap: 0.5rem;
}

.indicator {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 9999px;
    background-color: #4B5563;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.indicator.active {
    background-color: var(--color-orange-500);
}

/* Contact Section */
.contact {
    padding: 5rem 0;
    background-color: white;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .contact-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4B5563;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #D1D5DB;
    border-radius: 0.375rem;
    transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-orange-500);
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-item {
    display: flex;
    gap: 1rem;
}

.info-item i {
    color: var(--color-orange-500);
}

.info-item h3 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
}

.info-item a {
    color: #4B5563;
    text-decoration: none;
    transition: color 0.2s ease;
}

.info-item a:hover {
    color: var(--color-orange-500);
}

.map {
    height: 300px;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 2rem 0;
}

.working-hours {
    background-color: var(--color-yellow-50);
    padding: 1.5rem;
    border-radius: 0.5rem;
    border-left: 4px solid var(--color-orange-500);
}

.working-hours h3 {
    margin-bottom: 0.5rem;
}

/* Footer */
.footer {
    background-color: #1F2937;
    color: white;
    padding: 4rem 0 2rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-info p {
    color: #9CA3AF;
    margin: 1rem 0;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: #9CA3AF;
    transition: color 0.2s ease;
}

.social-links a:hover {
    color: white;
}

.footer h3 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
}

.footer ul {
    list-style: none;
}

.footer ul li {
    margin-bottom: 0.5rem;
}

.footer ul a {
    color: #9CA3AF;
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer ul a:hover {
    color: white;
}

.footer-contact .contact-item {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: #afaa9c;
}

.footer-bottom {
    border-top: 1px solid #374151;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}

@media (min-width: 768px) {
    .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
}

.footer-bottom p {
    color: #9CA3AF;
}

.footer-bottom .footer-links {
    display: flex;
    gap: 2rem;
}

.footer-bottom .footer-links a {
    color: #9CA3AF;
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-bottom .footer-links a:hover {
    color: white;
}

/* Scroll to Top Button */
.scroll-to-top {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    background-color: var(--color-orange-500);
    color: white;
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-to-top:hover {
    background-color: var(--color-orange-600);
    transform: translateY(-2px);
}

/* Dropdown kapsayıcısını hizalamak için relative konumlandırma */
.language-dropdown-container {
    position: relative;
    display: inline-block;
}

/* Dil değiştirme butonu */
.language-toggle {
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
}

/* Dropdown menüsü */
.language-dropdown-menu {
    display: none; /* Menüyü varsayılan olarak gizle */
    position: absolute;
    top: 100%; /* Butonun hemen altına gelsin */
    left: 0;
    z-index: 1000;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    min-width: 120px;
    padding: 8px 0;
}

/* Menü açıkken göster */
.language-dropdown-container.open .language-dropdown-menu {
    display: block;
}

/* Dropdown içindeki dil seçenekleri */
.lang-option {
    display: block;
    padding: 8px 12px;
    text-decoration: none;
    color: #333;
}

.lang-option:hover {
    background-color: #f0f0f0;
}