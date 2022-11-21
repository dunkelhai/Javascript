var numeros = [2, 5, 7, 9];

for (var i = 0; i < 4; i++){
    if (numeros[i] % 2 != 0){
        numeros.splice(numeros.indexOf(numeros[i]), 1);
    } else {
        numeros[i] += 100;
    }
}

console.log(numeros);