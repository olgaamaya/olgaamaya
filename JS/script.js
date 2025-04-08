// DUPLICATION IN HTML FOR SCROLL BANNERdocument.addEventListener("DOMContentLoaded", () => {
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".scroll, .scroll2").forEach((container) => {
        let childDiv = container.querySelector("div"); // Select the direct child div inside .scroll or .scroll2
        if (childDiv) {
            for (let i = 0; i < 1; i++) { // Clone and append one time
                let clone = childDiv.cloneNode(true);
                container.appendChild(clone);
            }
        }
    });
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
const header = document.getElementById("header"); // Make sure to target the header if needed
const rowid = document.getElementById('rowid'); // Added rowid element

menu.addEventListener('click', () => {

    // Create an array of elements to toggle the class
    const elementsToToggle = [
        navMenu, navUL, address, body, menu, menupoint,
        contact, morecontact, lesscontact, sociale2
    ];

    // Loop through each element and toggle the "show" or respective class
    elementsToToggle.forEach(element => element.classList.toggle('show'));


    // Toggle specific classes for contact-related elements
    contact.classList.toggle('contact');
    morecontact.classList.toggle('morecontact');
    lesscontact.classList.toggle('lesscontact');

    // Toggle logo display
    if (logo.style.display === 'none') {
        logo.style.display = ''; // Restore default display
    } else {
        logo.style.display = 'none'; // Hide it
    }

    // Toggle header display
    if (header) {
        if (header.style.display === 'none') {
            header.style.display = ''; // Restore default display for header
        } else {
            header.style.display = 'none'; // Hide header if needed
        }
    }

    const wrapInfo = document.getElementById('wrap_info_id');

    // Ensure correct display of menu-toggle and mailback based on screen width
    const menuToggle = document.getElementById('menu-toggle');
    const mailbackButton = document.getElementById('mailback');

    if (window.innerWidth < 1000) {
        // Mobile view: menu-toggle should be visible, mailback should be hidden
        menuToggle.style.display = 'flex';
        mailbackButton.style.display = 'none';
    } else {
        // Desktop view: mailback should be visible, menu-toggle should be hidden
        mailbackButton.style.display = 'flex';
        menuToggle.style.display = 'none';
    }

    // Check if there is a hash in the URL and remove it
    const currentHash = window.location.hash;
    if (currentHash) {
        // Remove any hash in the URL (i.e., anything after the #)
        history.replaceState(null, null, window.location.pathname);
    } else {
        // If no hash is present, optionally add #menu or other hash if needed
        history.replaceState(null, null, '#menu2');
    }

    // Select the menu link with the class '.menu-toggle'

    // Check if the menu link exists
    if (menuToggle) {
        // Add an event listener to the menu link to toggle its href on click
        menuToggle.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Toggle the href attribute between empty string and '#menu2'
            if (menuToggle.getAttribute('href') === '#menu') {
                menuToggle.setAttribute('href', ''); // Change to empty href
            } else {
                menuToggle.setAttribute('href', '#menu'); // Change to '#menu2'
            }
        });
    }


    // Select all grandchildren (child of child of child) of social_elements2
    const grandchildren = [...sociale2.children]
        .flatMap(child => [...child.children])
        .flatMap(child => [...child.children]); // Now targeting grandchild elements

    // Toggle styles for each grandchild
    grandchildren.forEach((grandchild) => {
        if (grandchild.style.color === 'black') {
            // Reset styles if color is black
            grandchild.style.display = '';
            grandchild.style.justifyContent = '';
            grandchild.style.alignItems = '';
            grandchild.style.color = ''; // Reset color
        } else {
            // Apply new styles if color is not black
            grandchild.style.display = 'flex';
            grandchild.style.justifyContent = 'center';
            grandchild.style.alignItems = 'center';
            grandchild.style.color = 'black'; // Set color to black
        }
    });

});


