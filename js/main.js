const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Переключаем видимость меню
    burgerMenu.classList.toggle('active');
});
