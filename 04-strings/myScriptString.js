console.log("### STRING ###");

/**
 * ACESSANDO OS CARECTERS DE UM STRING POR POSIÇÃO 
 */
console.log('ACESSANDO OS CARECTERS DE UM STRING POR POSIÇÃO (charArt)')
var materia = 'LP';
console.log(materia.charAt(0));

var disciplina = "IPW"
for (var index = 0; index < disciplina.length; index++) {
    const letra = disciplina.charAt(index);
    console.log(letra)
}


disciplina = "INTERNET E PROGRAMÇÃO WEB"
console.log(disciplina.length)

/**
 * RECUPERANDO UM TRECHO DE UMA STRING (slice)
 */
console.log('RECUPERANDO UM TRECHO DE UMA STRING (slice)')
console.log(disciplina)
console.log(disciplina.slice(11,21))


/**
 * Dividindo uma string
 */
console.log('DIVIDINDO UMA STRING')
console.log(disciplina)
var arrDisc = disciplina.split(' ');
console.log(arrDisc)

for (let index = 0; index < arrDisc.length; index++) {
    const element = arrDisc[index];
    console.log(element)
    
}