function scrollpage() {
    function f() {
        window.scrollTo(0, i);
        if (status == 0) {
            i = i + 2.15;
            if (i >= Height) { status = 1; }
        }

        //else {
        //  i = i - 4;
        //    if (i <= 1) { status = 0; } // if you don't want continue scroll then remove this line
        // }
        setTimeout(f, 0.01);
    }
    f();
}
var Height = document.documentElement.scrollHeight;
var i = 1,
    j = Height,
    status = 0;

function myFunction(x) {
    if (x.matches) { // If media query matches
        scrollpage();
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 1500px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});