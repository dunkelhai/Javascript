function convertToUpper(obj){
    try {
        return `${obj.name.toUpperCase()}.`;
    } catch (error) {
        if (error instanceof TypeError){
            console.log(
               `Erro: ${error.message} do tipo: ${error.name}`
            );
        }
    } finally {
        console.log(`Finalizado`);
    }
}


obj = {name: 'Alysson'};
console.log(
    convertToUpper(obj)
);