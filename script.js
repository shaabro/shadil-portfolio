document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       1. Elements Selection
    ========================================= */
    const header = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const reveals = document.querySelectorAll('.reveal');

    /* =========================================
       2. Sticky Header with Scroll Effect
    ========================================= */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* =========================================
       3. Mobile Hamburger Menu Toggle
    ========================================= */
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Toggle icon between list and X
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
            document.body.style.overflow = '';
        });
    });

    /* =========================================
       4. Scroll Reveal Intersection Observer
    ========================================= */
    const revealOptions = {
        threshold: 0.15, // 15% of element must be visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    /* =========================================
       5. Active Navigation Link Update on Scroll
    ========================================= */
    const sections = document.querySelectorAll('section');

    const setActiveLink = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', setActiveLink);
    
    // Trigger reveals on initial load if already in viewport
    setTimeout(() => {
        reveals.forEach(reveal => {
            const rect = reveal.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                reveal.classList.add('active');
                }
            });
    }, 100);
});

const cards = document.querySelectorAll(".case-card");

cards.forEach((card) => {

    const cursor = card.querySelector(".cursor-view");

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cursor.style.left = x + "px";
        cursor.style.top = y + "px";

    });

});

