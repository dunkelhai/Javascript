// JSON
const carrinho = [
    { nome: "Batata", preco: 1.22 },
    { nome: "Carne", preco: 4.42 },
    { nome: "Cenoura", preco: 5.2 },
    { nome: "Peixe", preco: 18.22 },
    { nome: "Chocolate", preco: 8.22 }
];

const taxa = 5.88;

const lista = carrinho.map(p => p.preco).reduce(function(inicial, atual){
    return inicial + atual;
}, taxa);

console.log(lista);