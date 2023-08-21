//Initial set up
const container = document.querySelector("#etchContainer");

 

// Grid loops

for (let i = 0; i < 50; i++) {
    let gridBox = document.createElement('div');
    container.append(gridBox);
    gridBox.classList.add('grid');
    for (let j = 0; j < 50; j++) {
        let innerGridBox = document.createElement('div');
        gridBox.append(innerGridBox);
        innerGridBox.classList.add('grid', 'gridColumn')
    }
}