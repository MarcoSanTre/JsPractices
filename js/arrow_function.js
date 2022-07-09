// const arrowFunction = (p1) => {
//     console,log(p1);
//     return
// };

const palabra = () => {
    let palabra = prompt("Please type a word or sentence");
    let sinEspacios = palabra.replaceAll(" ", "");
    let k = sinEspacios.length;
    let invertida = '';
    for (let i = (k - 1); i >= 0; i--) {
        invertida += sinEspacios[i];
    }
    if (sinEspacios === invertida) {
        return 'Es palindromo'
    }
    return 'No es palindromo'
}
alert(palabra())

    