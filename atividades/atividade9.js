function saudacao (nome,horario){
    if(horario >= 0 && horario <= 11)
    {
        console.log(`bom dia ${nome}`);
    }
    else if(horario >= 12 && horario <= 17)
    {
        console.log(`boa tarde ${nome}`);
    }
    else if(horario > 24)
    {
        console.log(`Hora invalida ${nome}, Insira outro horario`);
    }
    
    else
    {
        console.log(`boa noite ${nome}`);
    }
}
let nome = "Joao";
let horario = 25;
saudacao(nome, horario);


