// Define the scrollpage function to handle the scrolling logic
function scrollpage() {
    // Inner function `f` that performs the scrolling action
    function f() {
        // Scroll the window to the current vertical position `i`
        window.scrollTo(0, i);

        // Check if scrolling is enabled (status is 0)
        if (status == 0) {
            // Increment the scroll position by 2.5 pixels for each iteration
            i = i + 5;
            // If the scroll position reaches or exceeds the page height, stop scrolling by changing status to 1
            if (i >= Height) { status = 1; }
        }

        // Set a small delay to create the effect of continuous scrolling
        setTimeout(f, 0.01);
    }

    // Start the scroll immediately by calling `f()`
    f();
}

// Function that applies styles when a media query condition is met
function myFunction(x) {
    // Check if the viewport width matches the media query (min-width: 1250px)
    if (x.matches) { // If the window width is at least 1250px

        // Hide the default scrollbars by setting the body's overflow property to hidden
        document.getElementsByTagName("body")[0].style.overflow = "hidden";

        // Adjust the margin of the element with ID "headline" to position it vertically at the center (50% of viewport height)
        document.getElementById("headline").style.margin = "50vh 0 0 0";

        // Set the height of the element with ID "headline2" to 5% of the viewport height
        document.getElementById("headline2").style.height = "5vh";

        // Remove margin around the element with ID "social_elements"
        document.getElementById("social_elements").style.margin = "0";

        // Set the height of the element with ID "social_elements" to 20% of the viewport height
        document.getElementById("social_elements").style.height = "20vh";

        // Set the height of the footer to 20% of the viewport height
        document.getElementsByTagName("footer")[0].style.height = "20vh";

        // Set the height of the element with ID "wrap_info_id" to 55% of the viewport height
        document.getElementById("wrap_info_id").style.height = "55vh";
    }
}

// Get the total scrollable height of the document
var Height = document.documentElement.scrollHeight;
// Initialize the scroll position (`i`) and other variables
var i = 1, // Initial scroll position
    j = Height, // Store the total height of the document
    status = 0; // Track whether scrolling should continue (0 = scrolling, 1 = stop)

// Create a MediaQueryList object to track changes in the viewport width (min-width: 1250px)
var x = window.matchMedia("(min-width: 1250px)");

// Call the `myFunction` immediately to check if the media query matches when the page loads
myFunction(x);

// Start scrolling immediately after the page loads
scrollpage(); // This will trigger the scroll immediately

// Add an event listener to the MediaQueryList object to listen for changes in the viewport width
x.addEventListener("change", function() {
    // Call `myFunction` whenever the media query condition changes (for example, window resizing)
    myFunction(x);
});