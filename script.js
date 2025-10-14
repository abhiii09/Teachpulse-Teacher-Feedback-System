// Navigation handling
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const sections = ['home', 'about', 'services', 'contact'];
const loginSection = document.getElementById('login');
const loginBtn = document.getElementById('loginBtn');

function showSection(id) {
  // Hide all main sections
  sections.forEach((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.style.display = 'none';
  });
  document.getElementById('about').style.display = 'none';
  loginSection.style.display = 'none';

  if (id === 'about') {
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'block';
  } else if (sections.includes(id)) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
  }

  // Active nav link
  navLinks.forEach((link) => link.classList.remove('active'));
  const activeLink = Array.from(navLinks).find(
    (link) => link.dataset.target === id
  );
  if (activeLink) activeLink.classList.add('active');
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    showSection(target);
  });
});

loginBtn.addEventListener('click', () => {
  sections.forEach((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.style.display = 'none';
  });
  document.getElementById('about').style.display = 'none';
  loginSection.style.display = 'block';
  navLinks.forEach((link) => link.classList.remove('active'));
});

// Contact form (mock)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const alertBox = document.getElementById('formAlert');
  alertBox.innerHTML =
    '<div class="alert alert-success">Message sent! We will get back to you soon.</div>';
  this.reset();
});

// Login form (mock)
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert(
    'Login submitted with email: ' + document.getElementById('loginEmail').value
  );
  this.reset();
});

// Signup form (mock)
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert(
    'Signup submitted for: ' +
      document.getElementById('signupEmail').value
  );
  this.reset();
});
