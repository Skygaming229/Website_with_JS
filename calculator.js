let rechnung = [];
let zahl;
let ergebnis;
let divident;
let multipikant;
let zwischenergebnis;

let BTN_addieren = document.getElementById("addieren");
let BTN_subtrahieren = document.getElementById("subtrahieren");
let BTN_multiplizieren = document.getElementById("multiplizieren");
let BTN_dividieren = document.getElementById("dividieren");






function addieren() {
    let zwischenergebnis =+ zahl;
    return zwischenergebnis;
}
function subtrahieren() {
    let zwischenergebnis =- zahl;
    return zwischenergebnis;
}
function multiplizieren() {
    let zwischenergebnis = zahl * multipikant;
    return zwischenergebnis;
}
function dividieren() {
    let zwischenergebnis = zahl/divident;
    return zwischenergebnis;
}