document.addEventListener('DOMContentLoaded', function() {
    const wrapInfo = document.getElementById('wrap_info_id');
    const rowid = document.getElementById('rowid');

    // Function to handle rowid visibility based on wrap_info_id's display state
    function updateRowidVisibility() {
        if (wrapInfo && wrapInfo.style.display === 'flex') {
            rowid.style.display = 'none'; // Hide rowid when wrap_info_id is displayed as flex
        } else {
            rowid.style.display = ''; // Show rowid by default (it will inherit its default display style)
        }
    }

    // Call the function to set rowid visibility on page load
    updateRowidVisibility();

    // Watch for changes in the display style of wrap_info_id
    const observer = new MutationObserver(updateRowidVisibility);
    observer.observe(wrapInfo, { attributes: true, attributeFilter: ['style'] });

    // Handle menu toggle and other actions (optional)
    let menuOpen = false;

    // Example of how to toggle menu and update other elements
    const menuButton = document.getElementById('menu'); // Assuming there is a menu button with id="menu"
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            // Handle menu opening/closing
            menuOpen = !menuOpen;

            // Optionally, toggle other elements, like showing/hiding menu items
            if (menuOpen) {
                // Example: You can open the menu or do something when the menu opens
                console.log('Menu opened');
            } else {
                // Example: You can close the menu or do something when the menu closes
                console.log('Menu closed');
            }

            // Update rowid visibility based on wrap_info_id display state
            updateRowidVisibility();
        });
    }

    // Ensure the script runs correctly when resizing the window (optional)
    window.addEventListener('resize', function() {
        updateRowidVisibility(); // Re-check the visibility of rowid during window resize
    });
});


document.querySelectorAll('.infoolga').forEach(link => {
    link.addEventListener('click', function(e) {
        // Create an array of elements to remove the "show" class from
        const elementsToHide = [navMenu, navUL, address, body, menu, menupoint, contact, morecontact, lesscontact, sociale2];

        // Loop through each element and remove the "show" class
        elementsToHide.forEach(element => element.classList.remove('show'));

        // // Toggle logo back to default display (restore visibility)
        // logo.style.display = ''; // Restore default display (could be block, inline, etc.)

        // // Toggle header back to default display
        // if (header) {
        //     header.style.display = ''; // Restore default display for header
        // }


        // Toggle logo display
        if (logo.style.display === 'none') {
            logo.style.display = 'none'; // Restore default display
        } else {
            logo.style.display = ''; // Hide it
        }

        // Toggle header display
        if (header) {
            if (header.style.display === 'none') {
                header.style.display = 'none'; // Restore default display for header
            } else {
                header.style.display = ''; // Hide header if needed
            }
        }





        // Reset hash in URL if it was modified in the first function
        const currentHash = window.location.hash;
        if (currentHash) {
            // Remove any hash in the URL (i.e., anything after the #)
            history.replaceState(null, null, window.location.pathname);
        }

        // Reset any styles applied to grandchildren of social_elements2 (specific flex styles)
        const grandchildren = [...sociale2.children]
            .flatMap(child => [...child.children])
            .flatMap(child => [...child.children]); // Targeting grandchild elements

        grandchildren.forEach((grandchild) => {
            // Reset styles applied to grandchildren
            grandchild.style.display = '';
            grandchild.style.justifyContent = '';
            grandchild.style.alignItems = '';
            grandchild.style.color = ''; // Reset color

        });

        // Reset any other specific elements or styles
        const wrapInfo = document.getElementById('wrap_info_id');
        if (wrapInfo) {
            wrapInfo.style.display = 'none'; // Hide the wrap_info_id element
        }

        const closeBtn = document.getElementById('close-btn');
        if (closeBtn) {
            closeBtn.style.display = 'flex'; // Hide close button again
        }

        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) {
            menuToggle.style.display = ''; // Ensure menu toggle is visible again
        }
    });
});



// TO TOP BUTTON
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

// [When the user clicks on the button, scroll smoothly to the top of the document]
function topFunction() {
    window.scrollTo({
        top: 0, // Scroll to the top
        behavior: 'smooth' // Make the scroll smooth
    });
};

