// TOGGLE NAVBAR

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const clicks = document.querySelectorAll(".click");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});



clicks.forEach(function(click){
  click.addEventListener("click", function () {
    links.classList.remove("show-links");
  });
})

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});


// PRICING CONTACT SUBMISSION TO WHATSAPP 
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            if (name && email && message) {
                const whatsappMessage = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
                const whatsappUrl = `https://wa.me/447860254271?text=${whatsappMessage}`;
                window.open(whatsappUrl, '_blank');
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});