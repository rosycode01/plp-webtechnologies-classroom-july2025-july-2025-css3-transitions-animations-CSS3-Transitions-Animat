// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('show')) {
                    nav.classList.remove('show');
                }
            }
        });
    });
    
    // Testimonial carousel
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        
        currentTestimonial = index;
        if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
        if (currentTestimonial >= testimonials.length) currentTestimonial = 0;
        
        testimonials[currentTestimonial].classList.add('active');
    }
    
    prevBtn.addEventListener('click', () => showTestimonial(currentTestimonial - 1));
    nextBtn.addEventListener('click', () => showTestimonial(currentTestimonial + 1));
    
    // Auto-rotate testimonials
    setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 5000);
    
    // Appointment form handling
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentModal = document.getElementById('appointmentModal');
    const closeModal = document.getElementById('closeModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        
        if (!name || !email || !phone || !service || !date) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.replace(/[^\d+]/g, ''))) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // Date validation
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            alert('Please select a future date');
            return;
        }
        
        // If all validation passes, show success modal
        appointmentModal.style.display = 'block';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        appointmentModal.style.display = 'none';
    });
    
    modalCloseBtn.addEventListener('click', function() {
        appointmentModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === appointmentModal) {
            appointmentModal.style.display = 'none';
        }
    });
    
    // Book appointment button
    const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
    
    bookAppointmentBtn.addEventListener('click', function() {
        const appointmentSection = document.getElementById('contact');
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = appointmentSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
    
    // Service card animations
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Learn more button
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    
    learnMoreBtn.addEventListener('click', function() {
        const servicesSection = document.getElementById('services');
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});