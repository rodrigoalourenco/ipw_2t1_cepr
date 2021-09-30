//alert("Sera que terminou de carregar a página???");
function myScroll() {
    console.log('Subindo e descendo a página com função!!!')
}

function chamaFuncao() {
    console.log('|IPW|')
}

/**
 * METODO addEventListener
 */

function apertaBotao() {
    console.log('apertando botão');
}
var elemento = document.getElementById('fanta');
elemento.addEventListener("click", apertaBotao);

var conteudo = document.getElementById('rexona');
conteudo.addEventListener('click', function() {
    console.log('Rexona não te abandona!!!');
})

elemento.removeEventListener('click', apertaBotao);