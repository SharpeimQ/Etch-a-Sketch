const container = document.querySelector('.container');
const button = document.querySelector('.btn-dimensions');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const standard = document.querySelector('.default');
const clear = document.querySelector('.clear');
const sliderH = document.getElementById('myRangeH');
const sliderW = document.getElementById('myRangeW');
//const heights = document.getElementById('demoHeight');

let vertical = 16;
let horizontal = 16;

//Slider 
function changerH(val) {
    document.getElementById('demoHeight').innerHTML = val;
    vertical = val;
}

function changerW(val) {
    document.getElementById('demoWidth').innerHTML = val;
    horizontal = val;
}

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

            box.addEventListener('mouseleave', () => {
                setTimeout(() => {
                box.classList.remove('hover')
                }, 500);
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
    createGrid(vertical, horizontal);
});
