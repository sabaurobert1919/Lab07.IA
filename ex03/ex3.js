// Functie pentru ma a unui numar de 6 cifre:
function mediaAritmetica(num) {
    let suma = 0;
    let cifre = num.toString().split('');
    for (let i = 0; i < cifre.length; i++) {
          suma += parseInt(cifre[i]);
    }
    return suma / cifre.length;
}

// Functie pentru mg a unui nr de 6 cifre:
function mediaGeometrica(num) {
    let produs = 1;
    let cifre = num.toString().split('');
    for (let i = 0; i < cifre.length; i++) {
          produs *= parseInt(cifre[i]);
    }
    return Math.pow(produs, 1 / cifre.length); // Calculam radacina a 6-a
}

// Exemplu de numar:
let numar = 333333;

// Calcularea mediilor
let ma = mediaAritmetica(numar);
let mg = mediaGeometrica(numar);

// Afisarea rezultatelor
console.log("Media aritmetica: " + ma);
console.log("Media geometrica: " + mg);
