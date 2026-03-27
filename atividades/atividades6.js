var aluno = "Joao";
var nota1 = 8.0;
var nota2 = 9.0;
var nota3 = 5.0
var media = 7.0

media = (nota1 + nota2 + nota3) /3;

if (media >= 7.0){
    console.log("Aprovado");
}else if(media <= 7.0 && media >= 5.0 ){
    console.log("Recuperaçao");
}else{
    console.log("Reprovado");
    
}
console.log("Media:" + media.toFixed(1) ) ;


