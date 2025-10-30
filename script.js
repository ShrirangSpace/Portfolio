// small scripts: set year and optional form success message handling
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', () => {
    // user will be redirected by Formspree; optionally show a temporary message
    // nothing needed here for basic functionality
  });
}