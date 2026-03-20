function processoPedido(valor, quantidade, operacao){
    return operacao(valor, quantidade);
}

function calcularTotal(preco, qtd){
    return preco * qtd;

}

let resultado = processoPedido(30, 50, calcularTotal);

console.log(`total do pedido: ${resultado}`)