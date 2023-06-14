const readlineSync = require('readline-sync');
const numero = parseInt(readlineSync.question('Ingrese un numero: '));
if (numero < 0) {
    console.log("El numero es negativo");
}
else if (numero === 0) {
    console.log("El numero es cero");
}
else if (numero >= 0 && numero % 2 === 0) {
    console.log("El numero es positivo y par");
}
else if (numero >= 0 && numero % 2 === 1) {
    console.log("El numero es positivo e impar");
}