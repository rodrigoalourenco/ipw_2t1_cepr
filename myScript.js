console.log(5 + 6);
document.getElementById('my-app').innerHTML = 5 + 6;


// Variaveis
var idade = 30;
var preco = 25.56;
var nome = 'Fulano';
var acessoLiberado = true;
var status = undefined;

idade = 'Trinta';

// Operadores
/*
 - Aritmético: + - * / % Ex.: 5+6
 - Atribuição: = += -= *= /= %= ++ -- Ex.: num = 10 / (num = num + 10 igual num += 10)
 - Relacional: == != < <= > >= Ex.: 5 < 5 (false)
 - Lógico: && || (5 == 5 && 5 != 10) 
 */

//Atitméticos
var anoNasc = 1994;
var anoAtual = 2021;
var idade = anoAtual - anoNasc;
console.log('Idade:', idade);

//Atribuição
var num = 10;
var soma = 0;
soma = soma + num;
console.log('Soma: ' +  soma);
soma += num;
console.log('Soma: ' +  soma);

var incremento = 10;
incremento++;
console.log('Incremento: ' + incremento)

var decremento = 10;
decremento--;
decremento--
console.log('Decremento: ' + decremento)

//Relacionais
var comparacao = 5 < 5;
console.log('Comparação: ', comparacao);
comparacao = 5 == 5;
console.log('Comparação: ', comparacao);

//Logicos
var tabVerdade = true || false;
tabVerdade = (5 == 5 && 7 == 9);
console.log('Tabela Verdade: ', tabVerdade);

//Contatenação de String
var str1 = "Rodrigo"
var str2 = " "
var str3 = "Lourenço"
var str4 = str1 + str2 + str3;
console.log("Contatenação de String: " , str4)

var conta = 10 + '10';
console.log("Conta: " , conta)

var result = "O resultado é: " + 10 + 10
console.log('Result: ', result)

result = "O resultado é: " + (10 + 10)
console.log('Result: ', result)

//Operador Ternário 1 ? 2 : 3
var nota = 0.7;
var resultAno = nota >= 0.5 ? 'APROVADO' : 'REPROVADO';
console.log('Resultado Ano: ' , resultAno, ' Nota: ', nota) ;

//Estrura de Fluxo

//if e eslse
/*
if (condição) {

} else {

}

*/

preco = -1;
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

