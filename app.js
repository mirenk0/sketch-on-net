let canvas = document.querySelector(".canvas");

let numberOfPixels = 16;

let resolution = Math.pow(numberOfPixels, 2);


//Create a grid

function createPixels(number) {
    canvas.style.setProperty('--grid-rows', numberOfPixels);
    canvas.style.setProperty('--grid-cols', numberOfPixels);
    for(let i = 0; i < number; i++){
        let pixel = document.createElement("div");
        canvas.appendChild(pixel).className = "pixel-grid";
    }
}







createPixels(resolution);




