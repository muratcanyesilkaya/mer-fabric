// Products data
const products = [
    {
        id: 1,
        name: 'Cotton Fabric',
        category: 'cotton',
        image: 'foto/baskılı pamuk kumaş.jpg',
        
        colors: ['#FFFFFF', '#F8F8F8', '#E0E0E0'],
        inStock: true
    },
    {
        id: 2,
        name: 'Lyocell Fabric',
        category: 'Lyocell',
        image: 'foto/Lyocell.jpg',
       
        colors: ['#F5A623', '#D0021B', '#4A90E2'],
        inStock: true
    },
    {
        id: 3,
        name: 'Natural Linen Blend',
        category: 'linen',
        image: 'foto/image.jpg',
        
        colors: ['#F5DEB3', '#D2B48C', '#8B4513'],
        inStock: true
    },
    {
        id: 4,
        name: 'Polyester Blend Fabric',
        category: 'polyester',
        image: 'foto/cotton-polyester.jpg',
        
        colors: ['#000000', '#333333', '#666666'],
        inStock: false
    },
    {
        id: 5,
        name: 'Linen Fabric',
        category: 'linen',
        image: 'foto/Linen.jpg',
        
        colors: ['#808080', '#A52A2A', '#000080'],
        inStock: true
    },
    {
        id: 6,
        name: 'Organic Cotton Jersey',
        category: 'cotton',
        image: 'foto/Ipek-Desenli-Saten-Kumas-2.jpg',
        
        colors: ['#FFFFFF', '#FFC0CB', '#ADD8E6'],
        inStock: true
    } ,
];

// Testimonials data
// const testimonials = [
//     {
//         name: 'Mehmet Yılmaz',
//         company: 'Fashion House Istanbul',
//         image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         quote: 'TexTile ile 5 yılı aşkın süredir çalışıyoruz. Kumaşlarının kalitesi ve hizmet anlayışları her zaman beklentilerimizin üzerinde. Sürekli yenilenen koleksiyonları ve trend renkleriyle bize ilham kaynağı oluyorlar.'
//     },
//     {
//         name: 'Sophie Miller',
//         company: 'EuroStyle Clothing',
//         image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         quote: 'TexTile\'ın sürdürülebilir ve çevre dostu kumaşları, markamızın etik değerleriyle mükemmel bir şekilde örtüşüyor. Zamanında teslimatları ve kalite standartları ile her zaman güvenilir bir iş ortağı olmuşlardır.'
//     },
//     {
//         name: 'Ali Demir',
//         company: 'DecoHome Textiles',
//         image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         quote: 'Ev tekstili koleksiyonumuz için gereken tüm kumaşları TexTile\'dan temin ediyoruz. Geniş renk ve desen yelpazesi, kaliteli ürünleri ve profesyonel yaklaşımları ile sektörün en iyileri arasındalar.'
//     }
// ];

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Products grid
const productsGrid = document.getElementById('productsGrid');
const categoryButtons = document.querySelectorAll('.category-btn');

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="product-action">
                        <i data-lucide="eye"></i>
                    </button>
                </div>
                
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
 
            </div>
        </div>
    `;
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="product-action" onclick="openImageModal('${product.image}')">
                        <i data-lucide="eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
            </div>
        </div>
    `;
}

function openImageModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Kapatma
document.querySelector(".close").onclick = function() {
    document.getElementById("imageModal").style.display = "none";
};

// Modal boş alana tıklanınca kapansın
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//teams
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions
    initScrollAnimations();
    initCardInteractions();
    // initSocialLinks();
    initParallaxEffect();
});

// Scroll animations for team cards
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        observer.observe(card);
    });
}

// Enhanced card interactions
function initCardInteractions() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        const cardImage = card.querySelector('.card-image img');
        const cardOverlay = card.querySelector('.card-overlay');
        const socialLinks = card.querySelector('.social-links');
        
        card.addEventListener('mouseenter', function() {
            // Add glowing effect
            this.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.3)';
            
            // Animate social links individually
            const links = socialLinks.querySelectorAll('.social-link');
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'scale(1) translateY(0)';
                    link.style.opacity = '1';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            
            const links = socialLinks.querySelectorAll('.social-link');
            links.forEach(link => {
                link.style.transform = 'scale(0.8) translateY(10px)';
                link.style.opacity = '0';
            });
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
}

// Social links functionality
// function initSocialLinks() {
//     const socialLinks = document.querySelectorAll('.social-link');
    
//     socialLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             e.stopPropagation();
            
//             // Add click animation
//             this.style.transform = 'scale(0.95)';
//             setTimeout(() => {
//                 this.style.transform = 'scale(1.1)';
//             }, 100);
            
//             // Get the icon type and handle accordingly
//             // const icon = this.querySelector('i');
//             // if (icon.classList.contains('fa-linkedin')) {
//                 // handleLinkedInClick(this);
//             // } else if (icon.classList.contains('fa-envelope')) {
//                 // handleEmailClick(this);
//             // }
//         });
        
//         // Initialize social links with animation delay
//         link.style.transform = 'scale(0.8) translateY(10px)';
//         link.style.opacity = '0';
//         link.style.transition = 'all 0.3s ease';
//     });
// }

// Handle LinkedIn click
function handleLinkedInClick(element) {
    const memberName = element.closest('.team-card').querySelector('.member-name').textContent;
    console.log(`LinkedIn profili açılıyor: ${memberName}`);
    
    // Show notification
    showNotification(`${memberName} LinkedIn profiline yönlendiriliyorsunuz...`, 'info');
    
    // Here you would typically open the actual LinkedIn profile
    // window.open('https://linkedin.com/in/profile-url', '_blank');
}

