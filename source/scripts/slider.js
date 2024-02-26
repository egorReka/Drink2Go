const slider = document.querySelector('.slider')
const sliderList = slider.querySelector('.slider__list');
const sliderItems = slider.querySelectorAll('.slider__item');
const sliderPaginations = slider.querySelectorAll('.slider-pagination__item');

const buttonLeft = slider.querySelector('.slider__button--left');
const buttonRight = slider.querySelector('.slider__button--right');

let countPercentStep = 0;
let countCurentSlide = 0;

const toggleButton = (pressedButton) => {
  if (countCurentSlide === 0 || countCurentSlide === sliderItems.length - 1) {
    pressedButton.disabled = true;

    return;
  }

  if (buttonLeft === pressedButton) {
    buttonRight.disabled = false;

    return;
  }

  if (buttonRight === pressedButton) {
    buttonLeft.disabled = false;
  }
};

const sliderInit = () => {
  buttonLeft.addEventListener('click', function () {
    sliderList.style.transform = `translateX(${100 + countPercentStep}%)`;
    countPercentStep += 100;
    countCurentSlide -= 1;
    slider.querySelector('.slider-pagination__item--current').classList.remove('slider-pagination__item--current');
    sliderPaginations[countCurentSlide].classList.add('slider-pagination__item--current');
    toggleButton(this);
  });

  buttonRight.addEventListener('click', function () {

    sliderList.style.transform = `translateX(${-100 + countPercentStep}%)`;
    countPercentStep -= 100;
    countCurentSlide += 1;
    slider.querySelector('.slider-pagination__item--current').classList.remove('slider-pagination__item--current');
    sliderPaginations[countCurentSlide].classList.add('slider-pagination__item--current');
    toggleButton(this);
  });
};

export { sliderInit };
