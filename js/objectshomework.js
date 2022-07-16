// // // Ejercicio 1

// // // Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)

// let koder = {
// 	firstName: "Marco",
// 	lastName: "Sanchez",
// 	age: 43,
// 	major: "International Business",
// 	codeGen: 20,
//     subjectsAproved: [
// 		'html',
// 		'CSS',
// 	],
// }

// // // Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, incluida la del objeto anidado

// console.log(`Las materias que ${koder.firstName} ha pasado son: ${koder.subjectsAproved}`)

// // // Luego en otro console log, imprime todas las llaves dentro del objeto

// console.log(koder)

// let counter = 0
// for (property in koder) {

//     console.log(koder[property])
//     counter ++
// }

// // // Luego en otra console log, imprime todas los valores dentro del objeto

// console.log(`El objeto tiene ${counter} elementos`)


// //! Ejercicio 2.

// // Dado un objeto inicial, hacer los siguientes puntos

let koder = {
   languages: ["JavaScript", "Python", "SQL"],
   frameworks: ["django", "node", "flask"],
   isMentor: true,
   level: 3,
   avatar: " https://picsum.photos/200/300"
};

// // 1. Agregar el lenguaje 'Go' a la lista de lenguajes

koder.languages.push('Go');

// // 2. Agregar fastApi en frameworks

koder.frameworks.push('fastApi');

// // 3. Cambiar el nivel a 4

koder.level = 4;

// // 4. Eliminar la propiedad avatar

delete koder.avatar;

// // 5. Agregar una nueva propiedad de edad y poner el valor de 30

koder.age = 30;

// // 6. Imprimir en consola todos los lenguajes  y frameworks dominados

console.log(koder.languages)
console.log(koder.frameworks)

// // 7. Clonar el objeto en uno nuevo



// // 8. Imprimir en consola el nuevo objeto

console.log(koder);