'use strict';

let menuItems = document.querySelectorAll('.menu-item');
let body = document.querySelector('body');
let title = document.querySelector('.title');
let adv = document.querySelectorAll('.adv');
let appleAttitude = prompt('Ваше отношегие к технике Apple?');

menuItems[1].before(menuItems[2]);
menuItems[3].insertAdjacentHTML('afterend', '<li class="menu-item">Пятый пункт</li>');

body.style.backgroundImage = ('url("img/apple_true.jpg")');

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.forEach(function (item) {
  item.remove();
});