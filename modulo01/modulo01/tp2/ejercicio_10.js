function determinarDiasDelMes(numeroMes) {
    let dias = 0;
  
    switch (numeroMes) {
      case 1: // Enero
      case 3: // Marzo
      case 5: // Mayo
      case 7: // Julio
      case 8: // Agosto
      case 10: // Octubre
      case 12: // Diciembre
        dias = 31;
        break;
      case 4: // Abril
      case 6: // Junio
      case 9: // Septiembre
      case 11: // Noviembre
        dias = 30;
        break;
      case 2: // Febrero
        dias = 28;
        break;
      default:
        dias = -1; //mes inválido
        break;
    }
  
    return dias;
  }
  
  let numeroMes = parseInt(prompt("Ingrese el número del mes:"));
  
  let cantidadDias = determinarDiasDelMes(numeroMes);
  
  if (cantidadDias === -1) {
    console.log("Número de mes inválido.");
  } else {
    console.log("El mes " + numeroMes + " tiene " + cantidadDias + " días.");
  }
  