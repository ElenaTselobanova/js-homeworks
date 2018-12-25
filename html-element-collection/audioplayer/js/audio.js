'use strict';

const songs = [
    'LA Chill Tour',
    'This is it band',
    'LA Fusion Jam'];

const player = document.getElementsByClassName('mediaplayer')[0];
const playstate = player.getElementsByClassName('playstate')[0];
const stop = player.getElementsByClassName('stop')[0];
const next = player.getElementsByClassName('next')[0];
const back = player.getElementsByClassName('back')[0];
const songTitle = player.getElementsByClassName('title')[0];
const audio = player.getElementsByTagName('audio')[0];

let i = 0;

function playSong() {
    audio.src = `./mp3/${songs[i]}.mp3`;
    songTitle.title = `${songs[i]}`;
    player.classList.add('play');
    audio.play();
}

next.onclick = function() {
    if (i >= songs.length - 1) {
        i = 0;
    } else {
        i++;
    }
    if(player.classList.contains('play')) {
        playSong();
    } else {
        audio.src = `./mp3/${songs[i]}.mp3`;
        songTitle.title = `${songs[i]}`;
    }
};

back.onclick = function() {
    if (i <= 0) {
        i = songs.length - 1;
    } else {
        i--;
    }
    if(player.classList.contains('play')) {
        playSong();
    } else {
        audio.src = `./mp3/${songs[i]}.mp3`;
        songTitle.title = `${songs[i]}`;
    }
};

playstate.onclick = function() {
    if (!player.classList.contains('play')) {
        audio.play();
        player.classList.add('play');
    } else {
        audio.pause();
        player.classList.remove('play');
    }
};

stop.onclick = function() {
    audio.pause();
    audio.currentTime = 0;
    player.classList.remove('play');
};
