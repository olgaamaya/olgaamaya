// Function to find the highest lightbox number
function getHighestLightboxNumber() {
    // Get all elements that might be lightboxes (e.g., those with an id starting with 'Lightbox_')
    const lightboxes = document.querySelectorAll('[id^="Lightbox_"]'); // Adjusted selector to match your IDs
    let highest = 0;

    lightboxes.forEach(function(lightbox) {
        // Assuming the ID is something like 'Lightbox_1', 'Lightbox_2', etc.
        const id = lightbox.id;
        const number = parseInt(id.replace('Lightbox_', '')); // Extract the number after 'Lightbox_'
        if (number > highest) {
            highest = number; // Update the highest number
        }
    });

    return highest; // Return the highest number
}

// Function to initialize and assign the highest lightbox number to X
function setupPointer() {
    const X = getHighestLightboxNumber(); // Get the highest lightbox number

    // Now use X in your onclick event
    const pointerElement = document.getElementById("before-pointer");

    pointerElement.onclick = function() {
        openLightbox(X);
        toSlide(X, 1);
    };
}

// Call setupPointer to initialize when the page loads
window.onload = setupPointer;



// DUPLICATION IN HTML FOR SCROLL BANNERdocument.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".scroll, .scroll2").forEach((container) => {
    let childDiv = container.querySelector("div"); // Select the direct child div inside .scroll or .scroll2
    if (childDiv) {
        let clone = childDiv.cloneNode(true); // Clone the div (with span inside)
        container.appendChild(clone); // Append the cloned div inside the same container
    }
});

const menu = document.getElementById('menu-toggle');
const menupoint = document.getElementById('menupointid');
const navUL = document.getElementById('nav-ul');
const navMenu = document.getElementById('navMenu');
const address = document.getElementById('address');
const body = document.getElementById('bodyid');
const contact = document.getElementById("item-contact");
const morecontact = document.getElementById("more");
const lesscontact = document.getElementById("less");
const sociale2 = document.getElementById("social_elements2");
const logo = document.getElementById("mouseTarget");

menu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navUL.classList.toggle('show');
    address.classList.toggle('show');
    body.classList.toggle('show');
    menu.classList.toggle('show');
    menupoint.classList.toggle('show');
    contact.classList.toggle('contact');
    morecontact.classList.toggle('morecontact');
    lesscontact.classList.toggle('lesscontact');
    sociale2.classList.toggle('show');

    // Toggle logo display
    if (logo.style.display === 'none') {
        logo.style.display = ''; // Restore default display
    } else {
        logo.style.display = 'none'; // Hide it
    }

    // Select all grandchildren (child of child of child) of social_elements2
    const grandchildren = [...sociale2.children]
        .flatMap(child => [...child.children])
        .flatMap(child => [...child.children]); // Now targeting grandchild elements

    // Toggle styles for each grandchild
    grandchildren.forEach((grandchild) => {
        if (grandchild.style.height === '4rem') {
            // Reset styles
            grandchild.style.height = '';
            grandchild.style.width = '';
            grandchild.style.display = '';
            grandchild.style.flexWrap = '';
            grandchild.style.justifyContent = '';
            grandchild.style.alignItems = '';
            grandchild.style.flex = '';
            grandchild.style.margin = '';
        } else {
            // Apply new styles
            grandchild.style.height = '4rem';
            grandchild.style.width = '4rem';
            grandchild.style.display = 'flex';
            grandchild.style.flexWrap = 'wrap';
            grandchild.style.justifyContent = 'center';
            grandchild.style.alignItems = 'center';
            grandchild.style.flex = '0 1 50%';
            grandchild.style.margin = '0.5rem';
        }
    });
});


document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
});

//TO TOP BUTTON
mybutton = document.getElementById("myBtn");
// [When the user scrolls down 20px from the top of the document, show the button]
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
};
// [When the user clicks on the button, scroll to the top of the document]
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};