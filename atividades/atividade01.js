
const produto = {

    nome: "Notebook",
    preco: "R$" + 60,
    estoque: 1
}

console.log(`${produto.nome}`);

console.log(`O item ${produto.nome} custa ${produto.preco}`);

 if(produto.estoque != false) {
    console.log("Disponilidade: Tem no estoque");
 
}else{
    console.log("Disponilidade: Nao tem no estoque");

}