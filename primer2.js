'use strict';
// Колекция Разметки
// Создаем кнопки с массива обектов
/* const colorPictureOption = [
  { label: 'gren', color: '#00FF7F' },
  { label: 'red', color: '#FF0000' },
  { label: 'blue', color: '#0000FF' },
  { label: 'grey', color: '#808080' },
  { label: 'pink', color: '#FFC0CB' },
  { label: 'Yellow ', color: '#FFFF00' },
  { label: 'orange', color: '#FFA500' },
]; */

// С помощю метода Map()
/* const colorPicterContainerEl = document.querySelector('.js-color-picker');
const elements = colorPictureOption.map(option => {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('site-nav__button--style');
  buttonEl.type = 'button';
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;
  return buttonEl;
});
console.log(elements);
colorPicterContainerEl.append(...elements); */

// С помощью функции
/* const colorPicterContainerEl = document.querySelector('.js-color-picker');
const griatecolorPictureOption = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('site-nav__button--style');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    return buttonEl;
  });
};
const elements = griatecolorPictureOption(colorPictureOption);
colorPicterContainerEl.append(...elements);
 */

// ОЛДСКУЛ c помощью цикла For
/* const elements = [];

for (let i = 0; i < colorPictureOption.length; i += 1) {
  const option = colorPictureOption[i];
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('site-nav__button--style');
  buttonEl.type = 'button';
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;
  elements.push(buttonEl);
} */
/* colorPicterContainer.append(...elements); */
