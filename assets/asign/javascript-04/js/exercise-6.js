console.log("========== 6th exercise ==========");

/**
 * Propuesta con uso de for anidados y sin métodos del arreglo.
 * @param {array} numbers
 */
function sortWithBubble_M(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                const bubble = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = bubble;
            }
        }
    }
    return numbers;
}

/**
 * Propuesta con uso de for anidados y del método splice().
 * @param {array} numbers
 */
/* const sortWithBubble_M2 = numbers => {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) numbers[j] = numbers.splice(j + 1, 1, numbers[j])[0];
        }
    }
    return numbers;
} */

/**
 * Nueva propuesta:
 * Acortar el índice máximo para reducir una iteración interna en cada iteración externa y
 * condicionar la salida del for externo si no hubo ningún cambio en el arreglo durante la
 * ejecución del for interno. Nota: Es posible reducir el índice máximo de forma variable,
 * se dejará para una posible propuesta
 * @param {array} numbers
 */
const smartSortWithBubble_M = numbers => {
    for (let i = 1; i < numbers.length; i++) {
        let isNotChanging = true;
        for (let index = 0, maxIndex = numbers.length - i; index < maxIndex; index++) {
            if (numbers[index] > numbers[index + 1]) {
                numbers[index] = numbers.splice(index + 1, 1, numbers[index])[0];
                isNotChanging = false;
            }
        }
        if (isNotChanging) break;
    }
    return numbers;
}

console.log(sortWithBubble_M([3, 6, 12, 5, 100, 1]));
console.log(sortWithBubble_M([]));
console.log(smartSortWithBubble_M([3, 6, 12, 5, 100, 1]));
console.log(smartSortWithBubble_M([]));