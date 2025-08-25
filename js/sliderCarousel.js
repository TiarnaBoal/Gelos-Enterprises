const sliderControls = document.querySelector('.slider-controls');
const slides = document.querySelector('.slides-container');
const pagination = document.querySelector('.slider-pagination');

const slideCount = slides.children.length;
let currentIndex = 0;
let autoSlide;

// generate dots based on no. of slides
for (let  i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-pagination-dot');
    // set first dot as active
    if (i == 0)dot.classList.add('slider-pagination-dot--active');
    pagination.appendChild(dot);

    // add click event to each dot for manual navigation
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
    });
}

const dots = document.querySelectorAll('.slider-pagination-dot');

// function to update the slide position & active dot
function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('slider-pagination-dot--active'));
    dots[currentIndex].classList.add('slider-pagination-dot--active');
}

// control functionality
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

// previous button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
});

// next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
});

// auto slide functionality
function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 8000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// start auto-slide
startAutoSlide();

// pause auto-slide on hover
slides.addEventListener('mouseover', stopAutoSlide);

// resume auto-slide on mouse out
slides.addEventListener('mouseout', startAutoSlide);