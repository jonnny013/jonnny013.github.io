//Initial set up
const container = document.querySelector("#etchContainer");
const userInputSection = document.getElementById("userInputSection")
const slider = document.getElementById("myRange");
const sliderDisplay = document.getElementById("sliderDisplay");
const resetBtn = document.getElementById("resetBtn");
const colorChanger = document.getElementById("colorChanger");
const colorDisplay = document.getElementById("colorDisplay");

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
                this.style.backgroundColor = setColor();
              });
        }
    }
}

colorChanger.addEventListener("change", changeColor)



function changeColor () {
    console.log(colorChanger)
    if (colorChanger.value === "black") {
        colorDisplay.textContent = "Colorful"
        return colorChanger.value = "color"
    }
    else {
        colorDisplay.textContent = "Black"
        return colorChanger.value = "black"
    }
}

const setColor = () => {

    if (colorChanger.value === "black") {
        return "black"
    }
    else {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
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