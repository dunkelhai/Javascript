// Exemplos alunos:

const valores = [5, 6, 7, 8];

console.log(valores);
console.log(valores.length);
console.log(valores[2]);

valores[1] = 2;
console.log(valores);

valores.pop();
valores.push(1);

delete valores[2];

valores.shift();
valores.unshift(20);

valores.splice(1, 0, 12, 22);
valores.splice(1, 1, 2, 3);

let novoValor = valores.slice(3);
console.log(novoValor);

const array2 = [10, 20, 30, 40];
const [a, b, , d] = array2;
console.log(a, b, d);

const array3 = [[10, 20, 30, 40], ['a', 'b', 'c', 'e']];
const [ , [ , , z]] = array3;
console.log(z);