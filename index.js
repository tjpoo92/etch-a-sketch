
const container = document.querySelector(".nested-container")


let gridSizeSquared = 16;
let gridSize = 4;
let columns = `--columns: ${gridSize}`;

container.style = columns;
for (let i = 0; i < gridSizeSquared; i++) {
    const div = document.createElement("div")
    container.appendChild(div);
}


const clearButton = document.querySelector("button").addEventListener("click", userPrompt)


function userPrompt() {
    gridSize = prompt("Choose a number between 1 - 100", "4")
    gridSize = parseInt(gridSize)
    if ((gridSize >= 1) && (gridSize <= 100)) {
        gridSizeSquared = gridSize * gridSize;
        columns = `--columns: ${gridSize}`
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        generateGrid(gridSize, gridSizeSquared, columns)
    }
}
function generateGrid(gridSize, gridSizeSquared, columns) {

    for (let i = 0; i < gridSizeSquared; i++) {
        const div = document.createElement("div")
        container.appendChild(div);
    }
    container.style = columns;
}

// mouseover > color change per default and customer selection

