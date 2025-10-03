'use strict'

// Burger-btn
document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.burger-btn');
    const menu = document.querySelector('.menu');

    if (burgerBtn && menu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });

        document.querySelectorAll('.menu-list a').forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }
});