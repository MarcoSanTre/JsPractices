// let academia = {
// 	nombre: "kodemia",
// 	numeroEstudiantes: 80,
// 	areaEstudio: "Programacion",
// 	numeroProfesores: 20,
// 	materia: [
// 		'html',
// 		'CSS',
// 		'Linux',
// 		'JavaScript'
// 	],
// 	materiaProfesor : {
// 		html: 'Alfredo',
// 		backend: 'Ale',
// 		talleres: {
// 			linux: 'Alfred',
// 			git: 'Ferdinand',
// 	}
// },
// };

// // con bracket notation
// console.log(academia["materiaProfesor"]['html']);

// // con dot notation
// console.log(academia.nombre);

// PRÁCTICA

// ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
// Realizar código para llevar a cabo las operaciones

// ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
// Realizar código para llevar a cabo las operaciones

// ! 3 Revisamos nuestro jugador
// Realizar código para llevar a cabo las operaciones

// ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// Realizar código para llevar a cabo las operaciones

// const player = {
//     score: 88888,
//     level: 7,
//     lives: 2,
//     vitalEnergy: 1,
//     isAlive: true,
//    };

// //    console.log(jugador);

// player.vitalEnergy = player.vitalEnergy - 25

// if (player.vitalEnergy <= 0){
//     player.isAlive = false;
// }

// console.log(player);

// if (player.isAlive === false && player.lives > 0 ) {
//     player.score = 0
//     player.level = 0
//     player.lives = player.lives - 1
//     player.vitalEnergy = 100
//     player.isAlive = true
// };
// console.log(player)


// Practica
// Dado el siguiente objeto realiza las siguientes operaciones 
// 	• Un log donde veamos la suma total de notas
// 	• Opcional - Un log donde veamos el promedio de las notas a dos decimales
// Hint, use toFixed() method

const grades = {
    first_test: 7.5,
    second_test: 10,
    third_test: 6,
};

console.log(grades.first_test + grades.second_test + grades.third_test);
let suma = 0
let iteraciones = 0
for (promedio in grades) {
    suma += grades[promedio]
    iteraciones ++
}
console.log((suma/iteraciones).toFixed(2));