// tady je místo pro náš program

//checklist jde do celé třídy
//add - přidává třídu
//remove - odebírá třídu
let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty'); 
nadpis.classList.remove('zluty');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

//toggle - přidá se nebo odebere třída podle toho,co tam je
function zmenStyl() {
nadpis.classList.toggle('zeleny');

}

//udalosti
let pocitadlo = 0;
function priNajetiNaCtverec() {

console.log('test'+pocitadlo);
pocitadlo++;

}
// vlastnosti událostí
function stiskKlavesy(udalost){
    console.log(udalost.key);
}



//ukol breakoutroom

function ztloustni() {
    let odstavec = document.querySelector('p');
    odstavec.style.fontWeight= 'bold';
}


function zhubni() {
    let odstavec = document.querySelector('p')
    odstavec.style.fontWeight= 'initial';
}
//tip: funkce by měly mít let definovanou uvnitř a nikoli globálně,aby to bylo použitelné i pro jindy a jinde

//úkol 1 

function red() {
    let pismo = document.querySelector('p');
    pismo.classList.toggle('cerveny');
}

//úkol 2

function big() {
    
    

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