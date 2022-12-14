'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// select existing html elements
// const ul = document.querySelector('#list');

// get user data for admin check
const user = JSON.parse(sessionStorage.getItem('user'));

// create product cards
const createProductCards = (products) => {
  // clear ul
  ul.innerHTML = '';
  products.forEach((product) => {
    // create li with DOM methods
    const img = document.createElement('img');
    img.src = url + '/thumbnails/' + product.filename;
    img.alt = product.name;
    img.classList.add('resp');

    // open image in single.html
    img.addEventListener('click', () => {
      location.href = 'single.html?id=' + product.product_id;
    });

    const figure = document.createElement('figure').appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerHTML = product.name;

    const p1 = document.createElement('p');
    p1.innerHTML = `Posting Date: ${product.posting_date}`;

    const p2 = document.createElement('p');
    p2.innerHTML = `Details: ${product.details}kg`;

    // const p3 = document.createElement('p');
    // p3.innerHTML = `Address: ${product.address}`;

    const li = document.createElement('li');
    li.classList.add('light-border');

    li.appendChild(h2);
    li.appendChild(figure);
    li.appendChild(p1);
    li.appendChild(p2);
    // li.appendChild(p3);
    ul.appendChild(li);
    // if (user.role === 0 || user.user_id === product.seller) {
    //   // link to modify form
    //   const modButton = document.createElement('a');
    //   modButton.innerHTML = 'Modify';
    //   modButton.href = `modify-product.html?id=${product.product_id}`;
    //   modButton.classList.add('button');

//       // delete selected product
//       const delButton = document.createElement('button');
//       delButton.innerHTML = 'Delete';
//       delButton.classList.add('button');
//       delButton.addEventListener('click', async () => {
//         const fetchOptions = {
//           method: 'DELETE',
//           headers: {
//             Authorization: 'Bearer ' + sessionStorage.getItem('token'),
//           },
//         };
//         try {
//           const response = await fetch(
//             url + '/product/' + product.product_id,
//             fetchOptions
//           );
//           const json = await response.json();
//           console.log('delete response', json);
//           getproduct();
//         } catch (e) {
//           console.log(e.message);
//         }
//       });

//       li.appendChild(modButton);
//       li.appendChild(delButton);
//     }
  });
};

// AJAX call
const getproduct = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/product', fetchOptions);
    const products = await response.json();
    createproductCards(products);
  } catch (e) {
    console.log(e.message);
  }
};
getproduct();
