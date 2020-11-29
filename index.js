
const container = document.querySelector(".nested-container")
let gridSizeSquared = 16;
let gridSize = 4;
let columns = `--columns: ${gridSize}`;
container.style = columns;
window.onload = generateGrid(gridSizeSquared, columns)

let userChoice
const radio = document.querySelectorAll("input")
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("click", (e) => {
        userChoice = e.target.value;
        clearGrid(gridSizeSquared, columns)
        return userChoice;
    })
}

document.querySelector("button").addEventListener("click", userPrompt)
function userPrompt() {
    gridSize = prompt("Choose a number between 1 - 100", "4")
    gridSize = parseInt(gridSize)
    if ((gridSize >= 1) && (gridSize <= 100)) {
        gridSizeSquared = gridSize * gridSize;
        columns = `--columns: ${gridSize}`
        clearGrid(gridSizeSquared, columns)
    }
    else {
        gridSize = 4;
        gridSizeSquared = 16;
        columns = `--columns: ${gridSize}`;
        clearGrid(gridSizeSquared, columns)
    }
}

function clearGrid(gridSizeSquared, columns) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    generateGrid(gridSizeSquared, columns)
}
function generateGrid(gridSizeSquared, columns) {
    for (let i = 0; i < gridSizeSquared; i++) {
        const div = document.createElement("div")
        container.appendChild(div);
        div.style.backgroundColor = "rgba(212,212,212,1)"
        div.addEventListener("mouseenter", (e) => {
            if (userChoice == "random") { colorRandom(div) }
            else if (userChoice == "fade-to-black") { fadeToBlack(div) }
            else { div.style.backgroundColor = "rgb(80,80,80)" }
        })
    }
    container.style = columns;
}

function colorRandom(div) {
    let randomColorOne = Math.floor(Math.random() * 255) + 1
    let randomColorTwo = Math.floor(Math.random() * 255) + 1
    let randomColorThree = Math.floor(Math.random() * 255) + 1
    div.style.backgroundColor = `rgb(${randomColorOne}, ${randomColorTwo}, ${randomColorThree})`
}



function fadeToBlack(div) {

    let currentColor = div.style.backgroundColor
    switch (true) {
        case (currentColor == "rgb(212, 212, 212)"):
            div.style.backgroundColor = "hsl(0,0%,75%)";
            break;
        case (currentColor == "rgb(191, 191, 191)"):
            div.style.backgroundColor = "hsl(0,0%,65%)";
            break;
        case (currentColor == "rgb(166, 166, 166)"):
            div.style.backgroundColor = "hsl(0,0%,55%)";
            break;
        case (currentColor == "rgb(140, 140, 140)"):
            div.style.backgroundColor = "hsl(0,0%,45%)";
            break;
        case (currentColor == "rgb(115, 115, 115)"):
            div.style.backgroundColor = "hsl(0,0%,35%)";
            break;
        case (currentColor == "rgb(89, 89, 89)"):
            div.style.backgroundColor = "hsl(0,0%,25%)";
            break;
        case (currentColor == "rgb(64, 64, 64)"):
            div.style.backgroundColor = "hsl(0,0%,15%)";
            break;
        case (currentColor == "rgb(38, 38, 38)"):
            div.style.backgroundColor = "hsl(0,0%,5%)";
            break;
        case (currentColor == "rgb(13, 13, 13)"):
            div.style.backgroundColor = "hsl(0,0%,0%)";
            break;
        default:
            console.log(currentColor);
    }

}