document.addEventListener('DOMContentLoaded', function() {
    // Create an intersection observer to detect when an element comes into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const figure = entry.target;

            // If the figure is in the viewport (in view)
            if (entry.isIntersecting) {
                const video = figure.querySelector('video');
                const img = figure.querySelector('img');
                const sources = figure.querySelectorAll('source');

                // Lazy load video if it exists
                if (video && video.dataset.src) {
                    video.src = video.dataset.src; // Set the actual video source
                    video.load();
                    video.play(); // Start playing the video if required
                }

                // Lazy load images (srcset for <picture> elements)
                if (img && img.dataset.src) {
                    img.src = img.dataset.src; // Set the actual image source
                }

                // Lazy load <source> elements (for responsive images in <picture>)
                sources.forEach(source => {
                    if (source.dataset.srcset) {
                        source.srcset = source.dataset.srcset; // Set the responsive srcset
                    }
                });

                // Stop observing this figure since the media is now loaded
                observer.unobserve(figure);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is in the viewport
    });

    // Select all figures that contain media
    const figures = document.querySelectorAll('figure.project-index');

    figures.forEach(figure => {
        const video = figure.querySelector('video');
        const img = figure.querySelector('img');
        const sources = figure.querySelectorAll('source');

        // Eager load media for figures already in view
        if (isElementInViewport(figure)) {
            if (video && video.dataset.src) {
                video.src = video.dataset.src; // Eagerly load the video source
                video.load();
                video.play(); // Start playing the video if required
            }

            if (img && img.dataset.src) {
                img.src = img.dataset.src; // Eagerly load the image source
            }

            sources.forEach(source => {
                if (source.dataset.srcset) {
                    source.srcset = source.dataset.srcset; // Eagerly load the responsive srcset
                }
            });
        } else {
            // If the figure is not in view, start observing it for lazy loading
            observer.observe(figure);
        }
    });

    // Helper function to check if an element is currently in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
});


// const container = document.querySelector('.project-list-index');
// const figures = Array.from(container.getElementsByTagName('figure'));

// // Store the original order of figures in an array
// const originalOrder = [...figures];

// let hasShuffled = false; // Flag to track if the shuffle has been done

// function shuffleFigures() {
//     // Shuffle the figures randomly
//     for (let i = figures.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [figures[i], figures[j]] = [figures[j], figures[i]]; // Swap
//     }

//     // Clear the container and append the shuffled figures
//     container.innerHTML = '';
//     figures.forEach(figure => container.appendChild(figure));
// }

// function resetFigures() {
//     // Reset the figures to their original order
//     container.innerHTML = '';
//     originalOrder.forEach(figure => container.appendChild(figure));
// }

function isLightboxVisible() {
    // Get all elements in the document
    const allElements = document.querySelectorAll('[id^="Lightbox_"]');

    // Loop through each element that starts with 'Lightbox_'
    for (let lightbox of allElements) {
        // Check if the lightbox is visible (display is 'flex')
        if (lightbox.style.display === 'flex') {
            console.log(`${lightbox.id} is visible.`); // Debugging log
            return true; // A lightbox is visible
        }
    }

    console.log("No lightbox is visible."); // Debugging log
    return false; // No lightbox is visible
}

