function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por MAYÚSCULAS.";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    } else {
      return "La cadena está formada por una mezcla de MAYÚSCULAS y minúsculas.";
    }
  }
  
  let cadena3 = prompt("Ingrese frase....");
  let resultado3 = analizarCadena(cadena3);
  console.log(resultado3);