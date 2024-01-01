const Pessoa = {
    nome: 'Alysson',
    idade: '22',
    endereco: {
        rua: 'Das Flores',
        numero: 33,
        cidade: 'Xanxerê',
        uf: 'SC',
        cep: '88220-023'
    }
}

console.log(Pessoa);

const {nome, idade} = Pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = Pessoa;
console.log(n, i);

console.log(Pessoa.endereco.rua);

var {endereco: {rua: logradouro, numero: nr, cidade: cd, uf, cep = 'CEP em branco'}} = Pessoa;
console.log(`Meu endereço é na rua ${logradouro} de número ${nr} localizada na cidade ${cd} da UF de ${uf}. Cujo CEP é ${cep}.`);
