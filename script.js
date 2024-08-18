document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.width = '70%';
        navbar.style.left = '15%';
        navbar.style.borderRadius = '10px';
    } else {
        navbar.style.width = '100%';
        navbar.style.left = '0';
        navbar.style.borderRadius = '0px';
    }
});

const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scroll effect for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the mobile menu after clicking a link
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

//     const sections = document.querySelectorAll('section');

//     sections.forEach((section) => {
//       const observer = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//           section.classList.add('active');
//         } else {
//           section.classList.remove('active');
//         }
//       }, { threshold: 1.0 });
    
//       observer.observe(section);
//     });

//     let delay = 0;

// sections.forEach((section) => {
//   const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//       setTimeout(() => {
//         section.classList.add('active');
//       }, delay);
//       delay += 500; // Add 500ms delay between each section
//     } else {
//       section.classList.remove('active');
//     }
//   }, { threshold: 1.0 });

//   observer.observe(section);
// });
