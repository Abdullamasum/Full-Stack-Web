"use strict";
const url = "http://localhost:3000"; // change url when uploading to server

// select existing html elements
const addProductForm = document.querySelector("#addProductForm");
const userList = document.querySelector(".add-owner");

// submit add product form
addProductForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addProductForm);
  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: fd,
  };
  const response = await fetch(url + "/product", fetchOptions);
  const json = await response.json();
  alert(json.message);
  location.href = "buy.html";
});
