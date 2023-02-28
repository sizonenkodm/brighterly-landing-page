import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  slider('.description__slider', '.description__slider-item', '.description__slider-indicators li');
  (window.innerWidth < 900) && slider('.feedbacks__wrapper', '.feedbacks__card', '.feedbacks__indicators li');
});