// Smooth scrolling for navigation links
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

// Dropdown menu toggle
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
            dropdownMenu.style.display = 'none';
        }
    });
}

// Newsletter subscription
const subscribeButton = document.querySelector('.footer-section button');
if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
        const email = document.querySelector('.footer-section input').value;
        if (email) {
            alert('Thank you for subscribing! We\'ll be in touch.');
            document.querySelector('.footer-section input').value = '';
        }
    });
}

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.value-card, .service-category, .industry-item, .insight-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

console.log('InteliSHEQ Website loaded successfully!');