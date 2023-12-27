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