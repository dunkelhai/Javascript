const aprovados = ['Juca', 'Pedro', 'Carla', 'Paula'];

console.log("Tradicional:")
aprovados.forEach(function (nome, i, array) {
    console.log(`Nome aprovado: ${i+1}) ${nome}`);
    // console.log(array);
})
console.log(" ");

console.log("Arrow function:");
aprovados.forEach((nome, i) => {
    console.log(`Nome aprovado: ${i+1}) ${nome}`);
})
console.log(" ");

console.log("Arrow function mais curto:");
aprovados.forEach((nome, i) => console.log(`${i} Nome aprovado: ${nome}`));
console.log(" ");

console.log("Função em variável:");
const aprovadosLista = aprovado => console.log(aprovado);
aprovados.forEach(aprovadosLista);
console.log(" ");


Array.prototype.testeForEach = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

const aprovadosLista2 = aprovado => console.log(aprovado);
aprovados.testeForEach(aprovadosLista2);
