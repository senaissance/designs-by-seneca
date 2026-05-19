// ===========================
// CURSOR LIGHT SYSTEM
// A warm golden spotlight follows the mouse.
// Each glass element independently calculates
// its angle to the cursor and updates its
// specular highlight position + intensity.
// ===========================

const cursorLight = document.querySelector('.cursor-light');
const cursorDot   = document.querySelector('.cursor-dot');

// All elements that react to the cursor light
// glass-obj = large sculptural pieces
// glass-ball = spheres
// glass-panel = card surfaces
const glassEls = document.querySelectorAll('[data-glass]');

// Cursor position (raw)
let cx = window.innerWidth  / 2;
let cy = window.innerHeight / 2;

// Smoothed position for the light (lags slightly for elegance)
let lx = cx;
let ly = cy;

document.addEventListener('mousemove', (e) => {
  cx = e.clientX;
  cy = e.clientY;
}, { passive: true });

// Smooth cursor follow + per-element lighting
function tick() {
  // Lerp the light position (slower = more dreamy lag)
  lx += (cx - lx) * 0.08;
  ly += (cy - ly) * 0.08;

  // Move cursor elements
  if (cursorLight) {
    cursorLight.style.transform = `translate(calc(${lx}px - 50%), calc(${ly}px - 50%))`;
  }
  if (cursorDot) {
    cursorDot.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
  }

  // Update per-element lighting
  glassEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elCx = rect.left + rect.width  / 2;
    const elCy = rect.top  + rect.height / 2;

    // Vector from element center to cursor
    const dx = lx - elCx;
    const dy = ly - elCy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Falloff: full intensity when cursor is ON the element,
    // zero at ~700px away. Quadratic falloff (like real light).
    const maxDist = 700;
    const rawIntensity = Math.max(0, 1 - dist / maxDist);
    const intensity = rawIntensity * rawIntensity; // quadratic

    // Specular position: where the "reflection" of the cursor light
    // appears on the glass surface. It sits at ~35% radius from center,
    // on the side FACING the cursor.
    const normDx = dist > 0.5 ? dx / dist : 0;
    const normDy = dist > 0.5 ? dy / dist : 0;

    // For spheres/objects: spec moves across the face
    // For flat panels: spec is a wash across the surface
    const isPanel = el.classList.contains('glass-panel');
    const specRange = isPanel ? 22 : 32; // panels get wider wash

    const specX = 50 + normDx * specRange;
    const specY = 50 + normDy * specRange;

    el.style.setProperty('--spec-x',   `${specX.toFixed(2)}%`);
    el.style.setProperty('--spec-y',   `${specY.toFixed(2)}%`);
    el.style.setProperty('--intensity', intensity.toFixed(4));
  });

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

// Cursor dot: grow slightly when hovering interactive elements
document.querySelectorAll('a, button, .service-card').forEach((el) => {
  el.addEventListener('mouseenter', () => cursorDot?.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursorDot?.classList.remove('hovering'));
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
revealEls.forEach((el) => revealObs.observe(el));

// Hero elements reveal immediately on load
document.querySelectorAll('#hero .reveal').forEach((el) => {
  setTimeout(() => el.classList.add('visible'), 120);
});

// ===========================
// NAV — hide on scroll down, return on up
// ===========================
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  if (y > 500) {
    navbar.style.transform = y > lastScroll + 4 ? 'translateY(-100%)' : 'translateY(0)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScroll = y;
}, { passive: true });

// ===========================
// FLOATING CTA
// ===========================
const floatCta = document.getElementById('floatCta');
new IntersectionObserver(([e]) => {
  floatCta.classList.toggle('visible', !e.isIntersecting);
}, { threshold: 0.1 }).observe(document.getElementById('hero'));

// ===========================
// MOBILE MENU
// ===========================
const hamburger   = document.querySelector('.nav-hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileLinks = document.querySelectorAll('.mobile-link');
const openMenu  = () => { mobileMenu.classList.add('open');    document.body.style.overflow = 'hidden'; };
const closeMenu = () => { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; };
hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileLinks.forEach((l) => l.addEventListener('click', closeMenu));

// ===========================
// GLASS CARD — 3D tilt toward cursor
// Gives glass panels a subtle perspective
// warp, as if the glass is catching the light.
// ===========================
document.querySelectorAll('.service-card, .pricing-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;  // degrees
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -8;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s var(--ease)';
    card.style.transform  = '';
    setTimeout(() => (card.style.transition = ''), 650);
  });
});

// ===========================
// STEP NUMBER POP
// ===========================
const numStyle = document.createElement('style');
numStyle.textContent = `
  .step-number.pop { animation: numPop 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards; }
  @keyframes numPop { from { transform: scale(0.6) translateY(12px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
`;
document.head.appendChild(numStyle);

new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('pop'); } });
}, { threshold: 0.5 }).observe(document.querySelector('#how-it-works') || document.body);

// Stagger the step number pops
document.querySelectorAll('.step-number').forEach((n, i) => {
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      setTimeout(() => n.classList.add('pop'), i * 100);
    }
  }, { threshold: 0.5 }).observe(n);
});

// ===========================
// SMOOTH ANCHOR (accounts for nav height)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 16, behavior: 'smooth' });
  });
});

// ===========================
// CONTACT FORM — demo feedback
// ===========================
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    if (form.action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Got it — talk soon!';
      btn.style.background = 'linear-gradient(120deg, rgba(130,225,180,0.8), rgba(60,200,200,0.8))';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = 'Send it over'; btn.style.background = ''; btn.disabled = false; form.reset(); }, 3500);
    }
  });
}
