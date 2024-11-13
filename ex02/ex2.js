function sumaCifrelor(numar) {
   
    if (numar < 1000 || numar > 9999) {
      console.log("Introduceti un numar de 4 cifre.");
      return;
    }
  
    let suma = 0;
  
   
    while (numar > 0) {
      suma += numar % 10; 
      numar = Math.floor(numar / 10);  
    }
  
    return suma;
  }
  
  // Introdu numarul:
  let numar = 1654;
  console.log("Suma cifrelor este: " + sumaCifrelor(numar));
  