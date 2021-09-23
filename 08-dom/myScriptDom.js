/**
 * Manipulando DOM - Document Object Model
 */

//recuperando elemento por id
var elemento = document.getElementById('conteudo');
console.log(elemento);

//recuperando elemento pelo nome datag
elemento = document.getElementsByTagName('select');
console.log(elemento);

//recuperando elemento por class
elemento = document.getElementsByClassName('laranjado');
console.log(elemento);

//recuperando por css
elemento = document.querySelector('div.aprovado');
console.log(elemento);

elemento = document.querySelectorAll('div.aprovado');
console.log(elemento);

//recuperando por atributos 
elemento = document.getElementById('entrada')
valor = elemento.getAttribute('type')
console.log(valor)

// colocando conteudos
document.getElementById('my-app').innerHTML = "Ola Mundao" ;
elemento = document.getElementById('my-app');
var conteudo = elemento.innerHTML;
console.log(conteudo);

/**
 * alterando elementos
 */

// Alterando atributos
 elemento = document.getElementById('entrada')
 valor = elemento.getAttribute('type')
 console.log(valor)
 elemento.setAttribute('type', 'password')
 valor = elemento.getAttribute('type')
 console.log(valor)

// alterando CSS
var elemento = document.getElementById('conteudo');
console.log(elemento);
elemento.style.color = 'blue';
elemento.style.backgroundColor = 'red';
elemento.style.border = 'solid green';


/**
 * removendo elementos
 */
//elemento.remove();


/**
 * adcionando elementos
 */

 // cria um novo elemento div
 // e dá à ele conteúdo
 var divNova = document.createElement("div");
 var conteudoNovo = document.createTextNode("Olá, cumprimentos! - INTERNET E PROGRAMAÇÃO WEB");
 divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

 // adiciona o novo elemento criado e seu conteúdo ao DOM
 var divAtual = document.getElementById("div1");
 document.body.insertBefore(divNova, divAtual);