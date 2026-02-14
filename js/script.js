// Set Year
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Icons
lucide.createIcons();

// Navbar Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('translate-x-full');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('translate-x-full');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Scroll Animations (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal, .reveal-left');

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Trigger once
        }
    });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroText = document.getElementById('hero-text');
    const heroImage = document.getElementById('hero-image');
    const heroBlob = document.getElementById('hero-blob');
    
    if (window.innerWidth >= 768) { // Only on desktop
        if(heroText) heroText.style.transform = `translateY(-${scrollY * 0.2}px)`;
        if(heroImage) heroImage.style.transform = `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0002})`;
        if(heroBlob) heroBlob.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
});

// Video Modal Logic
const modal = document.getElementById('video-modal');
const modalContent = document.getElementById('video-content');
const modalTitle = document.getElementById('modal-title');
const modalVideo = document.getElementById('modal-video');
const closeModal = document.getElementById('close-modal');
const videoCards = document.querySelectorAll('.experience-card');

function openModal(title, src) {
    modalTitle.innerHTML = `<i data-lucide="play" width="20" class="fill-white"></i> ${title}`;
    modalVideo.src = src;
    
    modal.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
        modalVideo.play();
    }, 10);
    
    lucide.createIcons();
}

function closeVideoModal() {
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modalVideo.pause();
        modalVideo.src = "";
    }, 300);
}

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const src = card.getAttribute('data-video');
        if (src) openModal(title, src);
    });
});

closeModal.addEventListener('click', closeVideoModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
});