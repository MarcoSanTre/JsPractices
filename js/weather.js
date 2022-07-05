let weather = prompt('Selecciona el clima en tu ciudad: \n a)Soleado \n b)Lluvioso \n c)Nevado \n d)Nublado' );
let temp = prompt('Cuál es tu temperatura en Centígrados?');
let fare = ((temp * (9/5)) + 32);
console.log(`En tu ciudad, el dia esta ${weather} con una temperatura de ${fare} grados F (fahrenheit)`)