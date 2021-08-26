var par = 0;
var impar = 0;

for (var index = 0; index < 10; index++) {
    var numStr = prompt('Digite o ' + (index + 1) + "º numero ");
    
    var aux = parseInt(numStr);
    if(aux % 2 == 0) {
        par++;
    } else {
        impar++;
    }
}

alert('Foi digitado ' + par + ' numeros pares e ' + impar + ' numeros impares')