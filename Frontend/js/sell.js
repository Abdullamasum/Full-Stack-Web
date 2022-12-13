// "use strict";

// const url = "http://localhost:3000"; // change url when uploading to server

// // const ul = document.querySelector("ul");


// const getProduct = async () => {
//   const response = await fetch(url + "/product");

//   const products = await response.json();

//   for (const product of products) {
//     const user = await getUser(product.name);

//     ul.innerHTML += `

// <li>
// <p>Categorty: ${products.category}kg</p>
// <h2>${products.name}</h2>

// <figure>

// <img src="${products.filename}" class="resp">

// </figure>

// <p>Details: ${products.details}</p>





// </li>

// `;
//   }
// };

// const getUser = async (id) => {
//   const response = await fetch(url + "/user/" + id);

//   const user = await response.json();

//   return user;
// };

// getCat();

'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// select existing html elements
const addForm = document.querySelector('#addProductForm');
// const userList = document.querySelector('.add-owner');

// submit add cat form
addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: fd,
  };
  const response = await fetch(url + '/cat', fetchOptions);
  const json = await response.json();
  alert(json.message);
  location.href = 'front.html';
});

