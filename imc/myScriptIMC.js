function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var imc = peso / (altura * altura);
    
    var msg = 'IMC: <b>' + imc + '</b>' 
    document.getElementById('resultadoIMC').innerHTML = msg;
}