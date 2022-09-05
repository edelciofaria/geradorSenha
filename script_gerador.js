var input_senha = document.getElementById("senha");
var input_caractere = document.getElementById("qtd_caractere");
var chk_maiuscula = document.getElementById("letra_maiuscula");
var chk_minuscula = document.getElementById("letra_minuscula");
var chk_especial = document.getElementById("especial");
var botao = document.getElementById("botao");

var alfabeto = "abcdefghijlmnopqrstuvxywkz";
var carct_especial = "!@#$%¨&*-+"


var test = alfabeto.length;

function geraSenha(){
    var tamanho_senha = input_caractere.value;
    var senha = [];
    var opcoes = verificaCheckBox();   
    for(i=0; i<tamanho_senha;i++){
        if((i==0) && (opcoes[0] == true)){
            senha.push(sorteiaLetraMaiuscula());
        }else if((i==1) && (opcoes[1] == true)){
            senha.push(sorteiaLetraMaiuscula().toLowerCase());
        }else if((i==2)&& (opcoes[2] == true)){
            senha.push(sorteiaCaractere());
        }else{
            senha.push(Math.floor(Math.random()*10));
        }
    }
    input_senha.value = senha.join("");
}
function sorteiaLetraMaiuscula(){
    var n = Math.floor(Math.random()*26);
    var caractere = alfabeto.charAt(n);
    return caractere.toUpperCase();
}
function verificaCheckBox(){
    var verificador=[];
    if ((chk_maiuscula.checked == false) &&
            (chk_minuscula.checked == false) && 
            (chk_especial.checked == false)){
        alert("Senha FRACA !!!");
        //break;
    }else{
        if(chk_maiuscula.checked){
            verificador.push(true);
        }else{
            verificador.push(false)
        }
            if(chk_minuscula.checked){
            verificador.push(true);
        }else{
            verificador.push(false)
        }
        if(chk_especial.checked){
            verificador.push(true);
        }else{
            verificador.push(false)
        }
    }
    console.log(verificador);
    return verificador;
}
function sorteiaCaractere(){
    var n = Math.floor(Math.random()*10);
    var caractere = carct_especial.charAt(n);
    return caractere;
}