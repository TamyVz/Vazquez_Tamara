function calcularPromedio(notas) {
    let suma = 0;
  
    for (let i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
  
    let promedio = suma / notas.length;
    return promedio;
  }
  
  function determinarEstadoAlumno(promedio) {
    if (promedio < 5) {
      return "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
      return "Aprobado";
    } else {
      return "Sobresaliente";
    }
  }
  
  let notas = [];
  
   for (let i = 0; i < 3; i++) {
    let nota = parseInt(prompt("Ingrese la nota " + (i + 1) + ":"));
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
      alert("Ingrese un número natural entre 0 y 10.");
      i--; 
    } else {
     console.log("La nota ingresada es... "+ nota);
      notas.push(nota);
    }
  }
  
    let promedio = calcularPromedio(notas);
  
  let estado = determinarEstadoAlumno(promedio);
  
   console.log("Promedio: " + promedio);
  console.log("Estado del alumno: " + estado);
  