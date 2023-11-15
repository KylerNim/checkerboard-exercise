let container = document.createElement('div');
container.className = 'container';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px'
container.style.height = '800px'
document.body.appendChild(container);


function makeTile() {
    let tile = document.createElement('div');
    tile.className = 'tile'
    tile.style.width = '12.5%'
    tile.style.height = '12.5%'
    document.querySelector('.container').appendChild(tile);
}

for (let i = 0; i < 64; i++) {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    makeTile();
    document.querySelector('.container').lastChild.style.backgroundColor = randomColor;
}