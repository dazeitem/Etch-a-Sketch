// Initialize lists and variables
let pixelsPerRow
const bodySize = 500
let pixels = [];

// Import Alphabet for generating random class names
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Create sketch body 
function setPixelSize() {
    pixelsPerRow = window.prompt("How long should each side of the grid be?")
    if (pixelsPerRow>50) {
        pixelsPerRow = 50
    } else if (pixelsPerRow<10) {
        pixelsPerRow = 10
    }
    return Math.floor(bodySize/pixelsPerRow)
    /* sketchBody.setAttribute("style",
         `width: ${bodySize}px; height: ${bodySize}px`) */
}

// Import sketch body
const sketchBody = document.querySelector(".drawBody");

// Generate Pixels
function createPixel(pixelSize) {
    // Push className to of list classes and appendchild to div
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("style", `width: ${pixelSize}px; height: ${pixelSize}px; margin: 0px; padding: 0px;`)

    // Fetch parent class and append
    sketchBody.appendChild(pixel)

    // Event Listener 
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "grey"
    });
    pixel.addEventListener('mouseout', function() {   
    });

    // push pixels to list
    pixels.push(pixel)
}

// Push className to of list classes and appendchild to div
function createGrid() {
    let pixelSize = setPixelSize()
    for (i=0; i<pixelsPerRow*pixelsPerRow; i++) {
        // Fetch parent class and append
        createPixel(pixelSize)
    }
}

createGrid()

// Set up buttons
const buttons = document.querySelector('.btn')
buttons.addEventListener("click", (e) => {
    let btnName = e.target.id
    console.log(btnName)
    if (btnName == "clear") {
        for (let pixel of pixels) {
            pixel.style.backgroundColor = ""
        };
    } else if (btnName == "newGrid") {
        btnName = ''
        sketchBody.replaceChildren()
        createGrid()
    };
});