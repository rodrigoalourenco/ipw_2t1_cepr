/* FUNÇÕES 

function imprimeTela(str) {
    document.getElementById('my-app').innerHTML = str;
}

var multiplicacao = function (x, y) {
    return x * y;
}
*/

function muiltiplicao(x, y) {
    return x * y;
}

var resultado = muiltiplicao(5, 6);
console.log("Resultado Multiplicação: ", resultado);


/**Metodo */
var conta = {
    saldo: 0,
    deposita: function (valor) {
        this.saldo += valor;
    }
}

console.log("Obj: ", conta);
console.log("Saldo: ", conta.saldo)
conta.deposita(500);
console.log("Saldo: ", conta.saldo)

/** Arguments */
var soma = function() {
    var soma = 0;

    for (var i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

var result = soma(2, 5, 7, 9, 1, 10, 100);
console.log("Result: ", result);


/** I/O Entrada e Saida de dados*/

// alert - saída de dados na tela (Caixa de Dialogo)
// console - saida de dados no console

// prompt - entrada de dados na tela (Caixa de Dialogo)

/*
var nome = prompt("Digite o seu nome");
alert(" Ola Alunos, eu sou o " + nome + "!!!");
console.log(nome);

// PROBLEMAS COM STRING 
var num1 = prompt("Digite um numero para soma: "); //10
var num2 = prompt("Digite outro numero para soma: "); //20
console.log(num1 + num2); //1020
*/

//utilizando o parseInt para resolver o problema com string
var num1 = prompt("Digite um numero para soma: ");
var num2 = prompt("Digite outro numero para soma: "); 
var soma = parseInt(num1) + parseInt(num2);
alert(soma); 
console.log(soma);







