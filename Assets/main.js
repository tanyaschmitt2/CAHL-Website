        // Navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            const pageSections = document.querySelectorAll('.page-section');
            const navItems = document.querySelectorAll('a[data-page]');
            
            // Mobile menu toggle
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Page navigation
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetPage = this.getAttribute('data-page');
                    
                    // Hide all pages
                    pageSections.forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // Show target page
                    document.getElementById(targetPage).classList.add('active');
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message. We will get back to you soon!');
                    contactForm.reset();
                });
            }
            
            // Animation on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.project-card, .about-image');
                
                elements.forEach(element => {
                    const position = element.getBoundingClientRect();
                    
                    // If element is in viewport
                    if(position.top < window.innerHeight && position.bottom >= 0) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animated elements
            const animatedElements = document.querySelectorAll('.project-card, .about-image');
            animatedElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(50px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Listen for scroll events
            window.addEventListener('scroll', animateOnScroll);
            // Trigger once on load
            window.addEventListener('load', animateOnScroll);
        });
  