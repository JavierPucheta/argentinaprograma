let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i] === "Jose" || personas[i] === "Sofia") {
        rechazados.push(personas[i]);
    }
    else {
        admitidos.push(personas[i]);
    }
}
console.log("La lista de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
    console.log(admitidos[i]);
}
console.log("La lista de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
    console.log(rechazados[i]);
}
for (let i = 0; i < admitidos.length-1; i++) {
    let posicionDelMinimo = i;
    for (let j = i; j < admitidos.length; j++) {
        if (admitidos[j] < admitidos[posicionDelMinimo]) {
            posicionDelMinimo = j;
        }
    }
    let temp = admitidos[i];
    admitidos[i] = admitidos[posicionDelMinimo];
    admitidos[posicionDelMinimo] = temp;
}
console.log("La lista ordenada de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
    console.log(admitidos[i]);
}
for (let i = 0; i < rechazados.length - 1; i++) {
    let posicionDelMinimo = i;
    for (let j = i; j < rechazados.length; j++) {
        if (rechazados[j] < rechazados[posicionDelMinimo]) {
            posicionDelMinimo = j;
        }
    }
    let temp = rechazados[i];
    rechazados[i] = rechazados[posicionDelMinimo];
    rechazados[posicionDelMinimo] = temp;
}
console.log("La lista ordenada de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
    console.log(rechazados[i]);
}