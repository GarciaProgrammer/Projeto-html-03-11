
$(document).ready(function(){
    console.log('Jquery carregado');
    let objGabriel = {
        'nome': 'Gabriel',
        'idade': 19,
        'peso': 87,
        'altura':1.79
    };
    
    
    let arrObjPessoa = [
        {nome: 'Thiago', idade: 21, peso: 75, altura: 1.82},
        {nome: 'Gabriel', idade: 19, peso: 90, altura: 1.90},
        {nome: 'Robertinho', idade : 17, peso: 70, altura: 2.10}
    ];
    
    arrObjPessoa.push(objGabriel);

    $('#lista-ordenada').html(montaLista(arrObjPessoa));

    
});













//functions
function calculaIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

function montaLista(objeto){
    let htmlList = "";
    for (let i = 0; i < objeto.length; i++) {
        const pessoa = objeto[i];
        htmlList += "<li>" + pessoa.nome + " " + pessoa.altura + "</li>";
    }
    return htmlList;
}