let canvas = document.querySelector(".canvas");


let resolution = 16;


//Create a grid

function createPixels(number) {
    for(let i = 0; i <= number; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel-grid");
        canvas.appendChild(pixel);
    }
}



createPixels(resolution);




