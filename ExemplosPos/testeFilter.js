// JSON
const carrinho = [
    '{ "nome": "Batata", "preco": 1.22 }',
    '{ "nome": "Carne", "preco": 4.42 }',
    '{ "nome": "Cenoura", "preco": 5.2 }',
    '{ "nome": "Peixe", "preco": 18.22 }',
    '{ "nome": "Chocolate", "preco": 8.22 }'
];

const jsonParse = json => JSON.parse(json);
const nome = produto => produto.nome;

// const resultado = carrinho.map(jsonParse).map(nome);

const caro = produto => produto.preco >= 5.00;
const resultado = carrinho.map(jsonParse).filter(caro);

console.log(resultado);
