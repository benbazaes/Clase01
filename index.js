const array1 = [1, 30, 39, 29, 10, 13];

//Funcion Array Every
const todosMenorA40Every = (currentValue) => currentValue < 40;

console.log("Funcion array every",array1.every(todosMenorA40Every));

//Funcion Array Some
const todosMenorA40Some = (currentValue) => currentValue < 40;

console.log("Funcion array some",array1.some(todosMenorA40Some));

//Funcion Array Map
const todosMenorA40Map = (currentValue) => currentValue < 40;

console.log("Funcion array map",array1.map(todosMenorA40Map));