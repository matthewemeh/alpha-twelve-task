"use strict";
let activeSlideIndex = 0;
const slides = [
    {
        headline: 'Latest News & Updates',
        imgSrc: '/dist/assets/carousel-images/slide-1.png',
        news: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
    },
    {
        headline: 'Latest News & Updates',
        imgSrc: '/dist/assets/carousel-images/slide-2.png',
        news: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
    },
    {
        headline: 'Latest News & Updates',
        imgSrc: '/dist/assets/carousel-images/slide-3.png',
        news: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
    },
];
function nextSlide() {
    const reachedEnd = activeSlideIndex === slides.length - 1;
    if (reachedEnd) {
        scrollElement({ toLeft: true, target: '.slides' });
    }
    else {
        scrollItems('next', '.slides');
    }
    activeSlideIndex = modulo(activeSlideIndex + 1, slides.length);
    document.querySelector('.news').textContent = slides[activeSlideIndex].news;
    document.querySelector('.headline').textContent = slides[activeSlideIndex].headline;
    const lastActiveSlideIndicator = document.querySelector('.slide-indicator.active');
    removeClass(lastActiveSlideIndicator, 'active');
    const activeSlideIndicator = document
        .querySelectorAll('.slide-indicator')
        .item(activeSlideIndex);
    addClass(activeSlideIndicator, 'active');
}
function previousSlide() {
    const reachedStart = activeSlideIndex === 0;
    if (reachedStart) {
        scrollElement({ toRight: true, target: '.slides' });
    }
    else {
        scrollItems('previous', '.slides');
    }
    activeSlideIndex = modulo(activeSlideIndex - 1, slides.length);
    document.querySelector('.news').textContent = slides[activeSlideIndex].news;
    document.querySelector('.headline').textContent = slides[activeSlideIndex].headline;
    const lastActiveSlideIndicator = document.querySelector('.slide-indicator.active');
    removeClass(lastActiveSlideIndicator, 'active');
    const activeSlideIndicator = document
        .querySelectorAll('.slide-indicator')
        .item(activeSlideIndex);
    addClass(activeSlideIndicator, 'active');
}
function loadCarousel(carouselID) {
    const carousel = document.getElementById(carouselID);
    let slideIndicators = '';
    let carouselItems = '';
    slides.forEach(({ imgSrc }, index) => {
        slideIndicators += `<button class="slide-indicator ${index === 0 && 'active'}"></button>`;
        carouselItems += `<div class="carousel-item" style="background: center/cover no-repeat url(${imgSrc})"></div>`;
    });
    carousel.innerHTML += `<div class="slides no-scrollbar">${carouselItems}</div>`;
    const [firstSlide] = slides;
    carousel.innerHTML += `
    <article class="caption">
        <p class="headline">${firstSlide.headline}</p>
        <p class="news">${firstSlide.news}</p>
        <div class="slide-indicators">${slideIndicators}</div>
    </article>
  `;
    carousel.innerHTML += `
    <button class="carousel-btn left" onclick="previousSlide()">
        <img src="./assets/icons/chevron-left-sm.svg" width="4" height="8" alt="" />
    </button>
    <button class="carousel-btn right" onclick="nextSlide()">
        <img src="./assets/icons/chevron-right-sm.svg" width="4" height="8" alt="" />
    </button>
  `;
}
window.addEventListener('load', () => {
    loadCarousel('news-carousel');
});
