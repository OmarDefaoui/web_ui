const slides = document.querySelectorAll('.image');
const image = document.querySelector('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const productName = document.getElementById('product_name');
const indicators = document.querySelectorAll('.indicator');

const PRODUCTS_TITLE = ['Performance', 'Design', 'Comodity', 'Lightness'];
const BACKGROUNDS_COLOR = ['#cb021c', '#E0E1E3', '#F6F7F9', '#3F4346'];
const TEXT_COLOR = ['#ffffff', '#000000', '#000000', '#ffffff'];

const SLIDES_COUNT = slides.length;
let currentSlide = 0;
indicators[0].style.background = `white`;

right.addEventListener('click', () => {
    console.log('right button clicked');
    currentSlide++;
    if (currentSlide > SLIDES_COUNT - 1)
        currentSlide = 0;

    updateSlider();
});

left.addEventListener('click', () => {
    console.log('left button clickde');
    currentSlide--;
    if (currentSlide < 0)
        currentSlide = SLIDES_COUNT - 1;

    updateSlider();
});

function updateSlider() {
    // Change displayed picture
    image.style.transform = `translateX(${-currentSlide * slides[0].offsetWidth}px)`;

    document.body.style.background = BACKGROUNDS_COLOR[currentSlide];
    productName.innerHTML = PRODUCTS_TITLE[currentSlide];
    productName.style.color = TEXT_COLOR[currentSlide];

    // Change selected indicator color
    indicators.forEach((indicator) => {
        indicator.style.background = `rgba(255, 255, 255, 0.6)`;
    });
    indicators[currentSlide].style.background = `white`;
}