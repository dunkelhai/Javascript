// Defina as constantes para armazenar informações
const nome = prompt("Digite seu nome:");
const sexo = prompt("Digite seu sexo (Masculino/Feminino):");
const idade = parseInt(prompt("Digite sua idade:"));
const contribuicao = parseInt(prompt("Digite o tempo de contribuição (em anos):"));

// Verifique se a pessoa está apta para se aposentar
const somaIdadeContribuicao = idade + contribuicao;

let mensagem = "";

if (sexo.toLowerCase() === "masculino") {
    if (contribuicao >= 35 && somaIdadeContribuicao >= 95) {
        mensagem = `${nome}, você pode se aposentar!`;
    } else {
        mensagem = `${nome}, você ainda não pode se aposentar!`;
    }
} else if (sexo.toLowerCase() === "feminino") {
    if (contribuicao >= 30 && somaIdadeContribuicao >= 85) {
        mensagem = `${nome}, você pode se aposentar!`;
    } else {
        mensagem = `${nome}, você ainda não pode se aposentar!`;
    }
} else {
    mensagem = "Sexo não reconhecido. Por favor, insira 'Masculino' ou 'Feminino'.";
}

// Exibir a mensagem na tela
alert(mensagem);
