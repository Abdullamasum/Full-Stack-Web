"use strict";

const url = "http://localhost:3000"; // change url when uploading to server

const ul = document.querySelector("ul");

const getProduct = async () => {
  const response = await fetch(url + "/product");

  const products = await response.json();

  for (const product of products) {
    const user = await getUser(product.first_name);

    ul.innerHTML += `

<li>
<p>Categorty: ${products.product_category}kg</p>
<h2>${products.product_name}</h2>

<figure>

<img src="${products.product_media}" class="resp">

</figure>

<p>Details: ${products.product_details}</p>





</li>

`;
  }
};

const getUser = async (id) => {
  const response = await fetch(url + "/user/" + id);

  const user = await response.json();

  return user;
};

getCat();
