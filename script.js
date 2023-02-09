const container = document.querySelector('.container');
const button = document.querySelector('.btn-dimensions');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const standard = document.querySelector('.default');
const clear = document.querySelector('.clear');

let vertical = 16;
let horizontal = 16;

const createGrid = (vertical, horizontal) => {
    //Container creation 
    for (let i = 0; i < vertical; i++) {
        let row = document.createElement('div');
        row.classList.add('rowStyle');
        container.appendChild(row);
        for (let j = 0; j < horizontal; j++) {
            let box = document.createElement('div');
            box.classList.add('boxStyle');
            row.appendChild(box);
            box.addEventListener('mouseenter', () => {
            box.classList.add('hover');
            });

                //Eraser
                eraser.addEventListener('click', () => {
                    box.addEventListener('mouseenter', () => {
                    box.style.backgroundColor = 'white';
                });
                });
                
                //Default Color
                standard.addEventListener('click', () => {
                    box.addEventListener('mouseenter', () => {
                    box.style.backgroundColor = '#18bcfd';
                });
                });              

                //Rainbow
                rainbow.addEventListener('click', () => {
                    box.addEventListener('mouseenter', () => {
                        let randHex = Math.floor(Math.random() * 0xffffff).toString(16);
                        randHex = `#${randHex.padStart(6,"0")}`;
                        box.style.backgroundColor = randHex;
                });
                });  
        }
    }
}

createGrid(vertical, horizontal);

//Clear Board
clear.addEventListener('click', () => {
    container.replaceChildren();
    createGrid(vertical, horizontal);
});

//Change Dimensions
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
});
