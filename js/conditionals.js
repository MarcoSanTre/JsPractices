// const montoMinimo = 2000;
//let montoCompra = 2500;

//if(montoCompra >= montoMinimo) {
//	console.log('Elegible a MSI')
//}

//const montoMinimo = 2000;
//let montoCompra = 1500;

//if(montoCompra >= montoMinimo) {
//	console.log('Elegible a MSI')
//}
//else {
//    console.log('MSI no está disponible')
//}

let num1 = prompt('Ingresa 1 número')
let num2 = prompt('Ingresa el 2o número')
let num3 = prompt('Ingresa el 3er número')

if(num1 > num2 && num1 > num3) {
    console.log('El mayor es el ' + num1)
} if(num2 > num1 && num2 > num3) {
    console.log('El mayor es el ' + num2)
}
if(num3 > num1 && num3 > num2) {
    console.log('El mayor es el ' + num3)
}
