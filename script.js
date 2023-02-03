const container = document.querySelector('.container');
numBoxes = 256;

for (i = 0; i < numBoxes; i++) {
    let boxes = document.createElement('div');
    boxes.classList.add('boxStyle');
    container.appendChild(boxes);
}