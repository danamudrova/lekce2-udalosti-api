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
nadpis.classList.toggle('zeleny')

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

function startAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.play();
}

//ukol breakoutroom

function ztloustni() {
    let odstavec = document.querySelector('p')
    odstavec.style.fontWeight= 'bold';
}


function zhubni() {
    let odstavec = document.querySelector('p')
    odstavec.style.fontWeight= 'initial';
}
//tip: funkce by měly mít let definovanou uvnitř a nikoli globálně,aby to bylo použitelné i pro jindy a jinde

//úkol 1

function cervena() {

}

//úkol 2