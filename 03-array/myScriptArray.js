console.log("### ARRAY ###");

var vazio = [];

var num1 = 2
var num2 = 5
var num3 = 8

var nome1 = 'Fulano'
var nome2 = 'Ciclano'
var nome3 = 'Beltrano'

var num = [2, 5, 8]
var nome = ['Fulano', 'Clicano', 'Beltrano']

var colegio = {
    nome: 'Colegio Estadual do Parana',
    endereco: 'Rua João Gualberto 250'
 };

var arrFull = ['Aruela', 30, 2.0, true, vazio, nome, colegio];



/**
 * Tamanho do Array
 */
console.log(vazio);
console.log(vazio.length);
console.log(nome);
console.log(nome.length);

/**
 * Acessado um elemento do Array
 */
console.log(vazio[0])
console.log(nome[0])
console.log(nome[1])
console.log(nome[2])

/**
 * Percorrenco um Array
 */
console.log("=== PERCORRENDO ARRAY ===")
for (var index = 0; index < nome.length; index++) {
    var element = nome[index];
    console.log(element)
}

/**
 * Adicionando Elementos em um Array
 */
 console.log("=== ADICIONANDO ELEMENTOS ARRAY ===")
vazio[0] = "Não eh mais vazio";
console.log(vazio)
console.log(vazio.length)
console.log(vazio[0]);

nome[nome.length] = "José";
console.log(nome)
console.log(nome.length)
console.log(nome[nome.length - 1])

/**
 * Adicionando Elementos com PUSH
 */
 console.log("=== ADICIONANDO ELEMENTOS ARRAY COM PUSH ===")
nome.push("Maria")
console.log(nome)
console.log(nome.length)
console.log(nome[nome.length - 1])

/**
 * Removendo Elementos de um Array
 */
 console.log("=== DELETANDO ELEMENTOS ARRAY (delete) ===")
 delete nome[0];
 console.log(nome)
 console.log(nome.length)
 console.log(nome[0])

 /**
  * Contatenando Arrays
  */
console.log("=== CONTATENANDO ARRAY (concat) ===")
 
 var info = ['1TI', '2TI', '3TI']
 var adm = ['1ADM', '2ADM', '3ADM', '4ADM']

 var cepSub = info.concat(adm)
 console.log(info)
 console.log(adm)
 console.log(cepSub)

 /**
  * Gerando String com os elementos de um Array
  */
console.log("=== GERANDO STRING DE UM ARRAY (join)===")
var cursosCep = cepSub.join(',')
console.log(cursosCep)

/**
 * Removendo o ultimo elemento
 */
console.log("=== REMOVENDO O ULTIMO ELEMENTO (pop)===")
console.log(info)
var elementoRemovido = info.pop()//remove o ultimo elemento
console.log(info)
console.log(elementoRemovido)

/**
 * Removendo o primeiro elemento
 */
 console.log("=== REMOVENDO O PRIMEIRO ELEMENTO (shift) ===")
 console.log(info)
 elementoRemovido = info.shift()//remove o primeiro elemento
 console.log(info)
 console.log(elementoRemovido)

 /**
  * INVERTENDO OS ELEMENTOS DE UM ARRAY
  */
console.log("=== INVERTENDO OS ELEMENTOS DE UM ARRAY (reverse) ===")
console.log(adm)
adm = adm.reverse();
console.log(adm)


/**
 * Copiando um trecho de um array
 */
console.log("=== COPIANDO UM TRECHO DE UM ARRAY (slice) ===")
var materias = ['PORT', 'MAT', 'HIST', 'IPW', 'LP', 'BD']
var materiasBasica = materias.slice(0,3);
var materiasTecnicas = materias.slice(3,6)
console.log(materias)
console.log(materiasBasica)
console.log(materiasTecnicas)
console.log(materias)

/**
 * Adicionando um elemento na primeiro posição
 */
console.log("=== ADICIONANDO UM ELEMENTO NA PRIMEIRA POSICÇÃO (unshift) ===")
console.log(info)
info.unshift('1º TEC INFO')
console.log(info)
