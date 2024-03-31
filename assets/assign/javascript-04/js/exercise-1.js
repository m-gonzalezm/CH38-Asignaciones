console.log("========== 1st exercise ==========");

let arr = ["This", "is", "a", "sentence."];

/**
 * Propuesta con uso de for y sin métodos del arreglo.
 * @param {array} words
 */
function printOutString_M(words) {
    let sentence = "";
    for(let index = 0; index < words.length; index++) {
        if (index) sentence += " ";
        sentence += words[index];
    }
    console.log(sentence);
}

/**
 * Solución usando el método sugerido join().
 * @param {array} words
 */
const printOutString = words => console.log(words.join(" "));

printOutString(arr);
printOutString([]);
printOutString_M(arr);
printOutString_M([]);