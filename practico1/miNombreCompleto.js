/* Escribir un programa que:
a. Defina una variable nombre.
b. Guarde en la variable nombre tu nombre real.
c. Defina y asigne, en un mismo paso, la variable apellido. El valor a
asignar deber� ser tu apellido real.
d. Repita el paso anterior, pero esta vez definiendo la variable edad y
asignandole tu edad real.
e. Por �ltimo, imprime por consola un mensaje que respete el siguiente
formato:}
"Hola, [nombre] [apellido]. Tienes [edad] a�os."
*/
let nombre;
nombre= "Javier";
let apellido = "Pucheta";
let edad = 28;
console.log("Hola, %s %s. Tienes %s a�os.", nombre, apellido, edad);