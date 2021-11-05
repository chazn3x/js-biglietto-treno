// input

const km = parseInt(prompt("Quanti chilometri vuoi percorrere?")), age = parseInt(prompt("Quanti anni hai?"));
let subtotal, discount = 0;

// algoritmo

subtotal = 0.21 * km;
if (age < 18) {
    discount = subtotal / 100 * 20;
}
if (age > 65) {
    discount = subtotal / 100 * 40;
}
subtotal -= discount;

// output

console.log(`Chilometri: ${km}km
Età: ${age} anni
Totale: ${subtotal}€`);