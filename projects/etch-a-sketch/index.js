//Initial set up
const container = document.querySelector("#etchContainer");
const userInputSection = document.getElementById("userInputSection")
const slider = document.getElementById("myRange");
const sliderDisplay = document.getElementById("sliderDisplay");
const resetBtn = document.getElementById("resetBtn")

//slider
sliderDisplay.innerHTML = slider.value;
let sliderValue = slider.value;
slider.oninput = function() {
    sliderDisplay.innerHTML = this.value;
    sliderValue = this.value;
    clearGrid();
    gridSize(sliderValue);
}

function clearGrid () {
    gridBox.remove()
    innerGridBox.remove()
}

// Grid loops
let gridBox;
let innerGridBox;

function gridSize (input) {
    console.log(input);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

     for (let i = 0; i < input; i++) {
        gridBox = document.createElement('div');
        container.append(gridBox);
        gridBox.classList.add('grid');
        for (let j = 0; j < input; j++) {
            innerGridBox = document.createElement('div');
            gridBox.append(innerGridBox);
            innerGridBox.classList.add('grid', 'gridColumn')
            innerGridBox.setAttribute('id', `gridSquare[j]`)
            innerGridBox.addEventListener('mouseout', function() {
                this.style.backgroundColor = 'black';
              });
        }
    }
}

gridSize(sliderValue)

//reset button

function resetColor() {
    let divs = document.getElementsByClassName("gridColumn");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "aliceblue"
    }
}

resetBtn.addEventListener('click', resetColor);

//hover effects

innerGridBox.onmouseover = function() {
    innerGridBox.style.backgroundColor = "black";
}