function intervalo({minimo, maximo = 100}){
    const resultado = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(resultado);
}

console.log(
    intervalo({minimo: 2, maximo: 20})
);

var valores = {maximo: 20, minimo: 10};
console.log(
    intervalo(valores)
);

function intervalo2([minimo = 0, maximo = 100]){
    if (minimo > maximo){
        [minimo, maximo] = [maximo, minimo];
    }
    const resultado = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(resultado);
}

console.log(
    intervalo2([10, 20]),
    intervalo2([90]),
    intervalo2([]),
    intervalo2([ , 10])
)