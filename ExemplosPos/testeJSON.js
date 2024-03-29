// JSON
const carrinho = [
    '{ "nome": "Batata", "preco": 1.22 }',
    '{ "nome": "Carne", "preco": 4.42 }',
    '{ "nome": "Cenoura", "preco": 5.2 }',
    '{ "nome": "Peixe", "preco": 18.22 }',
    '{ "nome": "Chocolate", "preco": 8.22 }'
];

const jsonParse = json => JSON.parse(json);
const preco = produto => produto.preco;
const nome = produto => produto.nome;

const resultado = carrinho.map(jsonParse).map(nome);
console.log(resultado);

//criado map personalizado
Array.prototype.meuMap = function(callback){
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        novoArray.push(
            callback(this[i], i, this)
        );
    }
    return novoArray;
}

const resultado2 = carrinho.meuMap(jsonParse).meuMap(preco);
console.log(resultado2);