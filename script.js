const slides = document.querySelectorAll('.feedback-slide');
const sliderLine = document.getElementById('carousel-feedback');

let count = 0;

let width;

let scale;

function calculationWidth() {
    width = document.querySelector('.carousel-feedback-block').offsetWidth;
    
    if (width > 650) {
        width = 730;
        scale = 0.5;
    } 
    else {
        width = 365;
        scale = 1;
    }
}

calculationWidth();

document.getElementById('next-btn-feedback').addEventListener('click', function () {
    count += scale;
    console.log(count);
    if ((count > 2 && scale == 0.5) || (count > 5 && scale == 1)) {
        count = 0;
    }
    rollSlider();
});

document.getElementById('prev-btn-feedback').addEventListener('click', function () {
    count -= scale;
    console.log(count);
    if (count < 0 && scale == 0.5) {
        count = 2;
    } 
    else if (count < 0 && scale == 1) {
        count = 5;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'; ;
};