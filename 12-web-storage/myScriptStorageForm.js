console.log("Aplicando DOM, Eventos e Storage");    
var conteudo = document.getElementById('cadastrar');
conteudo.addEventListener('click', function() {
    var valor = document.getElementById('nome').value;
    localStorage.nome = valor;

    if(localStorage.nome) {
        var saudacao = document.getElementById('saudacao');
        saudacao.innerHTML = 'Ola ' + localStorage.nome;
    }
    
});