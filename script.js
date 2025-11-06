// Testimonial Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {

    // Carousel Elements
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    // Show specific testimonial
    function showTestimonial(index) {
        // Remove active class from all
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // Add active class to current
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');

        currentIndex = index;
    }

    // Next testimonial
    function nextTestimonial() {
        let newIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(newIndex);
    }

    // Previous testimonial
    function prevTestimonial() {
        let newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(newIndex);
    }

    // Event Listeners for carousel
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
        prevBtn.addEventListener('click', prevTestimonial);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(nextTestimonial, 5000);


    // Scroll Animation Functionality
    const fadeElements = document.querySelectorAll('.fade-in');

    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.2,  // Trigger when 20% visible
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });


    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Formspree will handle the actual submission
            // This just shows a pending message
            formStatus.textContent = 'Sending message...';
            formStatus.style.display = 'block';
            formStatus.className = 'form-status';
        });
    }
});