const renderTextById = (text, id) => {
    document.getElementById(id).innerHTML = text;
}

const renderGreeting = greeting => {
    const name = localStorage.getItem("name");
    renderTextById(name ? `${greeting}, ${name}!` : "Hello!", "greeting");
    renderTextById(name ? "Change the name!" : "Enter your name!", "button");
};

const getName = () => {
    localStorage.setItem("name", prompt("What's your name?"));
    renderGreeting("Hello");
}

renderGreeting("Welcome back");