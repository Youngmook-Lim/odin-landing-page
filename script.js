"use strict";

console.log("hello world");
const btns = document.querySelectorAll(".cta-btn");

btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    console.log("Hi, I'm a button");
  })
);
