/**
 * Objetos
 */

 var objetoVazio = {}
 var colegio = {
    nome: 'Colegio Estadual do Parana',
    endereco: 'Rua João Gualberto 250'
 };

console.log(colegio.nome);
console.log(colegio.endereco);
console.log(colegio);

var tecnicoInformatica = {
    nomeColegio: 'Colegio Estadual do Parana',
    enderecoColegio: 'Rua João Gualberto 250',
    turmas: [
        {
            turma: '1 TI',
            sala: 12
        },
        {
            turma: '2 TI',
            sala: 13
        },
        {
            turma: '3 TI',
            sala: 14
        }
    ]
}

/** Recuperando valor dos objetos */
console.log(tecnicoInformatica.nomeColegio)
console.log(tecnicoInformatica['nomeColegio']);
document.getElementById('my-app').innerHTML = tecnicoInformatica.nomeColegio;
console.log(tecnicoInformatica.turmas);
console.log(tecnicoInformatica.turmas[1]);
console.log(tecnicoInformatica.turmas[1].turma);
console.log(tecnicoInformatica.turmas[1]['sala']);

/** Alterando o valor de um prorpriedade */
colegio.nome = "Colegio Estadual Tiradentes"
colegio.endereco = "Praça 19 (Praça do Homem nu)"

console.log(colegio);

/** Referencias */
var curso = {
    sigla: 'TI',
    disciplina: 'IPW'
}
console.log("Curso: ", curso)

//copiando por referencia
var x = curso;

x.sigla = 'ADM';
x.disciplina = 'OSM';

console.log("Curso: ", curso)
console.log("X: ", x)

var y = {
    sigla: curso.sigla,
    disciplina: curso.disciplina
}

y.disciplina = "LP"

console.log("Y: ", y);
console.log("Curso: ", curso)

/**Removendo uma propriedade */
console.log("Curso sigla: ", curso.sigla)
delete curso.sigla
console.log("Curso sigla: " + curso.sigla)
console.log("Curso: ", curso)

/** Verificando a Existencia de uma propriedade */
console.log("sigla" in curso)
console.log("disciplina" in curso)
