function convertToUpper(obj){
    try {
        return `${obj.name.toUpperCase()}.`;
    } catch (error) {
        if (error instanceof TypeError){
            console.log(
               `Erro: ${error.message} na linha: ${error.lineNumber}`
            );
        }
    }
}


obj = {nome: 'Alysson'};
console.log(
    convertToUpper(obj)
);