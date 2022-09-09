let canvas = document.querySelector(".canvas");

let numberOfPixels = 64;

let resolution = Math.pow(numberOfPixels, 2);

let color = "red";


//Create a grid
//change color


function createPixels(number) {
    canvas.style.setProperty('--grid-rows', numberOfPixels);
    canvas.style.setProperty('--grid-cols', numberOfPixels);
    for(let i = 0; i < number; i++){
        var pixel = document.createElement("div");
        canvas.appendChild(pixel).className = "pixel-grid";
    } 
    pixel.style.setProperty("--background-color", color); 
}







createPixels(resolution);




