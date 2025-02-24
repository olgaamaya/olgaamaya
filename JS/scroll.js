var meinIntervall = setInterval(function() {
    document.getElementById("headline2").innerHTML = "Let's get in contact!";
}, 0); // 0 für timing direkt

// Define the scrollpage function to handle the scrolling logic
function scrollpage() {
    function f() {
        window.scrollTo(0, i);
        if (status == 0) {
            i = i + 2;
            if (i >= Height) { status = 1; }
        }

        // Set a small delay to create the effect of continuous scrolling
        setTimeout(f, 0.01);
    }
    setTimeout(f, 1000);
}

var Height = document.documentElement.scrollHeight;
var i = 1,
    j = Height,
    status = 0;

// Function that applies styles when a media query condition is met
function myFunction(x) {
    if (x.matches) { // If the window width is at least 1250px

        // Start the custom scrolling
        scrollpage();

        // Show headline and headline2, adjust their styles
        document.getElementById("headline").style.display = "block";
        document.getElementById("headline2").style.display = "block";

        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementById("headline").style.margin = "10vh 0 0 0";
        document.getElementById("headline2").style.height = "5vh";
        document.getElementById("social_elements").style.margin = "0";
        document.getElementById("social_elements").style.height = "20vh";
        document.getElementsByTagName("footer")[0].style.height = "20vh";
        document.getElementById("wrap_info_id").style.height = "55vh";
    } else { // If the window width is less than 1250px

        // Hide headline and headline2 for small screens
        document.getElementById("headline").style.display = "none";
        document.getElementById("headline2").style.display = "none";
    }
}

// Create a MediaQueryList object to track changes in the viewport width (min-width: 1250px)
var x = window.matchMedia("(min-width: 1250px)");

// Call the `myFunction` immediately to check if the media query matches when the page loads
myFunction(x);

// Add an event listener to the MediaQueryList object to listen for changes in the viewport width
x.addEventListener("change", function() {
    myFunction(x);
});