let rechnung = [];
let zahl;
let ergebnis;

let zwischenergebnis;

let BTN_addieren = document.getElementById("addButton");
let BTN_subtrahieren = document.getElementById("subtractButton");
let BTN_multiplizieren = document.getElementById("multiplyButton");
let BTN_dividieren = document.getElementById("divideButton");
let Nummer1= document.getElementById("Button1");
let Nummer2= document.getElementById("Button2");
let Nummer3= document.getElementById("Button3"); 
let Nummer4= document.getElementById("Button4");
let Nummer5= document.getElementById("Button5");
let Nummer6= document.getElementById("Button6");
let Nummer7= document.getElementById("Button7");
let Nummer8= document.getElementById("Button8");
let Nummer9= document.getElementById("Button9");
let Nummer0= document.getElementById("Button0");
let BTN_rechnen = document.getElementById("equalsButton");
let cancelButton = document.getElementById("clearButton");
cancelButton.addEventListener("click", clearRechnung);
document.getElementById("outputField"); 
BTN_rechnen.addEventListener("click", rechnen);


if (Nummer1) Nummer1.addEventListener("click", function() { rechnung.push("1"); });
if (Nummer2) Nummer2.addEventListener("click", function() { rechnung.push("2"); });      
if (Nummer3) Nummer3.addEventListener("click", function() { rechnung.push("3"); });
if (Nummer4) Nummer4.addEventListener("click", function() { rechnung.push("4"); });
if (Nummer5) Nummer5.addEventListener("click", function() { rechnung.push("5"); });
if (Nummer6) Nummer6.addEventListener("click", function() { rechnung.push("6"); });
if (Nummer7) Nummer7.addEventListener("click", function() { rechnung.push("7"); });
if (Nummer8) Nummer8.addEventListener("click", function() { rechnung.push("8"); });
if (Nummer9) Nummer9.addEventListener("click", function() { rechnung.push("9"); });  
if (Nummer0) Nummer0.addEventListener("click", function() { rechnung.push("0"); });
if (BTN_addieren) BTN_addieren.addEventListener("click", function() { 
     rechnung.push("+");
 });      
if (BTN_subtrahieren) BTN_subtrahieren.addEventListener("click", function() { 
    rechnung.push("-");

 });
if (BTN_multiplizieren) BTN_multiplizieren.addEventListener("click", function() {
     rechnung.push("*");
 });
if (BTN_dividieren) BTN_dividieren.addEventListener("click", function() {
    rechnung.push("/");
 });






function clearRechnung() {
    rechnung = [];
}

function rechnen() {
    document.getElementById("outputField").textContent = rechnung.join("");
}