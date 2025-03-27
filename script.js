// GSAP Animations
gsap.from("#title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".subtitle", { duration: 1.5, y: -30, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from(".project-card", { duration: 1, scale: 0.8, opacity: 0, stagger: 0.3, delay: 1 });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple animation to the header on page load
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 100);
});
