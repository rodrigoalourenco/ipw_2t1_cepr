var decisao = true;
while (decisao) {
    var exercicio = parseInt(Math.random() * 10) ;
    console.log(exercicio)
    if(exercicio > 1 && exercicio <= 6) {
        decisao = false;
    }
}
