document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero.classList.add('animate');
            } else {
                hero.classList.remove('animate');
            }
        });
    });

    observer.observe(hero);
});

// script.js
let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    updateNavBars();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const newPosition = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + newPosition + ')';
}

function updateNavBars() {
    const navBars = document.querySelectorAll('.nav-bar');
    navBars.forEach((navBar, index) => {
        if (index === currentIndex) {
            navBar.classList.add('active');
        } else {
            navBar.classList.remove('active');
        }
    });
}

function autoPlay() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % 5;
        updateCarousel();
        updateNavBars();
    }, 5000); // 5 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    autoPlay();
    updateCarousel();
    updateNavBars();
});
