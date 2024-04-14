const grid = document.querySelector(".container")

function makeGrid(size) {
    
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }

        grid.appendChild(row);
    }
    const hoverSquares = document.querySelectorAll(".square")

    hoverSquares.forEach(square => { // cambia "squares" a "square"
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue"
    })
})
}
makeGrid(30)



const addSquares = document.querySelector(".addnumber")
addSquares.addEventListener("click", () => {
    let number = prompt("How many squares per side for the new grid?")
      if(number >= 1 && number <= 100){
        while (grid.hasChildNodes()) {
          grid.removeChild(grid.lastChild); // removes all grid squares
      }
        makeGrid(number)
  } else {
    alert("choose a number between 1-100");
  }

})