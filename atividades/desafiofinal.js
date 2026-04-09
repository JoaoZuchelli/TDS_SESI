const hardware = ["culer", "monitor", "mouse", "placa de video", "Memoria Ram"];
 
var clienteNome = "Joao";

var possuiCupom =  true
 
var clienteIdade = 16
  
console.log(clienteNome);
console.log(clienteIdade);
console.log(possuiCupom);

hardware.shift(hardware[0])
hardware.push("CPU"); 


console.log(hardware);


 function processarVenda (valortotal, cupomativo, quantidadeitens) {
  valortotal = 500 || cupomativo *0.15 || quantidadeitens
 
 }

 let desconto = processarVenda (0.15)


console.log(desconto(500));

 