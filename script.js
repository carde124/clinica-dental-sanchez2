// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Cerrar menú al pulsar un enlace
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => header.classList.remove('open'));
});

// Animación suave al hacer scroll a secciones (refuerzo además del CSS smooth)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Reveal on scroll para tarjetas y secciones
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.style.opacity = '1';
      en.target.style.transform = 'translateY(0)';
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .member, .quote, .image-card, .hero-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  io.observe(el);
});
