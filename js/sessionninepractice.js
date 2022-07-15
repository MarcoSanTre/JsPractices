// Dado una arreglo compuesto por arreglos,
// * crea una función que calcule la suma de los arreglos
// *
// * additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
// * -> 18

// let arrays = [[1,2,3], [1,3,2], [3,2,1]]
// const sumarArray = (input)=> {
//     let arrayAccum = 0
//     input.forEach(item => {
//         let result = item.reduce((accum, cv) =>{
//                 accum += cv
//                 return accum
//             },0)
//         arrayAccum += result
//     });
//     return arrayAccum
// }
// sumarArray(arrays)
// console.log(sumarArray(arrays))


// Práctica
// función con .reduce()
// * Dado un array de numeros, obtener la suma de solo los elementos positivos
// * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
// * -> 42

let nums = [ 1, -4, 12, 0, -3, 29, -150];

const addAllPositives = (array) => {
    let result = array.reduce((accum, cv) =>{
        // console.log(cv)
        if(parseInt(cv) > 0)
         { 
            accum += parseInt(cv);
            //console.log(accum);
         }
         return accum;
    },0);
    return result;
}

console.log(addAllPositives(nums));