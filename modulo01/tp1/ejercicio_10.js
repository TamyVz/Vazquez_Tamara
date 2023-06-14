var meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];
  
  var numeroMes = parseInt(prompt("Ingresa un número del 1 al 12:"));
  
  if (numeroMes >= 1 && numeroMes <= 12) {
    var nombreMes = meses[numeroMes - 1];
    document.write("El mes número " + numeroMes + " es " + nombreMes);
  } 