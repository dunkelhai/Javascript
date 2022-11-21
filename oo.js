class Pessoa {
    nome;
    idade;

    apresentar() {
        console.log(
            "Olá! Meu nome é " + this.nome + " e tenho " + this.idade + " anos."
        );
    }
}

let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();

pessoa1.nome = "Marcia";
pessoa1.idade = 55;

pessoa2.nome = "Claudio";
pessoa2.idade = 33;

pessoa1.apresentar();
pessoa2.apresentar();