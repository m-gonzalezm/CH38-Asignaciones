const renderOutput = (message, number, buttonText) => {
    document.querySelector(".message").innerHTML = message;
    document.querySelector(".number").innerHTML = number;
    document.querySelector("#action-button").innerHTML = buttonText;
};

/**
 * Posible futura modificación: acortar las líneas de código
 * @param {string} id 
 * @param {boolean} status 
 */
const changeStateButton = (id, status) => {
    const comparisons = ["lower", "greater"];
    const nodes = document.querySelectorAll(".comparison-buttons > button");
    const button = document.querySelector(id);
    if (status) {
        button.innerHTML = `My number is ${comparisons[Array.prototype.indexOf.call(nodes, button)]} than that!`;
        button.classList.remove("disabled");
        button.removeAttribute("aria-disabled")
        button.removeAttribute("tabindex");
    } else {
        button.innerHTML = `Your number cannot be ${comparisons[Array.prototype.indexOf.call(nodes, button)]}`;
        button.classList.add("disabled");
        button.setAttribute("aria-disabled", "true");
        button.setAttribute("tabindex", "-1");
    }
}

const binarySearch = values => {
    const reactions = ["😯", "😄", "🙂", "😐", "😒", "🥱", "😴"];
    console.log(values);
    changeStateButton("#lwr-than-btn", values[0] !== values[1]);
    changeStateButton("#gtr-than-btn", values[1] !== values[2]);
    giveComparisonClue(values).then(response => binarySearch(response)).catch(response => binarySearch(response));
    renderOutput("Your number is", values[1], `Yes, that is my number ${reactions[values[3] > 6 ? 6 : values[3]++]}`);
}

const giveComparisonClue = values => {
    return new Promise((lowerThan, greaterThan) => {
        document.querySelector("#lwr-than-btn").addEventListener("click", event => {
            lowerThan([values[0], Math.floor((values[1] - values[0]) / 2 + values[0]), values[1] - 1, values[3]]);
        });
        document.querySelector("#gtr-than-btn").addEventListener("click", event => {
            greaterThan([values[1] + 1, Math.ceil((values[2] - values[1]) / 2 + values[1]), values[2], values[3]]);
        });
    });
}

document.getElementById("action-button").addEventListener("click", event => {
    if (document.querySelector(".comparison-buttons").classList.contains("d-none")) {
        if (document.querySelector("#action-button").innerHTML === "Begin") {
            document.querySelector(".comparison-buttons").classList.remove("d-none");
            binarySearch([1, Math.round(Math.random() * 99) + 1, 100, 0]);
        } else renderOutput("Think a number from 1 to 100 and i will guess it", "", "Begin")
    } else {
        renderOutput("I knew it! Excelent choice", "", "Restart app");
        document.querySelector(".comparison-buttons").classList.add("d-none");
    }
});