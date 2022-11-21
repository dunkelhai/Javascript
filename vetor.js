var numeros = [2, 5, 7, 9];

for (var i = 0; i < 4; i++){
    if (numeros[i] % 2 != 0){
        numeros.splice(numeros.indexOf(numeros[i]), 1);
    } else {
        numeros[i] += 100;
    }
}

console.log(numeros);



const myArray2 = [1, 2, 3, 4, 5];

const index = myArray2.indexOf(2);

const x2 = myArray2.splice(index, 1);

console.log(`myArray values: ${myArray2}`);
console.log(`variable x value: ${x2}`);


const myArray3 = [1, 2, 3, 4, 5];

const x3 = myArray3.splice(1, 1);

console.log(`myArray values: ${myArray3}`);
console.log(`variable x value: ${x3}`);


const myArray4 = [1, 2, 3, 4, 5];

function removeValue(value, index, arr) {
    // If the value at the current array index matches the specified value (2)
    if (value === 2) {
        // Removes the value from the original array
        arr.splice(index, 1);
        return true;
    }
    return false;
}

// Pass the removeValue function into the filter function to return the specified value
const x4 = myArray4.filter(removeValue);

console.log(`myArray values: ${myArray4}`);
console.log(`variable x value: ${x4}`);

