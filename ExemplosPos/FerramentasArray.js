const aprovados = ['Juca', 'Pedro', 'Carla', 'Paula'];

aprovados.forEach(function (nome, i, array) {
    console.log(`Nome aprovado: ${i+1}) ${nome}`);
    console.log(array);
})