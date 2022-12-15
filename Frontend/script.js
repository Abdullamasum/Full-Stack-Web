const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

//product filtering

/* const search = () => {
  const searchBox = document.getElementById('search-item').ariaValueMax.toUpp;
};
const storeItems = document.getElementById('product-list');
const product = document.querySelectorAll('.product');
const pname = storeItems.getElementsByTagName('h2');

for (let i = 0; i < pname.length; i++) {
  let match = product[i].getElementsByTagName('h2')[0];
  if (match) {
    let textValue = match.textContent || match.innerHTML;

    if (textValue.toUpperCase().indexOf(searchBox) > -1) {
      product[i].style.display = '';
    } else {
      product[i].style.display = 'none';
    }
  }
}
 */
