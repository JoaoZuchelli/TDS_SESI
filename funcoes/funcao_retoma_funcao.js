function criarCalcularDesconto (desconto){
    return function(preco){
        return preco - (preco * desconto);
    }
}

const desconto10 = criarCalcularDesconto(0.10);
const desconto50 = criarCalcularDesconto(0.50);

console.log(desconto10(200));
console.log(desconto50(1230));

