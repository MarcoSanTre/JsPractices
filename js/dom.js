// DOM

//
// * Practica
// * 1. Agregar en nuestro index.html
// *  1.1. Un elemento lista <ul></ul> o <ol></ol>
// *  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item"
// * 2. Usando Javascript realizamos lo siguiente
// *  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'

let list = document.querySelector('ul');
let listItem = document.querySelectorAll('li');

list.setAttribute("id", "lista");
list.setAttribute("class", "lista");

// *  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
// *  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'

listItem.forEach(element => {
    element.removeAttribute("class");
    element.setAttribute("class", "list_item");
});



