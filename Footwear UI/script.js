const slides = document.querySelectorAll('.image');
const image = document.querySelector('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const SLIDES_COUNT = slides.length;
let currentSlide = 0;

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

function updateSlider(){
    image.style.transform = `translateX(${currentSlide*slides[0].offsetWidth}px)`;
    console.log(currentSlide*slides[0].offsetWidth);
}