document.addEventListener("DOMContentLoaded", function() {
    const mailbackButton = document.getElementById("mailback");
    const wrapInfo = document.getElementById("wrap_info_id");
    const infoolgaLinks = document.querySelectorAll('.infoolga'); // Select all elements with class 'infoolga'
    const rowid = document.getElementById("rowid"); // The div containing your figures
    const closeBtn = document.getElementById("close-btn"); // The close button
    const menuToggle = document.getElementById("menu-toggle"); // Menu toggle button

    // Initially set the wrap_info_id to display: none and close button to hidden
    wrapInfo.style.display = "none";
    closeBtn.style.display = "none"; // Close button is hidden initially
    rowid.style.display = ""; // Ensure rowid is visible by default on small screens

    // Function to handle smooth scroll and show the wrap_info_id
    function scrollToWrapInfo(targetElement) {
        // Ensure wrap_info_id is visible (display: flex)
        const wrapInfo = document.getElementById('wrap_info_id');
        const closeBtn = document.getElementById('close-btn');
        const menuToggle = document.getElementById('menu-toggle');
        const mailbackButton = document.getElementById('mailback');
        const rowid = document.getElementById('rowid');

        // Set the visibility of wrap_info_id and related elements
        wrapInfo.style.display = "flex";
        closeBtn.style.display = "flex"; // Show close button
        mailbackButton.style.display = "none"; // Hide mailback button
        rowid.style.display = "none"; // Hide the project list container
        menuToggle.style.display = "none"; // Hide the menu toggle

        // Scroll to the specific element if needed
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.scrollBy(0, -50); // Apply the -20px offset
        }

    }

    closeBtn.addEventListener("click", function() {
        // Hide the wrap_info_id when close button is clicked
        const wrapInfo = document.getElementById('wrap_info_id');
        if (wrapInfo) {
            wrapInfo.style.display = "none"; // Explicitly hide wrap_info_id
        }

        // Show the rowid container again (default display)
        const rowid = document.getElementById('rowid');
        if (rowid) {
            rowid.style.display = ""; // Ensure rowid is visible again (default display)
        }

        // Show or hide mailback based on screen width
        const mailbackButton = document.getElementById('mailback');
        if (window.innerWidth < 1000) {
            mailbackButton.style.display = "flex"; // Show the mailback button on mobile view
        } else {
            mailbackButton.style.display = ""; // Reset display for mailback (default display)
        }

        sociale2.style.display = ''; // Hide it


        footer.style.display = "";

        // Hide the close button
        closeBtn.style.display = "none";

        body.style.background = "";
        logo.style.display = "";

        sociale2.style.display = ""; // Reset display for mailback (default display)



        // Get the button (myBtn)
        const myBtn = document.querySelector("#myBtn");

        myBtn.style.borderTop = "";
        myBtn.style.borderRight = "";
        myBtn.style.borderLeft = "";

        // Toggle header back to default display
        if (header) {
            header.style.display = ''; // Restore default display for header
        }

        // Ensure that menu-toggle and menupoint are handled based on screen width
        const menuToggle = document.getElementById('menu-toggle');
        const menupoint = document.getElementById('menupoint');
        if (window.innerWidth < 1000) {
            menuToggle.style.display = "flex"; // Show the menu-toggle on mobile view when close button is clicked
            if (menupoint) {
                menupoint.style.display = "flex"; // Ensure menupoint is visible on mobile
            }
        } else {
            menuToggle.style.display = "none"; // Hide the menu-toggle on desktop view
            if (menupoint) {
                menupoint.style.display = "none"; // Hide menupoint on desktop view
            }
        }

        // Reset mailback button display based on screen width
        if (window.innerWidth > 1000) {
            mailbackButton.style.display = ""; // Reset to default display for mailback button (on desktop)
        }

        // Reverse changes made by the mailback button function
        if (wrapInfo.style.display === "none") {
            // Scroll to the top of the page if wrapInfo is hidden
            window.scrollTo(0, 0);
        }

        // Reverse any other necessary changes from the first function
        const elementsToReset = [
            navMenu, navUL, address, body, menu, menupoint, contact, morecontact, lesscontact, sociale2
        ];

        elementsToReset.forEach(element => {
            if (element) {
                element.classList.remove('show'); // Remove the 'show' class if it was added
            }
        });

        // Reset styles for each grandchild element of sociale2 (if any)
        const grandchildren = [...sociale2.children]
            .flatMap(child => [...child.children])
            .flatMap(child => [...child.children]); // Now targeting grandchild elements

        grandchildren.forEach((grandchild) => {
            grandchild.style.display = ''; // Reset display
            grandchild.style.justifyContent = '';
            grandchild.style.alignItems = '';
            grandchild.style.color = ''; // Reset color
        });

        // Remove the hash from the URL
        if (window.location.hash) {
            history.replaceState(null, null, window.location.pathname); // Removes the hash from the URL
        }
    });



    // Function to update the visibility of menupoint based on the hash and window size
    function updateVisibility() {
        if (window.location.hash === '#wrap_info_id') {
            // Hide menuToggle, menupoint, and other elements if the hash is present
            if (menuToggle) {
                menuToggle.style.display = "none";
            }
            // Ensure menupoint is hidden if the hash is active and screen width is greater than 1000px
            if (footer) {
                if (window.innerWidth <= 1000) {
                    footer.style.display = "flex";
                } else {
                    footer.style.display = "none";
                }
            }
        }
    }

    // Call the function when the page loads or the window is resized
    window.addEventListener('load', updateVisibility);
    window.addEventListener('resize', updateVisibility);


    // Get the button (myBtn)
    const myBtn = document.querySelector("#myBtn");

    // Add click event listener on the mailback button
    mailbackButton.addEventListener("click", function() {
        // Show the mailback button again
        mailbackButton.style.display = "flex";


        logo.style.display = 'none'; // Hide it

        sociale2.style.display = 'none'; // Hide it

        footer.style.display = "none";

        // Check if the wrap_info_id is already visible
        if (wrapInfo.style.display === "none") {
            // If it's not visible, show it and scroll to it
            scrollToWrapInfo();
            body.style.background = "red";


            myBtn.style.borderTop = ".2rem solid red";
            myBtn.style.borderRight = ".5rem solid red";
            myBtn.style.borderLeft = ".5rem solid red";



        } else {
            // If it's visible, show the rowid container again
            wrapInfo.style.display = "none";
            rowid.style.display = ""; // Show the project list container again
            closeBtn.style.display = "none"; // Hide the close button
            menuToggle.style.display = ""; // Ensure menu-toggle is shown when wrap_info_id is hidden
            body.style.background = "";

            myBtn.style.borderTop = "";
            myBtn.style.borderRight = "";
            myBtn.style.borderLeft = "";

        }
    });



    document.querySelectorAll('.infoolga').forEach(link => {
        link.addEventListener('click', function(e) {



            logo.style.display = 'none'; // Hide it

            sociale2.style.display = 'none'; // Hide it

            // Make sure wrap_info_id is set to 'flex' before anything else
            const wrapInfo = document.getElementById('wrap_info_id');

            // Check if the wrap_info_id is already visible
            if (wrapInfo.style.display === "none") {
                body.style.background = "red";
                myBtn.style.borderTop = ".2rem solid red";
                myBtn.style.borderRight = ".5rem solid red";
                myBtn.style.borderLeft = ".5rem solid red";


            } else {
                // If it's visible, show the rowid container again
                wrapInfo.style.display = "none";
                rowid.style.display = ""; // Show the project list container again
                closeBtn.style.display = "none"; // Hide the close button
                menuToggle.style.display = ""; // Ensure menu-toggle is shown when wrap_info_id is hidden

                body.style.background = "";
                myBtn.style.borderTop = "";
                myBtn.style.borderRight = "";
                myBtn.style.borderLeft = "";

            }


            if (wrapInfo) {
                wrapInfo.style.display = 'flex';
            }

            // Safely get the target ID from the href attribute
            const hrefValue = link.getAttribute('href');
            const targetId = hrefValue ? hrefValue.substring(1) : ''; // Ensure href exists before calling substring

            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Additional logic if needed (e.g., if wrap_info_id is not already flex)
                    if (wrapInfo.style.display !== 'flex') {
                        scrollToWrapInfo(targetElement);
                    }
                } else {
                    console.warn(`Target element with id ${targetId} not found.`);
                }
            }
        });
    });






    function handleResize() {
        const wrapInfo = document.getElementById('wrap_info_id');
        const menuToggle = document.getElementById('menu-toggle');
        const closeBtn = document.getElementById('close-btn');
        const rowid = document.getElementById('rowid');
        const mailback = document.getElementById('mailback');
        const navUl = document.getElementById('nav-ul'); // Get the nav-ul element
        const menupoint = document.getElementById('menupoint'); // Get the menupoint element

        // Check if the URL contains the hash (#wrap_info_id) and hide menuToggle and menupoint
        if (window.location.hash === '#wrap_info_id') {
            // Hide menuToggle and menupoint if the hash is present
            if (menuToggle) {
                menuToggle.style.display = "none";
            }
            if (menupoint) {
                menupoint.style.display = "none";
            }
            if (logo) {
                logo.style.display = "none";
            }
            if (sociale2) {
                sociale2.style.display = "none";
            }
            if (body) {
                body.style.background = "red";
            }

            // Adjust footer display based on screen width
            if (footer) {
                if (window.innerWidth <= 1000) {
                    footer.style.display = "flex";
                } else {
                    footer.style.display = "none";
                }
            }

            return; // Skip changes if the hash is present
        }

        // Always hide menu toggle if any lightbox is visible
        if (isLightboxVisible()) {
            menuToggle.style.display = "none";
            return; // Exit early if a lightbox is visible
        }

        // If nav-ul has the class 'show', hide the mailback button
        if (navUl && navUl.classList.contains('show')) {
            mailback.style.display = "none"; // Hide mailback when nav-ul has class 'show'
            return; // Exit early if the 'show' class is on nav-ul
        }

        // Check for screen width
        if (window.innerWidth < 1000) {
            // Show menu toggle only if wrap_info_id is not visible
            if (wrapInfo.style.display === "none") {
                menuToggle.style.display = "flex"; // Show menu toggle if wrap_info_id is hidden
            } else {
                menuToggle.style.display = ""; // Hide menu toggle if wrap_info_id is visible
            }

            // Adjust rowid visibility based on wrap_info_id visibility
            if (wrapInfo.style.display === "none") {
                rowid.style.display = ""; // Show rowid if wrap_info_id is hidden
            } else {
                rowid.style.display = "none"; // Hide rowid if wrap_info_id is visible
            }
            // Ensure mailback is visible if wrap_info_id is hidden (on mobile)
            if (wrapInfo.style.display === "none" && !navUl.classList.contains('show')) {
                mailback.style.display = "flex"; // Show mailback if wrap_info_id is hidden and nav-ul doesn't have 'show'
            } else {
                mailback.style.display = "none"; // Hide mailback if wrap_info_id is visible or nav-ul has 'show'
            }

        } else {
            // On larger screens (more than 1000px), ensure menu-toggle is hidden unless nav-ul has 'show' class
            if (navUl && navUl.classList.contains('show')) {
                menuToggle.style.display = "flex"; // Show menu toggle if nav-ul has class 'show'
            } else {
                menuToggle.style.display = ""; // Hide menu toggle if nav-ul doesn't have class 'show'
            }

            // Show or hide close button based on wrap_info_id visibility
            closeBtn.style.display = wrapInfo.style.display === "flex" ? "block" : "none";

            // Adjust rowid visibility based on wrap_info_id visibility
            if (wrapInfo.style.display === "none") {
                rowid.style.display = ""; // Show rowid if wrap_info_id is hidden
            } else {
                rowid.style.display = "none"; // Hide rowid if wrap_info_id is visible
            }

            // Only show mailback if wrap_info_id is hidden on larger screens and nav-ul doesn't have 'show'
            if (wrapInfo.style.display === "none" && !navUl.classList.contains('show')) {
                mailback.style.display = "flex"; // Show mailback if wrap_info_id is hidden and nav-ul doesn't have 'show'
            } else {
                mailback.style.display = "none"; // Hide mailback if wrap_info_id is visible or nav-ul has 'show'
            }
        }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial resize check to set correct state on page load
    handleResize();

    function checkVisibility() {
        const wrapInfo = document.getElementById('wrap_info_id');
        const menuToggle = document.getElementById('menu-toggle');
        const rect = wrapInfo.getBoundingClientRect();
        const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;

        // If wrap_info_id is out of the view, hide it and show menu-toggle again
        if (isOutOfView) {
            wrapInfo.style.display = "none";
            menuToggle.style.display = ""; // Show menu-toggle when wrap_info_id is hidden
        }
    }


    // Add scroll event listener to check when the #wrap_info_id goes out of view
    window.addEventListener("scroll", checkVisibility);

});




