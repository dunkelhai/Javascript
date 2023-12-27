// JSON
const carrinho = [
    { nome: "Batata", preco: 1.22, estoque: false},
    { nome: "Carne", preco: 4.42 , estoque: false},
    { nome: "Cenoura", preco: 5.2, estoque: false},
    { nome: "Peixe", preco: 18.22, estoque: false},
    { nome: "Chocolate", preco: 8.22, estoque: true}
];

// 1
const taxa = 5.88;
const lista = carrinho.map(p => p.preco).reduce(function(inicial, atual){
    return inicial + atual;
}, taxa);
console.log(lista);

// 2
const temEstoque = (resultado, estoque) => resultado && estoque;
console.log(carrinho.map(p => p.estoque).reduce(temEstoque));

Array.prototype.meuReduce = function (callback){
    let acumular = this[0];
    for (let i = 0; i < this.length; i++) {
        acumular = callback(acumular, this[i], i, this);
    }
    return acumular;
}

const soma = (total, valor) => valor + total;
const numeros = [1,2,3,4,5];

console.log(numeros.meuReduce(soma));