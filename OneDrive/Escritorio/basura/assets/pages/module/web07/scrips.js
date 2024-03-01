console.log(`script de la sesion web07`);

// get elementById : seleccionar y obtener una referencia a un elemento HTML
document.getElementById(`title`).innerHTML = `El elote en Cdmx cuesta $29.99 pesos`;

function handleTitle() {
    document.getElementById("title").style.color = "blue";
}

function changeColor(color) {
    document.getElementById("description").style.color = color;
}

function changeColorTextUsingThis(color, elementRef) {
    console.log(elementRef);
    elementRef.style.color = color;
}

function resetTitleColors() {
    const titles = document.querySelectorAll('h1.reset-color, h2.reset-color');
    for (let title of titles) {
        title.style.color = ""; // Restablecer color de los títulos con clase 'reset-color'
    }
}

function resetParagraphColors() {
    const paragraphs = document.querySelectorAll('p.reset-color');
    for (let paragraph of paragraphs) {
        paragraph.style.color = ""; // Restablecer color de los párrafos con clase 'reset-color'
    }
}