// Select the #mailback element
const mailbackElement = document.getElementById('mailback');

// Set up hover event listeners to change color dynamically
mailbackElement.addEventListener('mouseenter', () => {
    // Change color on hover (assuming --randomcolor2 is defined)
    mailbackElement.style.color = getComputedStyle(document.documentElement).getPropertyValue('--randomcolor2').trim();

});

mailbackElement.addEventListener('mouseleave', () => {
    // Reset the color back to the original one (assuming --randomcolor is defined)
    mailbackElement.style.color = getComputedStyle(document.documentElement).getPropertyValue('--randomcolor').trim();
});




// Grab the element where mouse events will trigger style changes
const titleeffect = document.getElementById("mouseTarget");

// Get all elements with the class "figure.project-index"
const collection = document.getElementsByClassName("figure.project-index");

// Get the number of "project-index" elements (could be useful later)
let numb = collection.length;

var sizer = window.matchMedia("(min-width: 1000px)");

// Function to handle mouseenter event
function handleMouseEnter() {
    if (!sizer.matches) { // If screen width is less than 1000px, do nothing
        return; // Exit early if the condition is not met
    }

    // If screen width is >= 1000px, execute the following
    document.getElementById("bodyid").style.background = "red";
    for (let e = 0; e < collection.length; e++) {
        collection[e].style.border = "solid 2px red";
    }
}
// Function to handle mouseleave event
function handleMouseLeave() {
    // Check if the screen width is less than 1000px and exit early if true
    if (!sizer.matches) {
        return; // Exit early if the screen width is less than 1000px
    }

    // Check if there is a hash in the URL (e.g., #wrap_info_id) and exit early if true
    if (window.location.hash) {
        return; // Exit early if the hash is present in the URL (e.g., #wrap_info_id)
    }

    // If the screen width is >= 1000px and no hash is present, execute the following
    document.getElementById("bodyid").style.background = "";
    for (let e = 0; e < collection.length; e++) {
        collection[e].style.border = "";
    }
}


