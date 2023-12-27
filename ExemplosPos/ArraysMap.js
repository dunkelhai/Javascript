const numeros = [1, 2, 3, 4, 5, 6];

let resultado = numeros.map(function (e) {
    return e * 2;
});

const soma = el => el + 2;
const triplo = el => el * 4;
const moedaBRL = el => `R$ ${parseFloat(el).toFixed(2).replace('.', ',')}`;

resultadoNovo = numeros.map(soma).map(triplo).map(moedaBRL);

console.log(resultadoNovo);