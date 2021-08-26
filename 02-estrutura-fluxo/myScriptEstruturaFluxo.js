/** 
 * Estrura de Fluxo
 */ 

//if e eslse
/*
if (condição) {

} else {

}

*/

var preco = -1;
console.log('Preço: ', preco)
if (preco < 0) {
    console.log('O preço do produto não pode ser negativo.')
    // ...
} else {
    console.log('Produto Cadastrado com sucesso!.')
    // ...
}

//while
/*
while (condição) {

}
*/

var valor = 1;
while (valor < 5) {
    console.log('Boa Noite - ' + valor)
    document.getElementById('my-app2').innerHTML = 'Boa Noite - ' + valor;
    valor++;
}

//for
/*
for (incio; condição; incrementador) {

}
*/

for(var contador = 1; contador < 5; contador++) {
    //..
    console.log('Boa Noite Galera - ' + contador)  
    //..
}