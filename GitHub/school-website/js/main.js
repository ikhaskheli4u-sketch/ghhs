function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav');
    const navMenu = document.getElementById('nav-menu');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (!nav.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

function submitAdmissionForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('admission-form');
    const formData = new FormData(form);
    
    const data = Object.fromEntries(formData.entries());
    console.log('Admission Form Submitted:', data);
    
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
}

function submitContactForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    const data = Object.fromEntries(formData.entries());
    console.log('Contact Form Submitted:', data);
    
    form.style.display = 'none';
    document.getElementById('contact-success').style.display = 'block';
}

function handleLogin(event) {
    event.preventDefault();
    
    const rollNo = document.getElementById('rollNo').value;
    const password = document.getElementById('password').value;
    
    console.log('Login Attempt:', { rollNo, password });
    
    alert('This is a demo. In a real system, this would authenticate with the school database.');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
