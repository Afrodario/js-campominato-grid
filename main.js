const grid = document.getElementById("grid");

//Funzione di creazione della griglia dinamica EASY
function createGridEasy () {

    //Avvio un ciclo che stampi un numero definito di celle con all'interno ogni iterazione di i
    for (let i = 1; i <= 100; i++) {

        const node = document.createElement("div");
        node.classList.add("cell");
        node.append(i);

        grid.appendChild(node);

        //Aggiungo un ascoltatore di eventi al click
        node.addEventListener("click", 
            function() {
                console.log(this);
                this.classList.add("select");
            }
        )

    }

}

//Funzione di creazione della griglia dinamica HARD
function createGridHard () {

    //Avvio un ciclo che stampi un numero definito di celle con all'interno ogni iterazione di i
    for (let i = 1; i <= 81; i++) {

        const node = document.createElement("div");
        node.classList.add("cell");
        node.append(i);

        grid.appendChild(node);

        //Aggiungo un ascoltatore di eventi al click
        node.addEventListener("click", 
            function() {
                console.log(this);
                this.classList.add("select");
            }
        )

    }

}

//Funzione di creazione della griglia dinamica CRAZY
function createGridCrazy () {

    //Avvio un ciclo che stampi un numero definito di celle con all'interno ogni iterazione di i
    for (let i = 1; i <= 49; i++) {

        const node = document.createElement("div");
        node.classList.add("cell");
        node.append(i);

        grid.appendChild(node);

        //Aggiungo un ascoltatore di eventi al click
        node.addEventListener("click", 
            function() {
                console.log(this);
                this.classList.add("select");
            }
        )

    }

}

const startGame = document.getElementById("start");
const optionDifficulty = document.getElementById("selection");
console.log(optionDifficulty.value);

//Aggiungo un ascoltatore di eventi al pulsante PLAY che al click selezioni la difficoltà e crei la griglia apposita
startGame.addEventListener("click",
    function() {
       if (optionDifficulty.value == "easy") {
           createGridEasy();
       } else if (optionDifficulty.value == "hard") {
           createGridHard();
       } else {
           createGridCrazy();
       }
    }
)



