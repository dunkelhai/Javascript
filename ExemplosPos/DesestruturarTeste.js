function intervalo({minimo, maximo = 100}){
    const resultado = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(resultado);
}

console.log(
    intervalo({minimo: 2, maximo: 20})
);