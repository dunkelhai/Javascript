const Pessoa = {
    nome: 'Alysson',
    idade: '22',
    endereco: {
        rua: 'Das Flores',
        numero: 33,
        cidade: 'Xanxerê',
        uf: 'SC'
    }
}

console.log(Pessoa);

const {nome, idade} = Pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = Pessoa;
console.log(n, i);