// Animation au défilement
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Observer les sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Animation des compétences
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const level = card.querySelector('.skill-level');
        level.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', () => {
        const level = card.querySelector('.skill-level');
        level.style.transform = 'scale(1)';
    });
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulation d'envoi du formulaire
    const button = e.target.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Envoi en cours...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Message envoyé !';
        e.target.reset();
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }, 1500);
});

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});