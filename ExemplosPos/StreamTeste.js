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

console.log(Pessoa.endereco.rua);

const {endereco: {rua: logradouro}, endereco: {numero: nr}, endereco: {cidade: cd}, endereco: {uf}} = Pessoa;
console.log(`Meu endereço é na rua ${logradouro} de número ${nr} localizada na cidade \`${cd}\` da UF de \`${uf}\` `);