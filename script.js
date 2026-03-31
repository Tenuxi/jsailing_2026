// Valitaan elementit
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Kuunnellaan klikkausta hampurilaiskuvakkeessa
menuToggle.addEventListener('click', function() {
    // Lisätään tai poistetaan 'active' ja 'is-active' luokat
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

// Suljetaan valikko, kun linkkiä klikataan (hyvä käyttökokemus ankkurilinkeillä)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});