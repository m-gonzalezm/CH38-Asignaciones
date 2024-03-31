console.log("========== 3rd exercise ==========");

/**
 * Propuesta con uso de for y sin métodos del arreglo.
 * @param {array} numbers
 * @returns 
 */

const sumNumbers_M = array => {
    let sum = 0;
    for(let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

const productNumbers_M = array => {
    let product = 0;
    for(let index = 0; index < array.length; index++) {
        if (!index) product = 1;
        product *= array[index];
    }
    return product;
}

console.log(`Sum: ${sumNumbers_M([1, 2, 3, 4])}`);
console.log(`Sum: ${sumNumbers_M([0])}`);
console.log(`Sum: ${sumNumbers_M([])}`);
console.log(`Product: ${productNumbers_M([1, 2, 3, 4])}`);
console.log(`Product: ${productNumbers_M([0])}`);
console.log(`Product: ${productNumbers_M([])}`);