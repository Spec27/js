/* import products from './product.js'; */

// Пишем функцию для создания карточки продуктов

/* console.log(products);
const productContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const productTitleEl = document.createElement('h2');
  productTitleEl.textContent = name;
  productTitleEl.classList.add('product__name');
  productTitleEl.classList.add('title__text');

  const productDescrEl = document.createElement('p');
  productDescrEl.textContent = description;
  productDescrEl.classList.add('product__descr');

  const productPriceEl = document.createElement('p');
  productPriceEl.textContent = `Цена:${price}`;
  productPriceEl.classList.add('product__pridct');
  productEl.append(productTitleEl, productDescrEl, productPriceEl);
  return productEl;
};

console.log(makeProductCard(products[1]));

const elements = products.map(makeProductCard);
console.log(elements);

productContainerEl.append(...elements); */
