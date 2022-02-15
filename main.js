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