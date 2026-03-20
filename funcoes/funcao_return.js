function calcularTotal (preco1, preco2){
    return preco1 + preco2;

}

let resultado = calcularTotal(30, 50); // Somar

// imprimir concatenando e com template string

console.log("O total da compra e: " + resultado); //contatenando
console.log(`O total da compra e: ${resultado}`); // template string