function revertirTexto(texto) {
    let textoRevertido = "";
    
    for (let i = texto.length - 1; i >= 0; i--) {
      textoRevertido += texto.charAt(i);
    }
    
    return textoRevertido;
  }
  let texto = prompt("Ingrese un texto....");
  let textoRevertido = revertirTexto(texto);
  console.log(textoRevertido);
  