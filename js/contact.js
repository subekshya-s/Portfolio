// ─── Contact Form ─────────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  contactForm.reset();
});