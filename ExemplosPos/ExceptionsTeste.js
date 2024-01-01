function convertToUpper(obj){
    try {
        return `${obj.name.toUpperCase()}.`;
    } catch (TypeError) {
     console.log('Erro: ', TypeError);
    }
}


obj = {nome: 'Alysson'};
console.log(
    convertToUpper(obj)
);