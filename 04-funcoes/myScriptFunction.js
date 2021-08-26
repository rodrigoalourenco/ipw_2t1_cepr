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
