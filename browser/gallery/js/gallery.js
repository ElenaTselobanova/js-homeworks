'use strict';
const gallery = document.getElementById('currentPhoto');
const images = [
    'breuer-building',
    'guggenheim-museum',
    'headquarters',
    'IAC',
    'new-museum'
];

let step = -1;

const next = document.getElementById('nextPhoto');
const prev = document.getElementById('prevPhoto');

gallery.src = `i/${images[0]}.jpg`;

function currentPhoto() {
    gallery.src = `i/${images[step]}.jpg`;
}

function nextPhoto() {
    step += 1;
    if (step === images.length) {
        step = 0;
    }
    currentPhoto();
}

function prevPhoto() {
    step -= 1;
    if (step < 0) {
        step = images.length - 1;
    }
    currentPhoto ();
}

next.onclick = nextPhoto;
prev.onclick = prevPhoto;




