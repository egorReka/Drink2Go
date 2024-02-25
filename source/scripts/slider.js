const sliderList = document.querySelector('.slider__list');
const buttonLeft = document.querySelector('.slider__button--left');
const buttonRight = document.querySelector('.slider__button--right');

const sliderInit = () => {
  buttonLeft.addEventListener('click', () => {
    console.log('buttonLeft');
    sliderList.classList.add('slider__list--move-left');
  });

  buttonRight.addEventListener('click', () => {
    console.log('buttonRight');
    sliderList.classList.add('slider__list--move-right');
  });

};

export { sliderInit };
