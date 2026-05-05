document.addEventListener('DOMContentLoaded', () => {
    // 1. Obsługa przycisku CTA (Wejściówka)
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Dziękujemy! Twój kod wejściówki został wysłany na adres e-mail w Twoim profilu studenta.');
        ctaButton.style.backgroundColor = '#4caf50';
        ctaButton.textContent = 'WEJŚCIÓWKA POBRANA!';
    });

    // 2. Efekt hover dla artystów
    const artists = document.querySelectorAll('.artist');
    artists.forEach(artist => {
        artist.addEventListener('mouseenter', () => {
            artist.style.transform = 'scale(1.1)';
            artist.style.color = '#fff';
            artist.style.textShadow = '0 0 10px #00d4ff';
        });
        artist.addEventListener('mouseleave', () => {
            artist.style.transform = 'scale(1)';
            artist.style.color = '#ccc';
            artist.style.textShadow = 'none';
        });
    });

    // 3. Prosta animacja pojawiania się sekcji przy przewijaniu
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.line-up, .info-box');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1s ease-out';
        observer.observe(section);
    });

    // Dodanie klasy 'visible' przez CSS (pamiętaj o dodaniu: .visible { opacity: 1 !important; })
});