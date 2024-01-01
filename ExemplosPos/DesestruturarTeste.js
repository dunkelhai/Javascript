function intervalo(maximo, minimo){
    const resultado = Math.random() * (maximo - minimo) + minimo;
    return resultado;
}

console.log(intervalo(2, 80));