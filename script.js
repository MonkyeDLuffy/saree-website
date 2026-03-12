const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const newsletterForm = document.querySelector('.newsletter-form');
const messageEl = document.querySelector('.form-message');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

if (newsletterForm && messageEl) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(newsletterForm);
    const email = formData.get('email');

    if (typeof email === 'string' && email.includes('@')) {
      messageEl.textContent = 'Thank you for subscribing to Vastrika updates!';
      newsletterForm.reset();
      return;
    }

    messageEl.textContent = 'Please enter a valid email address.';
  });
}
