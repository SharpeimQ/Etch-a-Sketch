const container = document.querySelector('.container');
const button = document.querySelector('.btn-dimensions');
let vertical = 16;
let horizontal = 16;

//Container creation 
const createGrid = (vertical, horizontal) => {
    for (let i = 0; i < vertical; i++) {
        let row = document.createElement('div');
        row.classList.add('rowStyle');
        container.appendChild(row);
        for (let j = 0; j < horizontal; j++) {
            let box = document.createElement('div');
            box.classList.add('boxStyle');
            row.appendChild(box);

            //Hover Effects
            box.addEventListener('mouseenter', () => {
                box.classList.add('hover');
                box.style.filter = "saturation(90%)";
            })
        }
    }
}

createGrid(vertical, horizontal);

button.addEventListener('click', () => {
    container.replaceChildren();

    do {
    let temp = prompt('Enter the height for the Sketchpad', 16);
    vertical = +temp;
    } while ((vertical <= 0) || (vertical > 100));

    do {
    let temp2 = prompt('Enter the width for the Sketchpad', 16);
    horizontal = +temp2;
    } while ((horizontal <= 0) || (horizontal > 100));
    
    createGrid(vertical, horizontal);
})

