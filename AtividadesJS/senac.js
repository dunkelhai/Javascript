var idade = prompt("Digite sua idade: ");
var idadeFutura;

var idadeDias = idade * 365;

var idadeDaqui30Anos = (idadeDias + (30*365)) / 365;
alert("Idade daqui 30 anos: " + idadeDaqui30Anos);

var idadeDaqui40Meses = (idadeDias + (40 * 30)) / 365;
alert("Idade daqui 40 meses: " + idadeDaqui40Meses);

var podeVotar = false;

if (idade >= 18){
    podeVotar = true;
}

if (podeVotar){
    alert("Pode votar!");
} else {
    alert("Não pode votar!");
}