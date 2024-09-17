// Initialize lists and variables
const pixelRadius = 15
let pixelsPerRow = window.prompt("How long should each side of the grid be?")
let sketchLength = pixelRadius*pixelsPerRow
let pixels = [];

// Import Alphabet for generating random class names
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Import sketch body
const sketchBody = document.querySelector(".drawBody");
sketchBody.setAttribute("style",
    `width: ${sketchLength}px; height: ${sketchLength}px`)

// Generate Pixels
function createPixel() {
    // Push className to of list classes and appendchild to div
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("style", "width: 15px; height: 15px; margin: 0px; padding: 0px;")

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
    for (i=0; i<pixelsPerRow*pixelsPerRow; i++) {
        // Fetch parent class and append
        createPixel()
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
        pixelsPerRow = window.prompt("How long should each side of the grid be?")
        sketchLength = pixelRadius*pixelsPerRow
        sketchBody.setAttribute("style",
            `width: ${sketchLength}px; height: ${sketchLength}px`)
        createGrid()
    };
});
