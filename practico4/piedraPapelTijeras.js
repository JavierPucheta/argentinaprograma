const readlineSync = require('readline-sync');
const opciones = ["piedra", "papel", "tijeras"];
let RondasGanadasJugador = 0;
let RondasGanadasMaquina = 0;
let jugadaCorrecta = false;
function obtenerJugadaComputadora() {
    return Math.floor(Math.random() * 2);
}
function obtenerJugadaUsuario() {
    let jugada = "";
    while (!jugadaCorrecta) {
        jugada = readlineSync.question('JUGADOR elije entre piedra, papel o tijeras: ').toLowerCase();
        if (!opciones.includes(jugada)) {
            console.log("JUGADOR debes elegir entre piedra, papel y tijeras");
            continue;
        }
        else {
            jugadaCorrecta = true;
        }
    }
    jugadaCorrecta = false;
    return jugada;
}
function determinarGanador(jugador, maquina) {
    let resultado = "";
    if (jugador == maquina) {
        resultado = "Empate";
    }
    else if ((jugador == "piedra" && maquina == "tijeras")
        || (jugador == "tijeras" && maquina == "papel")
        || jugador == "papel" && maquina == "piedra") {
        RondasGanadasJugador++;
        resultado = "Gana el usuario";
    }
    else {
        RondasGanadasMaquina++;
        resultado = "Gana la computadora";
    }
    return resultado;
}
let cantJugadas = parseInt(readlineSync.question('JUGADOR elije entre 1, 2 o 3 jugadas: '));
while (cantJugadas !== 1 && cantJugadas !== 2 && cantJugadas !== 3) {
    cantJugadas = parseInt(readlineSync.question('JUGADOR debe elegir entre 1, 2 o 3 jugadas: '));
}
for (let i = 0; i < cantJugadas; i++) {
    let maquina = opciones[obtenerJugadaComputadora()];
    let jugador = obtenerJugadaUsuario();
    let ganador = determinarGanador(jugador, maquina);
    console.log(`La computadora eligio: ${maquina}.`);
    console.log(`El usuario eligio: ${jugador}.`);
    console.log(`El resultado fue: ${ganador}.`);
}
if (RondasGanadasJugador > RondasGanadasMaquina) {
    console.log("GANO EL USUARIO");
}
else if (RondasGanadasJugador < RondasGanadasMaquina) {
    console.log("GANO LA COMPUTADORA");
}
else {
    console.log("TERMINO EN EMPATE");
}