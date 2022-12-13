'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// select existing html elements
const signin = document.querySelector('#login-form');
const addUserForm = document.querySelector('#add-user-form');

// login
loginForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(signin);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url + '/auth/signin', fetchOptions);
  const json = await response.json();
  console.log('login response', json);
  if (!json.user) {
    alert(json.message);
  } else {
    // save token
    sessionStorage.setItem('token', json.token);
    sessionStorage.setItem('user', JSON.stringify(json.user));
    location.href = 'buy.html';
  }
});

