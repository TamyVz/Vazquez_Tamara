function determinarParidad(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  let numeroEjemplo = prompt ("Ingrese un numero");
  let resultado = determinarParidad(numeroEjemplo);
  alert(resultado);