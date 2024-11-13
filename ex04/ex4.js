// Functie care verifica daca 3 laturi pot forma un triunghi:
function esteTriunghi(a, b, c) {
    // Verificam conditiile triunghiului:
    if (a + b > c && a + c > b && b + c > a) {
        return true;  // Laturile pot forma un triunghi
    } else {
        return false; // Laturile nu pot forma un triunghi
    }
}

// Citim laturile de la tastatura:
let a = parseFloat(prompt("Introduceti lungimea primei laturi:"));
let b = parseFloat(prompt("Introduceti lungimea a doua laturi:"));
let c = parseFloat(prompt("Introduceti lungimea a treia laturi:"));

// Verificam si afisam rezultatul:
if (esteTriunghi(a, b, c)) {
    alert("Laturile pot forma un triunghi.");
} else {
    alert("Laturile NU pot forma un triunghi.");
}
