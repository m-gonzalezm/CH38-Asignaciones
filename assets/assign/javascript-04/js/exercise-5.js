console.log("========== 5th exercise ==========");

const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people.join(", "));
people.splice(1, 1);
people.splice(2, 1);
people.unshift(people.splice(1, 1)[0]);
people.push("Miguel");
for (const person of people) {
    console.log(person);
    if (person === "Maria") break;
}
console.log(`Maria is located at index ${people.indexOf("Maria")}.`);
console.log(people.join(", "));