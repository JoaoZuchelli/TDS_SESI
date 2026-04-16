
const estoque = ["Placa de video", "Placa mae", "SSD", "Processador", "Monitor"];
estoque.push("Memoria Ram");
let clienteNome = "Joao";
let clienteIdade = 16;
let possuiCupom = true;
let valorTotal = 2000;
let quantidadeItens = estoque.length;

function processarVenda(valorTotal, cupomAtivo)
{
    var verificar = valorTotal >= 500 || cupomAtivo === true ? valorTotal * 0.55 : valorTotal;
    return (verificar);
}
 
if (clienteIdade >= 16)
{
    console.log(`Venda autorizada para: ${clienteNome}\n`);
}

else 
{
    console.log(`Venda nao permitida: Idade insuficiente.`);
}

for (let i = 0; i < quantidadeItens; i++)
{
    console.log (`Item enviado: ${estoque[i]}... Conferido`);
}
estoque.shift();

let quantidadeFinalItens = estoque.length;
console.log(`Relatorio da loja: Cliente ${clienteNome} processou um pedido de R$${processarVenda(valorTotal, possuiCupom)}. Itens restantes no estoque: ${quantidadeFinalItens}. `);