const TEXT_CLOSED = 'Открыть меню.';
const TEXT_OPEN = 'Закрыть меню.';

const nav = document.querySelector('.nav');
const toggleNavButton = document.querySelector('.burger');
const burgerText = toggleNavButton.querySelector('.burger__text');

const toggleNavInit = () => {
  toggleNavButton.addEventListener('click', () => {
    if (toggleNavButton.classList.contains('burger--active')) {
      toggleNavButton.classList.remove('burger--active');
      burgerText.textContent = TEXT_CLOSED;
      nav.classList.remove('nav--active');
    } else {
      toggleNavButton.classList.add('burger--active');
      burgerText.textContent = TEXT_OPEN;
      nav.classList.add('nav--active');
    }
  });
};

export {toggleNavInit};
