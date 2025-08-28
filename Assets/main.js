// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const pageSections = document.querySelectorAll('.page-section');
    const navItems = document.querySelectorAll('a[data-page]');
    const projectDetailsBtn = document.querySelector('.project-details-btn');
    const backBtn = document.querySelector('.back-btn');
    
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
            
            // Initialize charts if methanol details page
            if (targetPage === 'methanol-details') {
                initCharts();
            }
        });
    });
    
    // Project details button navigation
    if (projectDetailsBtn) {
        projectDetailsBtn.addEventListener('click', function(e) {
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
            
            // Initialize charts
            initCharts();
        });
    }
    
    // Back button navigation
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Hide all pages
            pageSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target page
            document.getElementById(targetPage).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    }
    
    // Initialize Charts for Methanol Page
    function initCharts() {
        // Production Chart
        const productionCtx = document.getElementById('productionChart');
        if (productionCtx) {
            new Chart(productionCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['2028', '2029', '2030', '2031', '2032'],
                    datasets: [{
                        label: 'Methanol Production (tons)',
                        data: [665550000, 769600000, 810400000, 851200000, 886400000],
                        borderColor: '#0056b3',
                        backgroundColor: 'rgba(0, 86, 179, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Projected Production Growth'
                        }
                    }
                }
            });
        }
        
        // Revenue Chart
        const revenueCtx = document.getElementById('revenueChart');
        if (revenueCtx) {
            new Chart(revenueCtx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['2028', '2029', '2030', '2031', '2032'],
                    datasets: [{
                        label: 'Annual Revenue (USD millions)',
                        data: [1.45, 1.6, 1.6, 1.6, 1.6],
                        backgroundColor: '#ffc107'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Projected Revenue Growth'
                        }
                    }
                }
            });
        }
        
        // Emissions Chart
        const emissionsCtx = document.getElementById('emissionsChart');
        if (emissionsCtx) {
            new Chart(emissionsCtx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['CO2 Captured', 'CO2 Emitted'],
                    datasets: [{
                        data: [85, 15],
                        backgroundColor: ['#28a745', '#dc3545']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'CO2 Capture Efficiency'
                        }
                    }
                }
            });
        }
        
        // Sustainability Chart
        const sustainabilityCtx = document.getElementById('sustainabilityChart');
        if (sustainabilityCtx) {
            new Chart(sustainabilityCtx.getContext('2d'), {
                type: 'radar',
                data: {
                    labels: ['Energy Efficiency', 'Water Usage', 'Emissions', 'Waste Management', 'Community Impact'],
                    datasets: [{
                        label: 'Traditional Plants',
                        data: [60, 40, 30, 50, 45],
                        fill: true,
                        backgroundColor: 'rgba(220, 53, 69, 0.2)',
                        borderColor: 'rgb(220, 53, 69)',
                        pointBackgroundColor: 'rgb(220, 53, 69)'
                    }, {
                        label: 'CAHL Plant',
                        data: [90, 95, 85, 90, 95],
                        fill: true,
                        backgroundColor: 'rgba(40, 167, 69, 0.2)',
                        borderColor: 'rgb(40, 167, 69)',
                        pointBackgroundColor: 'rgb(40, 167, 69)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Sustainability Comparison'
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
        }
    }

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