/** I/O Entrada e Saida de dados*/

// alert - saída de dados na tela (Caixa de Dialogo)
// console - saida de dados no console
// prompt - entrada de dados na tela (Caixa de Dialogo)

/**
 * Entrada de dados
 */
 var nome = prompt("Digite o seu nome");
 alert(" Ola Alunos, eu sou o " + nome + "!!!");
 console.log(nome);
 
 // PROBLEMAS COM STRING 
 var num1 = prompt("Digite um numero para soma: "); //10
 var num2 = prompt("Digite outro numero para soma: "); //20
 console.log(num1 + num2); //1020
 
 //utilizando o parseInt para resolver o problema com string
 var num1 = prompt("Digite um numero para soma: ");
 var num2 = prompt("Digite outro numero para soma: "); 
 var soma = parseInt(num1) + parseInt(num2);
 alert(soma); 
 console.log(soma);
 
 /**
  * Saída de dados
  */
 console.log(5 + 6);
 document.getElementById('my-app').innerHTML = 5 + 6;
 alert(5+5);
 