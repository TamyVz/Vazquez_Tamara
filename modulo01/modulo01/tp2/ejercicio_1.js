let valores = [true, false, 2, "hola", "mundo", 3, "char"];


let elementosDeTexto = valores.filter(function (elemento) {
    return typeof elemento === "string";
  });
  
  let elementoMasLargo = "";
  let longitudMaxima = 0;
  
  elementosDeTexto.forEach(function (elemento) {
    if (elemento.length > longitudMaxima) {
      elementoMasLargo = elemento;
      longitudMaxima = elemento.length;
    }
  });
  
  console.log("El elemento de texto más largo es: " + elementoMasLargo);
   
  let elementosOrdenados = elementosDeTexto.sort(function (a, b) {
    return a.length - b.length;
  });
  
  console.log("Elementos de texto ordenados de menor a mayor longitud:");
  console.log(elementosOrdenados);
 
  let numeros = valores.filter(function (elemento) {
    return typeof elemento === "number";
  });
  
  let suma = numeros[0] + numeros[1];
  let resta = numeros[0] - numeros[1];
  let multiplicacion = numeros[0] * numeros[1];
  let division = numeros[0] / numeros[1];
  
  console.log("Suma: " + suma);
  console.log("Resta: " + resta);
  console.log("Multiplicación: " + multiplicacion);
  console.log("División: " + division);