'use strict'

const drum = document.getElementsByClassName('drum-kit__drum');
const audio = document.getElementsByTagName('audio');

for (let i = 0; i	< audio.length; i++) {
    drum[i].onclick = () => audio[i].play();
}