function criarCalcularDesconto (desconto){
    return function(preco){
        return preco - (preco * desconto);
    }
}

const desconto50 = criarCalcularDesconto(0.15);

console.log(desconto50(500));

