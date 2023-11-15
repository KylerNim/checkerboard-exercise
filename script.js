let container = document.createElement('div');
container.className = 'container';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px'
container.style.height = '800px'
container.style.backgroundColor = '#FFFFA8'
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
for (let i = 0; i < 15; i++) {
    setInterval(function() {
        while (document.querySelector('.container').firstChild) {
            document.querySelector('.container').removeChild(document.querySelector('.container').firstChild);
        }
        for (let i = 0; i < 64; i++) {
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            makeTile();
            document.querySelector('.container').lastChild.style.backgroundColor = randomColor;
        }
    }, 2000)
}