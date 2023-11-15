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

for (let i = 0; i < 4; i++) {
    let opac = .8
    let opac2 = .8
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            makeTile();
            document.querySelector('.container').lastChild.style.backgroundColor = 'teal'
            opac = opac - .15
            document.querySelector('.container').lastChild.style.opacity = opac
        } else {
            makeTile();
            document.querySelector('.container').lastChild.style.backgroundColor = '#FFFFA8'
        }
    }
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 1) {
            makeTile();
            document.querySelector('.container').lastChild.style.backgroundColor = 'teal'
            opac2 = opac2 - .2
            document.querySelector('.container').lastChild.style.opacity = opac2
        } else {
            makeTile();
            document.querySelector('.container').lastChild.style.backgroundColor = '#FFFFA8'
        }
    }
}

