let canvas = document.querySelector(".canvas");
let slider = document.querySelector(".slider");

let numberOfPixels = 16;

let resolution = Math.pow(numberOfPixels, 2);
let color = "white";
let rainBowColor = "#" + Math.floor(Math.random()*16777215).toString(16);
const root = document.documentElement;
let pixel = document.createElement("div");


//Getting slider range value and resetting state
function changePixels(val){
    canvas.replaceChildren();
    numberOfPixels = val;
    resolution = Math.pow(numberOfPixels, 2);
    document.querySelector(".pixelOutput").textContent = val;
    createPixels(resolution);
}


function changeColor(col){
    root.style.setProperty("--background-paint", col); 
}

//Create a grid
//change color

function createPixels(number) {
    canvas.style.setProperty('--grid-rows', numberOfPixels);
    canvas.style.setProperty('--grid-cols', numberOfPixels);
    for(let i = 0; i < number; i++){
        pixel = document.createElement("div");
        canvas.appendChild(pixel).className = "pixel-grid";
    }
 
    root.style.setProperty("--background-paint", rainBowColor); 
}

createPixels(resolution);




