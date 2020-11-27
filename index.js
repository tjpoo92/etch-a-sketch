
const container = document.querySelector(".nested-container")

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div")

    container.appendChild(div);

    div.innerHTML = `<p>${i}</p>`
}
container.style = "--columns: 4";

// mouseover > color change per default and customer selection

