const song = [{
        name: "song1",
        title: "Lotus lane",
        artist: "Loyalist",
    }, {
        name: "song2",
        title: "Sappherious",
        artist: "Aurora",
    },
    {
        name: "song3",
        title: "Walking Firiri",
        artist: "Gorkhali Takma",
    }
];

let i = 1;
let song_name = document.getElementById('song_name');
let artist = document.getElementById('artist');
let img = document.querySelector('img');
let audio = document.querySelector('audio');
let prev = document.getElementById('prev');
let play = document.getElementById('play');
let next = document.getElementById('next');
let isplay = false;



function load(i) {
    song_name.innerHTML = song[i].title;
    artist.innerHTML = song[i].artist;

    img.src = "img/" + song[i].name + ".jpg";
    audio.src = "music/" + song[i].name + ".mp3";
}

load(i);

function playbtn() {
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
    isplay = true;
    audio.play();


}

function pausebtn() {
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
    isplay = false;
    audio.pause();


}



play.addEventListener('click', () => {
    if (isplay) {
        pausebtn();
    } else {
        playbtn();
    }
})

prev.addEventListener('click', () => {
    i--;
    if (isplay) pausebtn();
    if (i < 0) {
        i = song.length - 1;
        load(i);

    } else {
        load(i);

    }


});

next.addEventListener('click', () => {

    i++;
    if (isplay) pausebtn();
    if (i == song.length) {
        i = 0;
        load(i);
    } else {
        load(i);
    }

});