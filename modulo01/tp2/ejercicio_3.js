function calcularFactorial(numero) {
    if (numero < 0) {
      
      return "Error: el factorial no está definido para números negativos";
    } else if (numero === 0) {
    
      return 1;
    } else {
      let factorial = 1;
  
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
  
      return factorial;
    }
  }
  
  let numero = prompt ("Ingrese un valor.....");
 let resultado = calcularFactorial(numero);
  console.log("El factorial de " + numero + " es: " + resultado);