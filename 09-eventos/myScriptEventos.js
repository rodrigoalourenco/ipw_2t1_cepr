/**
 * UTILIZANDO ATRIBUTO ONCLICK 
 */
function enviar() {
    var valor = document.getElementById('entradaDados').value;
    alert("Você digitou: " + valor);
}

/**
 * UTILIZANOD O ELEMENTO DOM
 */
var elemento = document.getElementById("btnConfirmar");
elemento.onclick = function() {
    var valor = document.getElementById('nome').value;
    alert("Olá " + valor);
}