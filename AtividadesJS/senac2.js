// Pedir o nome do usuário
const nome = prompt("Digite seu nome:");

// Pedir o sexo do usuário
const sexo = prompt("Digite seu sexo (Masculino/Feminino):");

// Pedir o peso do usuário
const peso = parseFloat(prompt("Digite seu peso (em kg):"));

// Pedir a altura do usuário
const altura = parseFloat(prompt("Digite sua altura (em metros):"));

// Calcular o IMC
const imc = peso / (altura * altura);

let resultado = "";

if (isNaN(imc)) {
    resultado = "Por favor, insira um peso e uma altura válidos.";
} else {
    resultado = `${nome}, seu IMC é ${imc.toFixed(2)}.`;

    if (sexo.toLowerCase() === "masculino") {
        if (imc < 20.7) {
            resultado += " Você está abaixo do peso.";
        } else if (imc < 26.4) {
            resultado += " Seu peso está dentro da faixa saudável.";
        } else {
            resultado += " Você está acima do peso.";
        }
    } else if (sexo.toLowerCase() === "feminino") {
        if (imc < 19.1) {
            resultado += " Você está abaixo do peso.";
        } else if (imc < 25.8) {
            resultado += " Seu peso está dentro da faixa saudável.";
        } else {
            resultado += " Você está acima do peso.";
        }
    } else {
        resultado = "Sexo não reconhecido. Por favor, insira 'Masculino' ou 'Feminino'.";
    }
}

// Exibir o resultado em um alerta
alert(resultado);
