const grid = document.getElementById("grid");

//Funzione di creazione della griglia dinamica
function createGrid () {
    const node = document.createElement("div");
    node.classList.add("cell");
    return node;
}

//Avvio un ciclo che stampi un numero definito di celle con all'interno ogni iterazione di i
for (let i = 1; i <= 100; i++) {

    const node = document.createElement("div");
    node.classList.add("cell");
    node.append(i);

    grid.appendChild(node);

}

