
const revealSections = document.querySelectorAll('header, section, footer');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, { threshold: 0.1 });
revealSections.forEach(section => observer.observe(section));

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Hide menu on nav-link click (for mobile view)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (window.innerWidth <= 600) {
            navMenu.classList.remove('active');
        }
    });
});

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');

    body.classList.toggle('light');

    const isLight = body.classList.contains('light');
    themeToggleBtn.textContent = isLight ? '🌙✨' : '☀️';
}

let isKorean = false;

function toggleLang() {
    isKorean = !isKorean;

    // Update all elements with data-en / data-ko attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = isKorean ? el.dataset.ko : el.dataset.en;
        if (el.tagName === 'INPUT') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });

    // Update the translate button text/icon
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) {
        translateBtn.innerHTML = isKorean
            ? '🇬🇧 English'
            : '🇰🇷 한국어로 읽기';
    }
}