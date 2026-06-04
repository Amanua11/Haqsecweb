document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// 3. FAQ Accordion Toggle
function toggleFaq(btn) {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isOpen = btn.classList.contains('open');

    // Close all open items
    document.querySelectorAll('.faq-question.open').forEach(openBtn => {
        openBtn.classList.remove('open');
        openBtn.parentElement.querySelector('.faq-answer').classList.remove('open');
    });

    // Open clicked item if it was closed
    if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
    }
}

// 4. Contact Form Handler
function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !message) {
        alert('Please fill in at least your name and message before submitting.');
        return;
    }
    alert('Thank you, ' + name + '! Your message has been received. Our team will be in touch within one business day.');
    document.getElementById('name').value = '';
    document.getElementById('company').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('service').value = '';
    document.getElementById('message').value = '';
}
