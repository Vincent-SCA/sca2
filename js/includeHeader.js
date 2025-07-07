// js/includeHeader.js

document.addEventListener('DOMContentLoaded', () => {
  const headerPlaceholder = document.getElementById('header-placeholder');

  fetch('components/header.html')
    .then(res => res.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;
      initHeaderBehavior();
    });
});

function initHeaderBehavior() {
  const nav = document.getElementById('navMenu');
  const menuIcon = document.getElementById('menuIcon');
  const overlay = document.getElementById('overlay');
  const links = document.querySelectorAll('.nav-link-header');

  function toggleMenu() {
    const isActive = nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
  }

  function closeMenu() {
    nav.classList.remove('active');
    menuIcon.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function adjustCTA() {
    const cta = document.getElementById('ctaButton');
    if (cta) {
      cta.textContent = window.innerWidth <= 480 ? 'Démo' : 'Demander une démo';
    }
  }

  window.addEventListener('resize', adjustCTA);
  window.addEventListener('load', adjustCTA);
}
