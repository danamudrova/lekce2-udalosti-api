
//ukol breakoutroom

function ztloustni() {
    let odstavec = document.querySelector('p');
    odstavec.style.fontWeight= 'bold';
}

function zhubni() {
    let odstavec = document.querySelector('p')
    odstavec.style.fontWeight= 'initial';
}

//úkol 1 

function red() {
    let pismo = document.querySelector('p');
    pismo.classList.toggle('cerveny');
}

//úkol 2

function big() {
    let pismo = document.getElementById('text');
    let velikost = window.getComputedStyle(pismo, null).getPropertyValue('font-size');
    let currentSize = parseFloat(velikost)
    pismo.style.fontSize = (currentSize + 1) + 'px';
}

//úkol 3

//start

function startAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.play();
}

//pauza

function pause(){
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.pause();
}

//hlasitosti
function mute(){
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 0;
}

function medium(){
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 0.5;
}

function loud(){
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 1;
}

//opakování
function repeat(){
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.pause();
    audioFile.currentTime =0;
    audioFile.play();
}