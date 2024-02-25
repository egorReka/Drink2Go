const range = document.querySelector('.filter-price__range');
const inputMin = document.querySelector('.filter-price__input--min');
const inputMax = document.querySelector('.filter-price__input--max');
const buttonReset = document.querySelector('.filter-button__reset');

const settingsRangeSlider = {
  range: { 'min': 0, 'max': 1000 },
  start: [0, 900],
  step: 1,
  connect: true,
};

const rangeSliderInit = () => {
  if (!range || !inputMin || !inputMax) {
    return;
  }

  noUiSlider.create(range, settingsRangeSlider);

  const inputs = [inputMin, inputMax];

  range.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = +values[handle];
  });

  inputMin.addEventListener('change', function() {
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function() {
    range.noUiSlider.set([null, this.value]);
  });

  buttonReset.addEventListener('click', () => {
    range.noUiSlider.reset();
  });
};

export { rangeSliderInit };
