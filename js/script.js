// input

let km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
// controllo input se non è un numero o se è un numero negativo
while ((isNaN(km)) || (km < 0)) {
    km = parseInt(prompt("Inserisci un numero di chilometri valido:"));
}
let age = parseInt(prompt("Quanti anni hai?"));
// controllo input se non è un numero o se è un numero negativo o se è un numero troppo grande
while ((isNaN(age)) || (age < 0) || (age > 120)) {
    age = parseInt(prompt("Inserisci un'età valida:"));
}
let subtotal, discount = 0;


// algoritmo

subtotal = 0.21 * km;
if (age < 18) { // sconto minorenni
    discount = subtotal / 100 * 20;
}
if (age >= 65) { // sconto over 65
    discount = subtotal / 100 * 40;
}
subtotal -= discount; // applicazione sconto
subtotal = subtotal.toFixed(2); // arrotonda alla seconda cifra decimale


// output

console.log(`Chilometri: ${km}km
Età: ${age} anni
Totale: ${subtotal}€`);