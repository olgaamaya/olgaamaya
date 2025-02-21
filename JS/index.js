// From http://stackoverflow.com/a/5365036/2065702
const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
document.documentElement.style.setProperty('--main-bg-color', randomColor);

function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length != 7) { // In any case, the color code is invalid
        randomColor = generateRandomColor();
    }
    return randomColor;
    // The random color will be freshly served
}
document.body.style.backgroundColor = generateRandomColor() // -> #E1AC94



var sizer = window.matchMedia("(min-width: 950px)");
var mouseTarget = document.getElementById('mouseTarget');
// var mouseTarget2 = document.getElementById('social_elements'); //

const collection = document.getElementsByClassName("figure.project-index");
let numb = document.getElementsByClassName("figure.project-index").length;

mouseTarget.addEventListener('mouseenter', function() {
    if (sizer.matches) {
        document.getElementById("bodyid").style.background = "var(--secondcolor)";
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    } else {
        document.getElementById("bodyid").style.background = '';
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    }
});

mouseTarget.addEventListener('mouseleave', function() {
    if (sizer.matches) {
        document.getElementById("bodyid").style.background = "";
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    } else {
        document.getElementById("bodyid").style.background = "";
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    }
});


mouseTarget2.addEventListener('mouseenter', function() {
    if (sizer.matches) {
        document.getElementById("bodyid").style.background = "var(--secondcolor)";
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    } else {
        document.getElementById("bodyid").style.background = '';
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    }
});

mouseTarget2.addEventListener('mouseleave', function() {
    if (sizer.matches) {
        document.getElementById("bodyid").style.background = "";
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    } else {
        document.getElementById("bodyid").style.background = "";
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "solid 2px pink";
        }
    }
});