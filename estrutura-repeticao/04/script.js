var soma = 0;
for (var index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        soma = soma + index;
    } 
}
console.log('for: ', soma)

var i = 1;
while (i <= 20){
    if (index % 2 == 0) {
        soma = soma + index;
    }
    i++; 
}

console.log('while', soma)
alert(soma)
document.getElementById('resultado').innerHTML = soma;
