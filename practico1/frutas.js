/*
Manejo de arreglos: Deber�s crear un programa y guardarlo en el archivo
frutas.js que cumpla los siguiente requisitos:
a. Crea un arreglo vac�o con el nombre de frutas.
b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de
variables o no.
c. Deber�s obtener el �ltima fruta agregada y guardarla en la variable
ultima. Adem�s deber�s imprimir su valor por consola, respetando el
siguiente formato
�La ultima fruta agregada fue: [ultima]�
d. Deber�s obtener la primera fruta agregada y guardarla en la variable
primera. Adem�s deber�s imprimir su valor por consola, respetando el
siguiente formato
�La primera fruta agregada fue: [primera]�
*/
let frutas = [];
frutas.push("Manzana", "Banana", "Pera", "Sandia", "Naranja");
let ultima = frutas[frutas.length - 1];
console.log("La ultima fruta agregada fue: %s", ultima);
let primera = frutas[0];
console.log("La primera fruta agregada fue: %s", primera);