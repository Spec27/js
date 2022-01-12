/* {
  const tergetBtn = document.querySelector('.js-target-btn');
  const addListenerBtn = document.querySelector('.js-add-listener');
  const removeListenerBtn = document.querySelector('.js-remove-listener');

  addListenerBtn.addEventListener('click', event => {
    console.log(event);
    console.log('Вешаю слушателя на целевую кнопку');
    tergetBtn.addEventListener('click', oneTargetBtnClick);
  });

  removeListenerBtn.addEventListener('click', event => {
    console.log('Снимаю слушателя с целевой кнопки');
    tergetBtn.removeEventListener('click', oneTargetBtnClick);
  });

  function oneTargetBtnClick(event) {
    console.log('Повешал слушателя на целевую кнопку');
  }
} */

//  Слушатель форм
{
  const btnEl = document.querySelector('.btn');
  btnEl.classList.add('js-btn');
  const formEl = document.querySelector('.form');
  formEl.addEventListener('submit', oneFormSubmit);

  function oneFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => {
      console.log(value);
      console.log(name);
    });
  }
}
