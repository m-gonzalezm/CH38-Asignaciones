function setName() {
    const name = prompt('¿Cuál es tu nombre?');
    if (name) {
        setTextByID(`¡Hola, ${name}!`, "name-text");
        setTextByID("¡Cambiar el nombre!", "button");
    } else {
        setTextByID('¡Hola!', "name-text");
        setTextByID("¡Ingresa tu nombre!", "button");
    }
}

function setTextByID(text, id) {
    document.getElementById(id).innerHTML = text;
}