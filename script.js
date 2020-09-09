const gridContainer = document.querySelector(".container");
const defaultSize = 10;
const resetButton = document.getElementById("reset");
const resizeButton = document.getElementById("resize");
const pencilButton = document.getElementById("pencil");
const rgbButton = document.getElementById("rgb");
var lastSize;

//Initialize first grid
makeGrid(defaultSize);

//Add Event Listneres for each button.
resetButton.addEventListener('click', reset);
resizeButton.addEventListener('click', resize);
pencilButton.addEventListener('click', pencil);
rgbButton.addEventListener('click', rgb);

function makeGrid(size) {
    lastSize = size;    
    //set grid up
    gridContainer.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";

    //create divs for each cell inside container
    //add class of cell for styling
    for(let i = 0; i < (size*size); i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = 
        
        gridContainer.appendChild(cell);
    }
}

//Function to reset to default configuration
function reset(){
    cleanGrid();
    makeGrid(defaultSize);
}

//removes all nodes from grid to clean up for new grid to be made
function cleanGrid(){
    while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

//function to increade/decrease the amount of cells
function resize(){
    let input = 0, count = 0;
    while(input < 2 || input > 100){
        input = prompt('Please enter a number between 2 - 100');
        if (count > 1)
            return;
        count++;
    }
    cleanGrid();
    makeGrid(input);
    
}


//function to add black background to cells highlighted after pencil button is selected.
function pencil() {
    let list = document.getElementsByClassName('cell');
    for (let i = 0; i < lastSize*lastSize; i++){
        list[i].addEventListener('mouseover', function() {
            //console.log(list[i].tagName);
            list[i].classList.remove('rgb');
            list[i].classList.add('pencil');
        });
    }
}

//function to add rgb effect to cells highlighted after RGB button is selected.
function rgb() {
    let list = document.getElementsByClassName('cell');
    for (let i = 0; i < lastSize*lastSize; i++){
        list[i].addEventListener('mouseover', function() {
            //console.log(list[i].tagName);
            list[i].classList.remove('pencil');
            list[i].classList.add('rgb');
        });
    }
}