// Event listener for mouseenter on the titleeffect element (the title)
titleeffect.addEventListener("mouseenter", handleMouseEnter);

// Event listener for mouseleave on the titleeffect element (the title)
titleeffect.addEventListener("mouseleave", handleMouseLeave);




// Optional: If you want to update the behavior when the screen size changes dynamically (e.g., resizing the window), 
// you can listen to the `resize` event like so:
window.addEventListener('resize', function() {
    // Re-check if the media query matches when the window resizes
    if (!sizer.matches) {
        // Reset any styles if the window is resized below 1000px
        document.getElementById("bodyid").style.background = "";
        for (let e = 0; e < collection.length; e++) {
            collection[e].style.border = "";
        }
    }
});



// Function to change the value of the CSS variable --randomcolor
function changeColor() {
    // Define an array of allowed colors
    const colors = ["yellow", "yellow"];

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
setInterval(changeColor2, 50000);


// THIS PART IS INDEX


// Function to check if an element is partially or fully in the viewport
function isElementInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return rect.top + offset <= window.innerHeight && rect.bottom - offset >= 0;
}

// Function to update the URL hash (remove it if the element is outside the viewport by some margin)
function updateHashOnScroll() {
    const targetElement = document.getElementById('wrap_info_id');

    if (targetElement) {
        // Check if the element is in the viewport with a small offset
        if (isElementInViewport(targetElement, 50)) {
            // If element is in viewport, ensure the hash is in the URL
            if (window.location.hash !== '#wrap_info_id') {
                history.replaceState(null, null, window.location.pathname + "#wrap_info_id");
            }
        } else {
            // If element is fully out of the viewport (with margin), remove the hash
            if (window.location.hash === '#wrap_info_id') {
                history.replaceState(null, null, window.location.pathname);
            }
        }
    }
}

