// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
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

// Scroll down button
document.querySelector('.scroll-down').addEventListener('click', function () {
    document.querySelector('.about-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .experience-card, .profile-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero-image1', { origin: 'top' });
ScrollReveal().reveal('.portfolio-outline', { origin: 'left' });
ScrollReveal().reveal('.portfolio-text', { origin: 'right' });

// const portfolioText = document.querySelector('.portfolio-text');
// portfolioText.addEventListener('mouseenter', () => {
//     portfolioText.style.transform = 'scale(1.2)';
// });
// portfolioText.addEventListener('mouseleave', () => {
//     portfolioText.style.transform = 'scale(1)';
// });

