function enviar() {
    var valor = document.getElementById('entradaDados').value;
    alert("Você digitou: " + valor);
}

var elemento = document.getElementById("btnConfirmar");
elemento.onclick = function() {
    var valor = document.getElementById('nome').value;
    alert("Olá " + valor);
}