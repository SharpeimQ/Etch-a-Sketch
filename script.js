const container = document.querySelector('.container');
vertical = 16;
horizontal = 16;

for (i = 0; i < vertical; i++) {
    let row = document.createElement('div');
    row.classList.add('rowStyle');
    container.appendChild(row);
    for (j = 0; j < horizontal; j++) {
        let box = document.createElement('div');
        box.classList.add('boxStyle');
        row.appendChild(box);
    }
}

//boxStyle.addEventListener('mouseenter', () => {
//    boxes.classList.add('hover');
//})