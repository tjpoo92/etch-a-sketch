
const container = document.querySelector(".container")
let sqrt = 3
for (let i = 0; i < 100; i++) {
    const div = document.createElement("div")

    container.appendChild(div);

    div.innerHTML = `<p>${i}</p>`
}
container.style = "--columns: 10";
