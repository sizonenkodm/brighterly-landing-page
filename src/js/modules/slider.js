const slider = (slidesFieldSelector, slidesSelector, dotsSelector) => {

    const slidesField = document.querySelector(slidesFieldSelector),
        slides = document.querySelectorAll(slidesSelector),
        dots = document.querySelectorAll(dotsSelector);

    let slideIndex = 1;
    let paused = false;

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => {
            if (slide.dataset.slideNum == slides.length) {
                slide.dataset.slideNum = 1;
            } else {
                slide.dataset.slideNum = +slide.dataset.slideNum + 1;
            }
        });

        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex - 1].classList.add('active');
    }

    function nextSlide(n) {
        showSlides(slideIndex += n);
    }

    function activateAnimation() {
        paused = setInterval(function () {
            nextSlide(1);
        }, 7000);
    }

    activateAnimation();

    slidesField.parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slidesField.parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
}

export default slider;