"use strict";

var menu = document.querySelector('.nav');
var btnOpen = document.querySelector('.mob__btn');
var btnClose = document.querySelector('.close__btn');
var navLink = document.querySelectorAll('.nav__link');
btnOpen.addEventListener('click', function (e) {
  menu.classList.add('nav-open');
  btnClose.classList.remove('opacityNull');

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.add('opacity');
  }
});
btnClose.addEventListener('click', function (e) {
  menu.classList.remove('nav-open');
  btnClose.classList.add('opacityNull');

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.remove('opacity');
  }
});