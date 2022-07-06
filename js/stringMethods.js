// let message = "I still don't know JavaScript"
// let result = message.startsWith("I still");
// console.log(result)

let userMessage = prompt('Escribe lo que gustes');
let messageLength = userMessage.length;
let vocalCounter = userMessage.match(/[aeiou]/gi).length;
let wordsCounter = userMessage.split(" ");

console.log(`Tu frase tiene ${messageLength} caracteres, contiene ${vocalCounter} vocales y las palabras encontradas son ${wordsCounter}`)
