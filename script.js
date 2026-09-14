document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .nav-link, .sidebar a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPath) {
      link.classList.add('active');
    }
  });

  const menuToggle = document.getElementById('menuToggle') || document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
