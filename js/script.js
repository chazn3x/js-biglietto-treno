// input

let km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
// controllo input se non è un numero o se è un numero negativo
while ((isNaN(km)) || (km < 0)) {
    km = parseInt(prompt("Inserisci un numero di chilometri valido:"));
}
document.getElementById("km").innerHTML = km + "km";
let age = parseInt(prompt("Quanti anni hai?"));
// controllo input se non è un numero o se è un numero negativo o se è un numero troppo grande
while ((isNaN(age)) || (age < 0) || (age > 120)) {
    age = parseInt(prompt("Inserisci un'età valida:"));
}
document.getElementById("age").innerHTML = age + " anni";
let subtotal, discount;


// algoritmo

subtotal = 0.21 * km;
if (age < 18) { // sconto minorenni
    discount = subtotal / 100 * 20;
    document.getElementById("discount").innerHTML = "-20%";
    document.getElementById("info").innerHTML = "*Il costo è di 0,21€ al chilometro, con uno sconto applicato del 20% per gli under 18.";
} else if (age >= 65) { // sconto over 65
    discount = subtotal / 100 * 40;
    document.getElementById("discount").innerHTML = "-40%";
    document.getElementById("info").innerHTML = "*Il costo è di 0,21€ al chilometro, con uno sconto applicato del 40% per gli over 65.";
} else {
    discount = 0;
    document.getElementById("discount-div").innerHTML = "";
    document.getElementById("info").innerHTML = "*Il costo è di 0,21€ al chilometro.";
}
subtotal -= discount; // applicazione sconto
subtotal = subtotal.toFixed(2); // arrotonda alla seconda cifra decimale
document.getElementById("subtotal").innerHTML = "<strong>" + subtotal + "€</strong>";


// output

console.log(`Chilometri: ${km}km
Età: ${age} anni
Totale: ${subtotal}€`);