// Add event listener to scroll event to check if the element is in view or not
window.addEventListener('scroll', updateHashOnScroll);

// Add event listener to resize event to check when the window is resized (for responsiveness)
window.addEventListener('resize', updateHashOnScroll);

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    if (window.location.hash === "#wrap_info_id") {
        var wrapInfo = document.getElementById('wrap_info_id');
        var mailback = document.getElementById('mailback');
        var closeBtn = document.getElementById('close-btn');
        var header = document.getElementById('header');
        var logo = document.getElementById('logo');
        var figures = document.getElementById('figures');
        var rowid = document.getElementById('rowid');

        // Debugging: Check if the elements are found
        console.log(wrapInfo, mailback, closeBtn, header, logo, figures, rowid);

        if (wrapInfo) {
            // Set display to flex to make the section visible
            wrapInfo.style.display = 'flex';
            // Jump directly to the element without smooth scrolling
            wrapInfo.scrollIntoView({ behavior: 'auto' });
        }

        // Debugging: Log the display changes
        if (mailback) {
            mailback.style.display = "none"; // Hide mailback button
            console.log("Mailback hidden");
        }

        if (closeBtn) {
            closeBtn.style.display = "flex"; // Show close button
            console.log("Close button visible");
        }

        if (header) {
            header.style.display = "none"; // Hide the header
            console.log("Header hidden");
        }

        if (logo) {
            logo.style.display = "none"; // Hide the logo
            console.log("Logo hidden");
        }

        if (figures) {
            figures.style.display = "none"; // Hide the figures
            console.log("Figures hidden");
        }

        if (rowid) {
            rowid.style.display = "none"; // Hide the rowid
            console.log("Rowid hidden");
        }
        if (menu) {
            menu.style.display = "none"; // Hide the rowid
            console.log("menu hidden");
        }
    }
});