
/*
atalho comentario de varias linhas:
alt + shifr + A

Desafio: criar uma funcao que receba preco e desconto em %
e mostre o valor final com desconto.
Criar outra funcao que receba preco e quantidade e mostre o valor total da compra.

*/


function criarCalcularDesconto (preco, desconto){
    const valorfinal = preco - (preco * desconto /100);
        console.log(`O valor final do produto foi de: ${valorfinal}`);   
}

criarCalcularDesconto(1000, 5);

function (){

function calcularTotal (preco, quantidade);
const valortotal = preco * quantidade;
console.log(`O valor total foi de: ${valortotal}`);

}