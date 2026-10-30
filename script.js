// 1. Dark / Light Mode Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Light Mode';
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
    }
});

// 2. Contact Form Validation & Success Alert
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    const name = document.getElementById('name').value;
    
    if (name.trim() !== "") {
        successMsg.textContent = `Thank you ${name}! Your message has been sent successfully.`;
        successMsg.style.color = 'green';
        form.reset();
    }
});