/*
�De qu� manera representar�a las variables del ejercicio anterior en un objeto,
llam�mosle persona?
a. Defina una variable de tipo objeto que lleve el nombre persona, y que
contenga las variables nombre, apellido y edad del ejercicio anterior con
sus respectivos valores.
b. Imprime por consola un mensaje que respete el siguiente formato:
�Mi objeto persona es el siguiente: [persona]�
Observaci�n: Deber�s usar la funci�n JSON.stringify para poder imprimir
por consola el objeto persona de una manera legible.
*/
let persona = {nombre : 'Javier', apellido : 'Pucheta', edad : 28};
console.log("Mi objeto persona es el siguiente: " + JSON.stringify(persona));