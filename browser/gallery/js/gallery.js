'use strict';
const gallery = document.getElementById('currentPhoto');
const images = [
    'breuer-building.jpg',
    'guggenheim-museum.jpg',
    'headquarters.jpg',
    'IAC.jpg',
    'new-museum.jpg'
];

let step = -1;

const next = document.getElementById('nextPhoto');
const prev = document.getElementById('prevPhoto');


function nextPhoto() {
    step += 1;
    if (step === images.length) {
        step = 0;
    }
    gallery.src = `i/${images[step]}`;
}

function prevPhoto() {
    step -= 1;
    if (step < 0) {
        step = images.length - 1;
    }
    gallery.src = `i/${images[step]}`;
}

next.onclick = nextPhoto;
prev.onclick = prevPhoto;


