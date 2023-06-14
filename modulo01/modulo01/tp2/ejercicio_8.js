function generarNumerosAleatorios() {
    let numeros = [];
  
    
    while (numeros.length < 100) {
      let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
      }
    }
  
       for (let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
  }
  
  generarNumerosAleatorios();
  