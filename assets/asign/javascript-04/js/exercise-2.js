console.log("========== 2nd exercise ==========");

/**
 * Propuesta con uso de for y sin métodos del arreglo.
 */
/* function printOutDoubles_M(numbers) {
    for(let index = 0; index < numbers.length; index++) {
        numbers[index] *= 2;
    }
    console.log(numbers);
} */

/**
 * Nueva propuesta:
 * No modificar el arreglo de entrada, igualando el funcionamiento del método map().
 * @param {array} numbers
 * @returns 
 */
function printOutDoubles_M(numbers) {
    const doubles = [];
    for(let index = 0; index < numbers.length; index++) {
        doubles[index] = numbers[index] * 2;
    }
    console.log(doubles);
}

/**
 * Solución usando el método sugerido join().
 * @param {array} numbers
 * @returns 
 */
const printOutDoubles = numbers => console.log(numbers.map((number) => number * 2));

printOutDoubles_M([1, 2, 4, 5]);
printOutDoubles_M([]);
printOutDoubles([1, 2, 4, 5]);
printOutDoubles([]);