let texto = prompt("Ingrese un texto:");

function esVocal(caracter) {
  let vocales = ["a", "e", "i", "o", "u"];
  return vocales.includes(caracter.toLowerCase());
}

function encontrarPosicionPrimeraVocal(texto) {
  for (let i = 0; i < texto.length; i++) {
    if (esVocal(texto[i])) {
      return i + 1; 
    }
  }
  return -1; 
}


let posicionVocal = encontrarPosicionPrimeraVocal(texto);


if (posicionVocal !== -1) {
  console.log("La primera vocal está en la posición: " + posicionVocal);
} else {
  console.log("No se encontró ninguna vocal en el texto.");
}