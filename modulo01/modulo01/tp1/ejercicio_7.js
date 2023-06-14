let dato, resultado;
val1 = window.prompt("Introduce tu nombre", "...");//solicita al usuario que ingrese su nombre utilizando la funcion ´windows.prompt´
val2 = window.prompt("Introduce tu apellido", "...");//solicita al usuario que ingrese su apellido utilizando la funcion ´windows.prompt´
//Estas funciones muestran una ventana emergente en el navegador donde el usuario puede ingresar texto.
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ; //el programa concatena el nombre y apellido ingresados en la variable resultado
//utilizando una plantilla de cadena o template string en JavaScript. 
//La plantilla de cadena utiliza la sintaxis ${valor} para insertar variables dentro de una cadena.
 document.write(resultado); //se imprime por pantalla los valores concatenados, donde se ejecuta el codigo