// Handle email click
function handleEmailClick(element) {
    const memberName = element.closest('.team-card').querySelector('.member-name').textContent;
    const position = element.closest('.team-card').querySelector('.member-position').textContent;
    
    const email = generateEmail(memberName);
    const subject = `${position} ile İletişim`;
    const body = `Merhaba ${memberName},\n\nSizinle iletişime geçmek istiyorum.\n\nİyi çalışmalar,`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    showNotification(`${memberName} ile e-posta başlatılıyor...`, 'success');
}

// Generate email from name (example function)
function generateEmail(name) {
    return name.toLowerCase()
        .replace('ç', 'c')
        .replace('ğ', 'g')
        .replace('ı', 'i')
        .replace('ö', 'o')
        .replace('ş', 's')
        .replace('ü', 'u')
        .replace(' ', '.')
        + '@tekstilfirması.com';
}

// Parallax effect for section background
function initParallaxEffect() {
    const teamsSection = document.querySelector('.teams-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (teamsSection) {
            teamsSection.style.backgroundPositionY = -(scrolled * parallaxSpeed) + 'px';
        }
    });
}

// Create ripple effect
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(102, 126, 234, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple-animation 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Notification styles
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    notification.style.zIndex = '10000';
    notification.style.fontSize = '14px';
    notification.style.fontWeight = '500';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('loaded');
        }, index * 100);
    });
});
//teams
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    productsGrid.innerHTML = filteredProducts.map(createProductCard).join('');
    lucide.createIcons();
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProducts(button.dataset.category);
    });
});

// Initial products load
filterProducts('all');


// Contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Gönderiliyor...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        contactForm.innerHTML = `
            <div class="text-center py-12">
                <div class="success-icon">
                    <i data-lucide="send"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Teşekkürler!</h3>
                <p class="text-gray-600">Mesajınız alındı. En kısa sürede size geri dönüş yapacağız.</p>
            </div>
        `;
        lucide.createIcons();
    }, 1500);
});
//certificates
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.certificates-track');
    const cards = document.querySelectorAll('.certificate-card');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.arrow.prev');
    const nextBtn = document.querySelector('.arrow.next');
    
    let currentIndex = 0;
    const cardCount = cards.length;
    let autoPlayInterval;

    // PDF açma işlevi
    // cards.forEach(card => {
    //     card.addEventListener('click', () => {
    //         const pdfUrl = card.getAttribute('data-pdf');
    //         if (pdfUrl) {
    //             window.open(pdfUrl, '_blank');
    //         }
    //     });
    // });
    
    // Slider'ı güncelleme fonksiyonu
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Aktif noktayı güncelle
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Sonraki slayt
    function nextSlide() {
        currentIndex = (currentIndex + 1) % cardCount;
        updateSlider();
    }
    
    // Önceki slayt
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cardCount) % cardCount;
        updateSlider();
    }
    
    // Otomatik kaydırma başlat
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 2000); // 3 saniyede bir geçiş
    }

    // Otomatik kaydırmayı durdur
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Olay dinleyicileri
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay(); // butona basınca yeniden başlat
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    // Nokta tıklamaları
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // Başlangıç
    updateSlider();
    startAutoPlay();
});




// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 1. Yerelleştirme dosyalarını yükle
fetch('./lang.json')
  .then(response => response.json())
  .then(translations => {
    // 2. Kullanıcının dilini belirle
    // Varsayılan dil 'tr' olsun, veya tarayıcı diline bakılabilir.
    const userLanguage = 'en'; 

    console.log(translations );

    // 3. HTML elemanlarını seç ve metinlerini güncelle
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      // translation dosyasında ilgili dile ve anahtara ait metni bul
      element.textContent = translations[userLanguage][key];
    });
  })
  .catch(error => console.error('Hata:', error));

  // Dropdown'ı bir arada tutan kapsayıcı
const dropdownContainer = document.querySelector('.language-dropdown-container');

// Dil değiştirme butonu
const languageToggleBtn = document.getElementById('languageToggle');

// Dil metnini gösteren span
const languageTextSpan = document.getElementById('language-text');

// Dil seçeneklerinin tamamı
const langOptions = document.querySelectorAll('.lang-option');

// Butona tıklama olayını dinliyoruz
languageToggleBtn.addEventListener('click', (event) => {
    // Dropdown kapsayıcısına "open" sınıfını ekleyip çıkararak menüyü gösterip gizle
    dropdownContainer.classList.toggle('open');
    event.stopPropagation(); // Tıklamanın butonda kalmasını sağlar
});

// Sayfanın herhangi bir yerine tıklayınca menüyü kapat
document.addEventListener('click', (event) => {
    if (!dropdownContainer.contains(event.target)) {
        dropdownContainer.classList.remove('open');
    }
});

// Her bir dil seçeneğine tıklama olayını dinle
langOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        event.preventDefault(); // Varsayılan bağlantı davranışını engelle
        const newLanguage = option.getAttribute('data-lang');
        
        // Dil metnini ve sayfanın genel dilini güncelle
        languageTextSpan.textContent = newLanguage.toUpperCase();
        document.documentElement.lang = newLanguage;
        
        // JSON dosyasından metinleri çekip içeriği güncelle
        updateContent(newLanguage);
        
        // Menüyü kapat
        dropdownContainer.classList.remove('open');
    });
});

// JSON dosyasından metinleri çeken fonksiyon
// (Daha önceki cevaptan alıntıdır)
function updateContent(language) {
    fetch('./lang.json')
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[language] && translations[language][key]) {
                    element.textContent = translations[language][key];
                }
            });
        })
        .catch(error => console.error('Error fetching or parsing language file:', error));
}

