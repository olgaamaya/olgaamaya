// THIS PART IS INDEX

// Define media query to check screen width
var sizer = window.matchMedia("(min-width: 950px)");

// Grab the element where mouse events will trigger style changes
const titleeffect = document.getElementById("mouseTarget");

// Get all elements with the class "figure.project-index"
const collection = document.getElementsByClassName("figure.project-index");

// Get the number of "project-index" elements (could be useful later)
let numb = collection.length;

// Event listener for mouseenter on the titleeffect element (the title)
titleeffect.addEventListener("mouseenter", function() {
    // If the screen width is greater than or equal to 950px
    if (sizer.matches) {
        // Change the background color of the body to a random color from --randomcolor2
        document.getElementById("bodyid").style.background = "var(--randomcolor2)";

        // Loop through all project-index elements and set their border to a random color
        for (let e = 0; e < collection.length; e++) {
            collection[e].style.border = "solid 2px var(--randomcolor2)";
        }
    } else {
        // If the screen width is less than 950px, reset the body background color
        document.getElementById("bodyid").style.background = "";

        // Set the border color for all project-index elements
        for (let t = 0; t < collection.length; t++) {
            collection[t].style.border = "solid 2px var(--randomcolor2)";
        }
    }
});

// Event listener for mouseleave on the titleeffect element (the title)
titleeffect.addEventListener("mouseleave", function() {
    // If the screen width is greater than or equal to 950px
    if (sizer.matches) {
        // Reset the background color of the body
        document.getElementById("bodyid").style.background = "";

        // Reset the border color for all project-index elements
        for (let e = 0; e < collection.length; e++) {
            collection[e].style.border = "solid 2px var(--randomcolor2)";
        }
    } else {
        // If the screen width is less than 950px, reset the background color
        document.getElementById("bodyid").style.background = "";

        // Reset the border color for all project-index elements
        for (let t = 0; t < collection.length; t++) {
            collection[t].style.border = "solid 2px var(--randomcolor2)";
        }
    }
});

// Function to change the value of the CSS variable --randomcolor
function changeColor() {
    // Define an array of allowed colors
    const colors = ["yellow", "blue"];

    // Select a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Set the selected color to the --randomcolor CSS variable
    document.documentElement.style.setProperty("--randomcolor", randomColor);
}

// Change the color immediately and then every 5 seconds
changeColor();
setInterval(changeColor, 5000);

// Function to change the value of the CSS variable --randomcolor2
function changeColor2() {
    // Define an array of allowed colors for the second color change
    const colors2 = ["pink", "red"];

    // Select a random color from the array
    const randomColor2 = colors2[Math.floor(Math.random() * colors2.length)];

    // Set the selected color to the --randomcolor2 CSS variable
    document.documentElement.style.setProperty("--randomcolor2", randomColor2);
}

// Change the color immediately and then every 5 seconds
changeColor2();
setInterval(changeColor2, 5000);

// If you want to apply this color change on hover specifically on titleeffect
// Add event listener on titleeffect hover
titleeffect.addEventListener("mouseenter", function() {
    // Change the background color of the body to a random color from --randomcolor2
    document.getElementById("bodyid").style.background = "var(--randomcolor2)";
});

// Add an event listener for mouseleave to reset the background color when the mouse leaves the title
titleeffect.addEventListener("mouseleave", function() {
    // Reset the background color of the body to its original state
    document.getElementById("bodyid").style.background = "";
});


// THIS PART IS INDEX