// const koders = ["Mariana","Marco","Cris"];
// console.log(koders);

// let prime_numbers = [2, 3, 5, 7, 9, 11];

// // replace 1 element from index 4 by 13
// let removedElement = prime_numbers.splice(4, 1, 13);
// console.log(removedElement);
// console.log(prime_numbers);

// let arrayTest = ['Julio', 'Sofy', 'Cris', 'Jose'];

// const callFun = (currentValue, index, array) => {
// 	console.log(currentValue);
// };

// arrayTest.forEach(callFun);

// let arrayTest = ['Julio', 'Sofy', 'Cris', 'Jose'];

// const callFun = (currentValue, index, array) => {
// 	console.log("currentValue: ", currentValue);
//     console.log("index: ", index);
//     console.log("array: ", array);
// };

// arrayTest.forEach(callFun);

// const numbers = [1, 2, 3, 43, 4, 5];

// let arr = numbers.map((cv, index, arr) => {
//   //   console.log(cv, index, arr);
//   return cv + 10;
// });

// console.log(arr);

// let arrayCities = ['méxicO','RIo', 'Los AngelEs', 'esTAMBUL'];
// let newCities = [];
// const capitalize = (arrayCities) => {
//     arrayCities.forEach(element => {
//         newCities.push(element[0].toUpperCase() + element.slice(1).toLowerCase());
//     });
// }
// capitalize(arrayCities);
// console.log(newCities);

// console.log(arr);

let arrayCities = ['méxicO','RIo', 'Los AngelEs', 'esTAMBUL'];
let newCities = [];
const capitalize = (arrayCities) => {
    newCities = arrayCities.map(element => {
        return(element[0].toUpperCase() + element.slice(1).toLowerCase());
    });
}
capitalize(arrayCities);
console.log(newCities);