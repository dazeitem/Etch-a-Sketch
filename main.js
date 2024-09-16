// Initialize lists
let rowDiv = [];
let pixels = [];

// Import Alphabet for generating random class names
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Import sketch body
const sketchBody = document.querySelector(".drawbody");

// Generate random className
let generateName = () => {
    let className = '';
    for (i=0; i<8; i++) {
        className += alphabet[Math.floor(Math.random() * 26)];
    };
    return className;
};

// Create rows
function createRows() {
    for (i=0; i!=17; i++) {
        let className = generateName();
        rowDiv.push(className);
        const row = document.createElement("div");
        row.classList.add(className, "row");
    };
};
