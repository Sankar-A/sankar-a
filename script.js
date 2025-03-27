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

// Tab navigation logic
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to the clicked button and corresponding content
        button.classList.add('active');
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.classList.add('active');
        } else {
            console.error(`Tab content with id "${tabName}" not found.`);
        }
    });
});

// Card navigation logic
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.project-card');
const prevButton = document.querySelector('.card-control.prev');
const nextButton = document.querySelector('.card-control.next');

let currentIndex = 0;

function updateCards() {
    // Calculate the offset for the current card
    const offset = -currentIndex * 100; // Move the container by 100% for each card
    cardContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop back to the last card
    updateCards();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; // Loop back to the first card
    updateCards();
});

// Initialize the card navigation
updateCards();
