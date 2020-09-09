//RGB function for getting random color;
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const gridContainer = document.querySelector(".container");
const defaultSize = 10;

function makeGrid() {
    
}