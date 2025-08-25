// Mobile zoom prevention and viewport control
(function() {
    // Prevent zoom-out on mobile devices
    let viewport = document.querySelector('meta[name=viewport]');
    if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        document.head.appendChild(viewport);
    }
    
    // Set viewport to prevent zoom-out
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    
    // Additional mobile constraints
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Prevent double-tap zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function (event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
        
        // Prevent pinch zoom
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });
        
        document.addEventListener('gesturechange', function (e) {
            e.preventDefault();
        });
        
        document.addEventListener('gestureend', function (e) {
            e.preventDefault();
        });
        
        // Prevent wheel zoom
        document.addEventListener('wheel', function(e) {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Prevent keyboard zoom
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
                e.preventDefault();
            }
        });
    }
    
    // Force viewport width on resize and continuously monitor
    function setViewportWidth() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        document.documentElement.style.setProperty('--vw', `${vw}px`);
        document.body.style.width = `${vw}px`;
        document.body.style.maxWidth = `${vw}px`;
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
        
        // Force all major containers
        const containers = document.querySelectorAll('.hero, .section, .footer, .header, .container');
        containers.forEach(container => {
            container.style.width = '100%';
            container.style.maxWidth = '100%';
            container.style.overflowX = 'hidden';
        });
    }
    
    // Monitor viewport continuously
    function monitorViewport() {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        
        // If viewport changes unexpectedly, force it back
        if (document.documentElement.clientWidth !== currentWidth) {
            setViewportWidth();
        }
        
        // Prevent horizontal scroll
        if (window.scrollX !== 0) {
            window.scrollTo(0, window.scrollY);
        }
        
        // Force body constraints
        document.body.style.width = `${currentWidth}px`;
        document.body.style.maxWidth = `${currentWidth}px`;
        document.body.style.overflowX = 'hidden';
        
        // NUCLEAR: Force ALL elements to fit viewport
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            // Force max-width on all elements
            element.style.maxWidth = `${currentWidth}px`;
            element.style.overflowX = 'hidden';
            
            // Force any elements with specific widths to fit
            const computedStyle = window.getComputedStyle(element);
            if (computedStyle.width !== 'auto' && computedStyle.width !== '100%') {
                element.style.width = '100%';
            }
            
            // Force any elements with absolute positioning to stay in bounds
            if (computedStyle.position === 'absolute' || computedStyle.position === 'fixed') {
                element.style.maxWidth = `${currentWidth}px`;
                element.style.overflowX = 'hidden';
            }
        });
        
        // Force specific problematic elements
        const containers = document.querySelectorAll('.hero, .section, .footer, .header, .container, .grid, .flex');
        containers.forEach(container => {
            container.style.width = '100%';
            container.style.maxWidth = `${currentWidth}px`;
            container.style.overflowX = 'hidden';
        });
        
        // Force text elements to wrap
        const generalTextElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
        generalTextElements.forEach(element => {
            element.style.maxWidth = `${currentWidth}px`;
            element.style.overflowX = 'hidden';
            element.style.wordWrap = 'break-word';
            element.style.overflowWrap = 'break-word';
        });
        
        // NUCLEAR: Force testimonials and grid elements to fit viewport
        const testimonialElements = document.querySelectorAll('[class*="testimonial"], [id*="testimonial"], [class*="review"], [id*="review"]');
        testimonialElements.forEach(element => {
            element.style.width = '100%';
            element.style.maxWidth = `${currentWidth}px`;
            element.style.overflowX = 'hidden';
            element.style.display = 'block';
            element.style.float = 'none';
            element.style.position = 'relative';
        });
        
        // Force any grid or flex containers to single column
        const generalGridElements = document.querySelectorAll('.grid, [class*="grid"], [class*="flex"]');
        generalGridElements.forEach(element => {
            element.style.display = 'block';
            element.style.width = '100%';
            element.style.maxWidth = `${currentWidth}px`;
            element.style.overflowX = 'hidden';
            element.style.flexDirection = 'column';
            element.style.flexWrap = 'nowrap';
        });
        
        // Force grid/flex items to full width
        const generalGridItems = document.querySelectorAll('.grid > *, [class*="grid"] > *, [class*="flex"] > *');
        generalGridItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.flex = 'none';
            item.style.margin = '0';
            item.style.padding = '1rem';
        });
        
        // Force any card elements to fit
        const cardElements = document.querySelectorAll('[class*="card"], [class*="item"]');
        cardElements.forEach(card => {
            card.style.width = '100%';
            card.style.maxWidth = `${currentWidth}px`;
            card.style.overflowX = 'hidden';
            card.style.margin = '0';
            card.style.padding = '1rem';
        });
        
        // NUCLEAR: Force sliding testimonials and carousels to fit viewport
        const slidingElements = document.querySelectorAll('[class*="sliding"], [class*="carousel"], [class*="swiper"], [class*="slide"], [class*="slider"]');
        slidingElements.forEach(element => {
            element.style.width = '100%';
            element.style.maxWidth = `${currentWidth}px`;
            element.style.overflowX = 'hidden';
            element.style.display = 'block';
            element.style.transform = 'none';
            element.style.transition = 'none';
            element.style.position = 'relative';
            element.style.left = '0';
            element.style.right = '0';
        });
        
        // Force sliding/carousel items to fit
        const slidingItems = document.querySelectorAll('[class*="sliding"] > *, [class*="carousel"] > *, [class*="swiper"] > *, [class*="slide"] > *, [class*="slider"] > *');
        slidingItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.float = 'none';
            item.style.position = 'relative';
            item.style.transform = 'none';
            item.style.margin = '0';
            item.style.padding = '1rem';
        });
        
        // Force testimonials containers to fit
        const testimonialContainers = document.querySelectorAll('[class*="testimonial"], [id*="testimonial"], [class*="review"], [id*="review"]');
        testimonialContainers.forEach(container => {
            container.style.width = '100%';
            container.style.maxWidth = `${currentWidth}px`;
            container.style.overflowX = 'hidden';
            container.style.display = 'block';
            container.style.position = 'relative';
            container.style.left = '0';
            container.style.right = '0';
            container.style.transform = 'none';
        });
        
        // Force testimonials wrappers to fit
        const testimonialWrappers = document.querySelectorAll('[class*="testimonial"] > *, [id*="testimonial"] > *, [class*="review"] > *, [id*="review"] > *');
        testimonialWrappers.forEach(wrapper => {
            wrapper.style.width = '100%';
            wrapper.style.maxWidth = `${currentWidth}px`;
            wrapper.style.overflowX = 'hidden';
            wrapper.style.display = 'block';
            wrapper.style.float = 'none';
            wrapper.style.position = 'relative';
            wrapper.style.transform = 'none';
            wrapper.style.margin = '0';
            wrapper.style.padding = '1rem';
        });
        
        // Force any parent containers of testimonials to fit
        const testimonialParents = document.querySelectorAll('section, div');
        testimonialParents.forEach(parent => {
            const hasTestimonials = parent.querySelector('[class*="testimonial"], [id*="testimonial"], [class*="review"], [id*="review"]');
            if (hasTestimonials) {
                parent.style.width = '100%';
                parent.style.maxWidth = `${currentWidth}px`;
                parent.style.overflowX = 'hidden';
                parent.style.position = 'relative';
            }
        });
        
        // NUCLEAR: Force ALL specific grid layouts to fit viewport exactly
        const specificGrids = document.querySelectorAll('.credibility-grid, .pain-grid, .deliverables-grid, .benefits-grid, .process-timeline, .usp-content');
        specificGrids.forEach(grid => {
            grid.style.width = '100%';
            grid.style.maxWidth = `${currentWidth}px`;
            grid.style.overflowX = 'hidden';
            grid.style.display = 'block';
            grid.style.gridTemplateColumns = '1fr';
            grid.style.gridTemplateRows = 'auto';
            grid.style.gridGap = '1rem';
            grid.style.margin = '0';
            grid.style.padding = '0 1rem';
            grid.style.boxSizing = 'border-box';
        });
        
        // Force ALL grid items to full width
        const gridItems = document.querySelectorAll('.credibility-grid > *, .pain-grid > *, .deliverables-grid > *, .benefits-grid > *, .process-timeline > *, .usp-content > *');
        gridItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.float = 'none';
            item.style.position = 'relative';
            item.style.transform = 'none';
            item.style.margin = '0 0 1rem 0';
            item.style.padding = '1rem';
            item.style.boxSizing = 'border-box';
        });
        
        // Force flex containers to single column
        const flexContainers = document.querySelectorAll('.usp-content, .cta-content, .guarantee-content, .footer-content');
        flexContainers.forEach(container => {
            container.style.width = '100%';
            container.style.maxWidth = `${currentWidth}px`;
            container.style.overflowX = 'hidden';
            container.style.display = 'block';
            container.style.flexDirection = 'column';
            container.style.flexWrap = 'nowrap';
        });
        
        // Force flex items to full width
        const flexItems = document.querySelectorAll('.usp-content > *, .cta-content > *, .guarantee-content > *, .footer-content > *');
        flexItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.flex = 'none';
            item.style.margin = '0 0 1rem 0';
            item.style.padding = '1rem';
            item.style.boxSizing = 'border-box';
        });
        
        // Force before-after layouts to fit
        const beforeAfterLayouts = document.querySelectorAll('.before-after, .transform-graphic');
        beforeAfterLayouts.forEach(layout => {
            layout.style.width = '100%';
            layout.style.maxWidth = `${currentWidth}px`;
            layout.style.overflowX = 'hidden';
            layout.style.display = 'block';
            layout.style.flexDirection = 'column';
        });
        
        const beforeAfterItems = document.querySelectorAll('.before-after > *');
        beforeAfterItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.margin = '0 0 1rem 0';
            item.style.padding = '1rem';
            item.style.boxSizing = 'border-box';
        });
        
        // Force stats layouts to fit
        const statsLayouts = document.querySelectorAll('.usp-stats, .benefit-stats, .guarantee-details');
        statsLayouts.forEach(layout => {
            layout.style.width = '100%';
            layout.style.maxWidth = `${currentWidth}px`;
            layout.style.overflowX = 'hidden';
            layout.style.display = 'block';
            layout.style.flexDirection = 'column';
        });
        
        const statsItems = document.querySelectorAll('.usp-stats > *, .benefit-stats > *, .guarantee-details > *');
        statsItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.margin = '0 0 1rem 0';
            item.style.padding = '1rem';
            item.style.boxSizing = 'border-box';
        });
        
        // Force specific card layouts to fit
        const specificCards = document.querySelectorAll('.credibility-card, .pain-card, .deliverable-item, .benefit-card, .timeline-item');
        specificCards.forEach(card => {
            card.style.width = '100%';
            card.style.maxWidth = `${currentWidth}px`;
            card.style.overflowX = 'hidden';
            card.style.display = 'block';
            card.style.float = 'none';
            card.style.position = 'relative';
            card.style.transform = 'none';
            card.style.margin = '0 0 1rem 0';
            card.style.padding = '1rem';
            card.style.boxSizing = 'border-box';
        });
        
        // Force icon containers to fit
        const iconContainers = document.querySelectorAll('.card-icon, .pain-icon, .deliverable-icon, .benefit-icon, .timeline-number');
        iconContainers.forEach(icon => {
            icon.style.width = 'auto';
            icon.style.maxWidth = `${currentWidth}px`;
            icon.style.overflowX = 'hidden';
            icon.style.display = 'inline-block';
            icon.style.position = 'relative';
            icon.style.transform = 'none';
            icon.style.margin = '0 0 1rem 0';
            icon.style.padding = '0';
        });
        
        // Force text content to wrap
        const specificTextElements = document.querySelectorAll('.credibility-card h3, .pain-card h3, .deliverable-item h3, .benefit-card h3, .timeline-item h3, .credibility-card p, .pain-card p, .deliverable-item p, .benefit-card p, .timeline-item p');
        specificTextElements.forEach(text => {
            text.style.width = '100%';
            text.style.maxWidth = `${currentWidth}px`;
            text.style.overflowX = 'hidden';
            text.style.wordWrap = 'break-word';
            text.style.overflowWrap = 'break-word';
            text.style.margin = '0 0 1rem 0';
            text.style.padding = '0';
            text.style.boxSizing = 'border-box';
        });
        
        // Force button containers to fit
        const buttonContainers = document.querySelectorAll('.hero-cta, .cta-buttons');
        buttonContainers.forEach(container => {
            container.style.width = '100%';
            container.style.maxWidth = `${currentWidth}px`;
            container.style.overflowX = 'hidden';
            container.style.display = 'block';
            container.style.flexDirection = 'column';
        });
        
        const buttonItems = document.querySelectorAll('.hero-cta > *, .cta-buttons > *');
        buttonItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.margin = '0 0 1rem 0';
            item.style.padding = '0';
            item.style.boxSizing = 'border-box';
        });
        
        // Force all buttons to fit
        const allButtons = document.querySelectorAll('.btn');
        allButtons.forEach(button => {
            button.style.width = '100%';
            button.style.maxWidth = `${currentWidth}px`;
            button.style.overflowX = 'hidden';
            button.style.display = 'block';
            button.style.textAlign = 'center';
            button.style.margin = '0 0 1rem 0';
            button.style.padding = '1rem';
            button.style.boxSizing = 'border-box';
        });
        
        // Force navigation to fit
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.style.width = '100%';
            navMenu.style.maxWidth = `${currentWidth}px`;
            navMenu.style.overflowX = 'hidden';
            navMenu.style.display = 'block';
            navMenu.style.flexDirection = 'column';
        }
        
        const navItems = document.querySelectorAll('.nav-menu > *');
        navItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.margin = '0 0 1rem 0';
            item.style.padding = '0';
            item.style.boxSizing = 'border-box';
        });
        
        // Force footer sections to fit
        const footerLinks = document.querySelector('.footer-links');
        if (footerLinks) {
            footerLinks.style.width = '100%';
            footerLinks.style.maxWidth = `${currentWidth}px`;
            footerLinks.style.overflowX = 'hidden';
            footerLinks.style.display = 'block';
            footerLinks.style.flexDirection = 'column';
        }
        
        const footerSections = document.querySelectorAll('.footer-links > *');
        footerSections.forEach(section => {
            section.style.width = '100%';
            section.style.maxWidth = `${currentWidth}px`;
            section.style.overflowX = 'hidden';
            section.style.display = 'block';
            section.style.margin = '0 0 1rem 0';
            section.style.padding = '0';
            section.style.boxSizing = 'border-box';
        });
        
        // Force footer lists to fit
        const footerLists = document.querySelectorAll('.footer-links ul');
        footerLists.forEach(list => {
            list.style.width = '100%';
            list.style.maxWidth = `${currentWidth}px`;
            list.style.overflowX = 'hidden';
            list.style.display = 'block';
            list.style.margin = '0 0 1rem 0';
            list.style.padding = '0';
            list.style.boxSizing = 'border-box';
        });
        
        const footerListItems = document.querySelectorAll('.footer-links li');
        footerListItems.forEach(item => {
            item.style.width = '100%';
            item.style.maxWidth = `${currentWidth}px`;
            item.style.overflowX = 'hidden';
            item.style.display = 'block';
            item.style.margin = '0 0 0.5rem 0';
            item.style.padding = '0';
            item.style.boxSizing = 'border-box';
        });
        
        // Force modal content to fit
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.width = '90%';
            modalContent.style.maxWidth = '90vw';
            modalContent.style.overflowX = 'hidden';
            modalContent.style.margin = '2rem auto';
            modalContent.style.padding = '1rem';
            modalContent.style.boxSizing = 'border-box';
        }
        
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.style.width = '100%';
            group.style.maxWidth = `${currentWidth}px`;
            group.style.overflowX = 'hidden';
            group.style.margin = '0 0 1rem 0';
            group.style.padding = '0';
            group.style.boxSizing = 'border-box';
        });
        
        const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
        formInputs.forEach(input => {
            input.style.width = '100%';
            input.style.maxWidth = `${currentWidth}px`;
            input.style.overflowX = 'hidden';
            input.style.boxSizing = 'border-box';
            input.style.padding = '0.75rem';
        });
    }
    
    window.addEventListener('resize', setViewportWidth);
    window.addEventListener('orientationchange', setViewportWidth);
    window.addEventListener('scroll', monitorViewport);
    
    // Set initial viewport and start monitoring
    setViewportWidth();
    
    // Continuous monitoring
    setInterval(monitorViewport, 100);
    
    // Force viewport on page load
    window.addEventListener('load', setViewportWidth);
    window.addEventListener('DOMContentLoaded', setViewportWidth);
})();

// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('contact-modal');
const modalClose = document.getElementById('modal-close');
const contactForm = document.getElementById('contact-form');

// Header scroll effect
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Mobile navigation toggle
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile nav when clicking a link
function closeMobileNav() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scroll to section
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Handle navigation clicks
function handleNavClick(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    
    // Handle modal links
    if (href === '#contact') {
        showModal();
        return;
    }
    
    // Handle regular navigation
    if (href.startsWith('#')) {
        smoothScrollTo(href);
        closeMobileNav();
    }
}

// Modal functions
function showModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus on first input
    const firstInput = modal.querySelector('input[type="text"]');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
    }
}

function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'title'];
    const missingFields = requiredFields.filter(field => !data[field]?.trim());
    
    if (missingFields.length > 0) {
        alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = 'Submitting...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your interest! We\'ll contact you within 2 hours to discuss your AI audit.');
        contactForm.reset();
        hideModal();
        
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Handle CTA button clicks
function handleCtaClick(e) {
    const href = this.getAttribute('href');
    
    if (href === '#contact' || href === '#book-audit') {
        e.preventDefault();
        showModal();
    }
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .credibility-card,
        .pain-card,
        .deliverable-item,
        .timeline-item,
        .benefit-card
    `);
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Handle keyboard navigation
function handleKeyboardNav(e) {
    // Close modal with Escape key
    if (e.key === 'Escape' && modal.style.display === 'block') {
        hideModal();
    }
    
    // Close mobile nav with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileNav();
    }
}

// Optimize scroll performance
let ticking = false;
function optimizedScrollHandler() {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
}

// Initialize preloader (if needed)
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 300);
    }
}

// Handle resize events
function handleResize() {
    // Close mobile nav on resize to desktop
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
}

// Add loading state to external links
function addLoadingToExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });
}

// Performance monitoring
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                console.log('DOM Content Loaded:', perfData.domContentLoadedEventStart - perfData.domContentLoadedEventStart, 'ms');
            }, 0);
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Navigation events
    navToggle.addEventListener('click', toggleMobileNav);
    
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Modal events
    modalClose.addEventListener('click', hideModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Form events
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // CTA button events
    const ctaButtons = document.querySelectorAll('a[href="#contact"], a[href="#book-audit"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', handleCtaClick);
    });
    
    // Scroll events
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // Resize events
    window.addEventListener('resize', handleResize);
    
    // Keyboard events
    document.addEventListener('keydown', handleKeyboardNav);
    
    // Initialize features
    initScrollAnimations();
    addLoadingToExternalLinks();
    logPerformanceMetrics();
    
    // Remove preloader when everything is loaded
    window.addEventListener('load', hidePreloader);
});

// Additional utility functions

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}

// Animate counter numbers
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counter animations when visible
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = entry.target;
                const value = target.textContent.replace(/[^0-9]/g, '');
                const numValue = parseInt(value) || 0;
                
                target.classList.add('animated');
                target.textContent = '0';
                animateCounter(target, 0, numValue, 2000);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Call counter animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initCounterAnimations, 500);
});

// Export functions for external use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showModal,
        hideModal,
        smoothScrollTo,
        debounce,
        throttle,
        isInViewport,
        getScrollPercentage
    };
}


