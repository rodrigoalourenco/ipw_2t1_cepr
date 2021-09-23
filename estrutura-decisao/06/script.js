var numeroDigitado = prompt('Digite um numero');
var numero = parseInt(numeroDigitado);
var soma = 0;
while(numero != 0) {
    soma += parseInt(numero % 10);
    //soma = soma + parseInt(numero % 10);
    numero = parseInt(numero / 10);
}

var msgSaida = " A soma de " +  numeroDigitado + " é: " + soma;
console.log(msgSaida);
alert(msgSaida);
document.getElementById('my-app').innerHTML = msgSaida;
