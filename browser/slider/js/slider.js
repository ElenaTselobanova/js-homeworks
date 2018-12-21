'use strict';

const images = [
    'airmax-jump.png',
    'airmax-on-foot.png',
    'airmax-playground.png',
    'airmax-top-view.png',
    'airmax.png'];

const slider = document.getElementById('slider');
let step = 0;

function showSlider(){
    if (step === images.length) {
        step = 0;
    }
    slider.src = `i/${images[step]}`;
    step += 1;
}

setInterval(showSlider, 5000);
