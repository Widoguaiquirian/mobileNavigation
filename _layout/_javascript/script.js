'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

openBtn.addEventListener('click', function () {
  navs.forEach(function (nav) {
    nav.classList.add('visible');
  });
});

closeBtn.addEventListener('click', function () {
  navs.forEach(function (nav) {
    nav.classList.remove('visible');
  });
});
