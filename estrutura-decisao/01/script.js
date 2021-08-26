var anoStr = prompt('Digite um ano para saber se o ano é bissexto');
var ano = parseInt(anoStr);

if(ano % 4 == 0) {
    alert("Esse ano é bissexto");
} else {
    alert("Esse ano não é bissexto");
}