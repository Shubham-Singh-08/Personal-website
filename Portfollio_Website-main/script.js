
/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
 let header = document.querySelector('.header');

 header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');

 };


/*========== swiper ==========*/
     var swiper = new Swiper(".mySwiper", {
     slidesPerView: 1,
     spaceBetween: 50,
     loop: true,
     grabCursor: true,
     pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/






/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
     distance: '10px',
     duration: 1000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// Select the form element
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Capture form data
    const formData = {
        fullName: contactForm.querySelector('input[placeholder="Full Name"]').value,
        email: contactForm.querySelector('input[placeholder="Email Address"]').value,
        mobileNumber: contactForm.querySelector('input[placeholder="Mobile Number"]').value,
        subject: contactForm.querySelector('input[placeholder="Email Subject"]').value,
        message: contactForm.querySelector('textarea[placeholder="Your Message"]').value
    };

    try {
        // Send the data to your server
        const response = await fetch('http://localhost:3000/contact', { // Change URL if needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form
        } else {
            alert('Failed to send message. Please try again later.');
        }
    } catch (error) {
        alert('Error: Unable to connect to the server.');
    }
});
