const aprovados = ['Juca', 'Pedro', 'Carla', 'Paula'];

console.log("Tradicional:")
aprovados.forEach(function (nome, i, array) {
    console.log(`Nome aprovado: ${i+1}) ${nome}`);
    // console.log(array);
})

console.log("Arrow function:");
aprovados.forEach((nome, i) => {
    console.log(`Nome aprovado: ${i+1}) ${nome}`);
})