// CONDICIONALES
const nombre = "Lucas";

if (nombre == "Maca") {
    console.log("Hola Maca");
} else if (nombre == "Lucas") {
    console.log("Hola Lucas");
} else {
    console.log("Hola desconocido");
}

const edad = 35;

switch (edad) {
    case 0:
        console.log("Recién nacio");
        break;
    case 18:
        console.log("Ya es un mayor de edad");
        break;
    case 65:
        console.log("Recién jubilado");
        break;
    default:
        console.log("¿Aún estas vivo?");
        break;
}

// CONSTANTES

const num1 = 20;
const num2 = 15;
const resultado = num1 + num2;

console.log(resultado);

//fUNCIONES

function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}
saludo('Paola');

const respuesta = prompt('¿Cual es tu color favorito?');
// Responde: violeta

console.log(respuesta);
// violeta
