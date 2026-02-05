// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('active');
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
    // Reset all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Set new slide
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto slide every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Dot click events
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Vertical navigation
document.querySelectorAll('.vertical-btn').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        // Update active button
        document.querySelectorAll('.vertical-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update active content
        document.querySelectorAll('.vertical-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
        
        // Update nav links
        document.querySelectorAll('#mainNav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-vertical') === target) {
                link.classList.add('active');
            }
        });
    });
});

// Nav links for verticals
document.querySelectorAll('#mainNav a[data-vertical]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-vertical');
        
        // Update active button
        document.querySelectorAll('.vertical-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-target') === target) {
                btn.classList.add('active');
            }
        });
        
        // Update active content
        document.querySelectorAll('.vertical-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
        
        // Update nav links
        document.querySelectorAll('#mainNav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu if open
        document.getElementById('mainNav').classList.remove('active');
        
        // Scroll to verticals section
        document.getElementById('verticales').scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});