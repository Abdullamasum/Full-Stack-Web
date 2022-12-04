'use strict';
const productArray = [
    {
        'title': 'Kitchen',
        'caption': 'Microwave',
        'description':'good conbdition',
        'filename': 'img/micro.jpg'
    },
    {
        'title': 'furniture',
        'caption': 'chair',
        'description':'nice style',
        'filename': 'img/chair.jpg
    },
    {
        'title': 'bathroom',
        'caption': 'cupboard',
        'description':'spacious',
        'filename': 'img/micro.jpg
    },
    {
        'title': 'footware',
        'caption': 'shoes',
        'description':'comfortable',
        'filename': 'img/shoes.jpg
    },
];


const main = document.querySelector('main');

productArray.forEach((product) => {
    main.innerHTML += `<article>
            <header>
                <h2>${product.title}</h2>
            </header>
            <figure>
                <img src="${product.filename}" alt="${product.title}">
                <figcaption>${product.caption}</figcaption>
            </figure>
            <p>${product.description}</p>
        </article>`;