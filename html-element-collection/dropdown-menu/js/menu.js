'use strict'

const menu = document.getElementsByClassName('wrapper-dropdown')[0];
menu.onclick = function () {
    if (menu.classList.contains('wrapper-dropdown')) {
        return menu.classList.toggle('active');
    }
}