let title = document.querySelector("title");
let h1 = document.querySelector("h1");
title.innerText = h1.innerText;

h1.classList.add('h1');
h1.classList;

let h3 = document.querySelectorAll("h3");
h3.forEach(function (element) {
    element.classList.add('h3')
})