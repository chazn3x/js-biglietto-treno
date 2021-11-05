// input

let km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
while ((isNaN(km)) || (km < 0)) {
    km = parseInt(prompt("Inserisci un numero di chilometri valido:"));
}
let age = parseInt(prompt("Quanti anni hai?"));
while ((isNaN(age)) || (age < 0) || (age > 120)) {
    age = parseInt(prompt("Inserisci un'età valida:"));
}
let subtotal, discount = 0;

// algoritmo

subtotal = 0.21 * km;
if (age < 18) {
    discount = subtotal / 100 * 20;
}
if (age >= 65) {
    discount = subtotal / 100 * 40;
}
subtotal -= discount;
subtotal = subtotal.toFixed(2);

// output

console.log(`Chilometri: ${km}km
Età: ${age} anni
Totale: ${subtotal}€`);