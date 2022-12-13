'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// get query parameter
const getQParam = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
};

// get id from address
const product_id = getQParam('id');

// select existing html elements
const img = document.querySelector('#image img');

// add existing product data to form
const getproduct = async (id) => {
  const fetchOptions = {
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  };
  const response = await fetch(url + '/product/' + id, fetchOptions);
  const product = await response.json();
  img.src = `${url}/${product.filename}`;
  addMarker(JSON.parse(product.coords));
};

getproduct(product_id);