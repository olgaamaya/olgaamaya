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

// Handle the menu toggle
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

    // Toggle header display
    if (header) {
        if (header.style.display === 'none') {
            header.style.display = ''; // Restore default display for header
        } else {
            header.style.display = 'none'; // Hide header if needed
        }
    }

    // Hide rowid (set display to 'none' when the menu is toggled)
    if (rowid) {
        rowid.style.display = 'none'; // Hide the rowid element when the menu is opened
    }

    // Check if there is a hash in the URL and remove it
    const currentHash = window.location.hash;
    if (currentHash) {
        // Remove any hash in the URL (i.e., anything after the #)
        history.replaceState(null, null, window.location.pathname);
    } else {
        // If no hash is present, optionally add #menu or other hash if needed
        history.replaceState(null, null, '#menu');
    }

    // Select all grandchildren (child of child of child) of social_elements2
    const grandchildren = [...sociale2.children]
        .flatMap(child => [...child.children])
        .flatMap(child => [...child.children]); // Now targeting grandchild elements

    // Toggle styles for each grandchild
    grandchildren.forEach((grandchild) => {
        if (grandchild.style.height === '4rem') {
            // Reset styles
            grandchild.style.display = '';
            grandchild.style.flexWrap = '';
            grandchild.style.justifyContent = '';
            grandchild.style.alignItems = '';
            grandchild.style.flex = '';
            grandchild.style.margin = '';
        } else {
            // Apply new styles
            grandchild.style.display = 'flex';
            grandchild.style.flexWrap = 'wrap';
            grandchild.style.justifyContent = 'center';
            grandchild.style.alignItems = 'center';
            grandchild.style.flex = '0 1 50%';
            grandchild.style.margin = '0.5rem';
        }
    });
});


document.querySelectorAll('.infoolga').forEach(link => {
    link.addEventListener('click', function(e) {
        // Reset all menu toggle mechanisms by removing the "show" class from all elements toggled by the first function
        navMenu.classList.remove('show');
        navUL.classList.remove('show');
        address.classList.remove('show');
        body.classList.remove('show');
        menu.classList.remove('show');
        menupoint.classList.remove('show');
        contact.classList.remove('contact');
        morecontact.classList.remove('morecontact');
        lesscontact.classList.remove('lesscontact');
        sociale2.classList.remove('show');

        // Toggle logo back to default display (restore visibility)
        logo.style.display = ''; // Restore default display (could be block, inline, etc.)

        // Toggle header back to default display
        if (header) {
            header.style.display = ''; // Restore default display for header
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
            grandchild.style.flexWrap = '';
            grandchild.style.justifyContent = '';
            grandchild.style.alignItems = '';
            grandchild.style.flex = '';
            grandchild.style.margin = '';
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


const container = document.querySelector('.project-list-index');
const figures = Array.from(container.getElementsByTagName('figure'));

// Store the original order of figures in an array
const originalOrder = [...figures];

let hasShuffled = false; // Flag to track if the shuffle has been done

function shuffleFigures() {
    // Shuffle the figures randomly
    for (let i = figures.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [figures[i], figures[j]] = [figures[j], figures[i]]; // Swap
    }

    // Clear the container and append the shuffled figures
    container.innerHTML = '';
    figures.forEach(figure => container.appendChild(figure));
}

function resetFigures() {
    // Reset the figures to their original order
    container.innerHTML = '';
    originalOrder.forEach(figure => container.appendChild(figure));
}

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



function handleResize() {
    const wrapInfo = document.getElementById('wrap_info_id');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const rowid = document.getElementById('rowid');
    const mailback = document.getElementById('mailback'); // Get the mailback button

    // Always hide menu toggle if any lightbox is visible
    if (isLightboxVisible()) {
        menuToggle.style.display = "none";
        return; // Exit early if a lightbox is visible
    }

    // Check for screen width
    if (window.innerWidth < 1000) {
        // Show menu toggle only if wrap_info_id is not visible
        if (wrapInfo.style.display === "none") {
            menuToggle.style.display = "flex"; // Show menu toggle if wrap_info_id is hidden
        } else {
            menuToggle.style.display = "none"; // Hide menu toggle if wrap_info_id is visible
        }

        // Adjust rowid visibility based on wrap_info_id visibility
        if (wrapInfo.style.display === "none") {
            rowid.style.display = "flex"; // Show rowid if wrap_info_id is hidden
        } else {
            rowid.style.display = "none"; // Hide rowid if wrap_info_id is visible
        }

        // Ensure mailback is visible if wrap_info_id is hidden (on mobile)
        if (wrapInfo.style.display === "none") {
            mailback.style.display = "flex"; // Show mailback if wrap_info_id is hidden
        } else {
            mailback.style.display = "none"; // Hide mailback if wrap_info_id is visible
        }

    } else {
        // On larger screens, hide menu toggle
        menuToggle.style.display = "none";

        // Show or hide close button based on wrap_info_id visibility
        closeBtn.style.display = wrapInfo.style.display === "flex" ? "block" : "none";

        // Adjust rowid visibility based on wrap_info_id visibility
        if (wrapInfo.style.display === "none") {
            rowid.style.display = "flex"; // Show rowid if wrap_info_id is hidden
        } else {
            rowid.style.display = "none"; // Hide rowid if wrap_info_id is visible
        }

        // Only show mailback if wrap_info_id is hidden on larger screens
        if (wrapInfo.style.display === "none") {
            mailback.style.display = "flex"; // Show mailback if wrap_info_id is hidden
        } else {
            mailback.style.display = "none"; // Hide mailback if wrap_info_id is visible
        }
    }
}


// Listen to window resize events
window.addEventListener('resize', handleResize);

// Initial call to adjust layout on load
handleResize(); // This will shuffle or reset based on initial load size


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

        wrapInfo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Set the visibility of wrap_info_id and related elements
        wrapInfo.style.display = "flex";
        closeBtn.style.display = "flex"; // Show close button
        mailbackButton.style.display = "none"; // Hide mailback button
        rowid.style.display = "none"; // Hide the project list container
        menuToggle.style.display = "none"; // Hide the menu toggle

        // Scroll to the specific element if needed
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    closeBtn.addEventListener("click", function() {
        // Hide the w
        // rap_info_id when close button is clicked
        const wrapInfo = document.getElementById('wrap_info_id');
        if (wrapInfo) {
            wrapInfo.style.display = "none"; // Explicitly hide wrap_info_id
        }

        // Show the rowid container again (default display)
        const rowid = document.getElementById('rowid');
        if (rowid) {
            rowid.style.display = ""; // Ensure rowid is visible again (default display)
        }

        // Show the mailback button again
        const mailbackButton = document.getElementById('mailback');
        if (window.innerWidth < 1000) {
            mailbackButton.style.display = "flex"; // Show the mailback button again
        } else {
            mailbackButton.style.display = ""; // Show the mailback button again
        }

        // Hide the close button
        closeBtn.style.display = "none";

        // Ensure that menu-toggle remains visible when wrap_info_id is hidden
        const menuToggle = document.getElementById('menu-toggle');
        if (window.innerWidth < 1000) {
            menuToggle.style.display = "flex"; // Show the menu-toggle on mobile view when close button is clicked
        } else {
            menuToggle.style.display = "none"; // Hide the menu-toggle on desktop view
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
            grandchild.style.flexWrap = '';
            grandchild.style.justifyContent = '';
            grandchild.style.alignItems = '';
            grandchild.style.flex = '';
            grandchild.style.margin = '';
        });
    });





    // Add click event listener on the mailback button
    mailbackButton.addEventListener("click", function() {

        mailbackButton.style.display = "flex"; // Show the mailback button again
        // Check if the wrap_info_id is already visible
        if (wrapInfo.style.display === "none") {
            // If it's not visible, show it and scroll to it
            scrollToWrapInfo();
        } else {
            // If it's visible, show the rowid container again
            wrapInfo.style.display = "none";
            rowid.style.display = ""; // Show the project list container again
            closeBtn.style.display = "none"; // Hide the close button
            menuToggle.style.display = ""; // Ensure menu-toggle is shown when wrap_info_id is hidden
        }
    });

    // // Add click event listener to all elements with class 'infoolga'
    // infoolgaLinks.forEach(link => {
    //     link.addEventListener("click", function() {
    //         // Keep wrap_info_id visible
    //         wrapInfo.style.display = "flex";

    //         // If screen is less than 1000px, hide close button and show rowid (default visibility)
    //         if (window.innerWidth < 1000) {
    //             closeBtn.style.display = "flex"; // Show close button in mobile view
    //             closeBtn.style.position = "absolute";
    //             closeBtn.style.left = "2rem";
    //             closeBtn.style.top = "2.5rem";
    //             closeBtn.style.width = "1rem";
    //             closeBtn.style.height = "1rem"; // Set the correct size for mobile

    //             rowid.style.display = "none"; // Hide the rowid container on mobile
    //             menuToggle.style.display = "none"; // Hide the menu toggle on mobile
    //         }

    //         // Hide the menu toggle when wrap_info_id is visible
    //         menuToggle.style.display = "none"; // Hide the menu-toggle when wrap_info_id is displayed
    //     });
    // });

    // Handle clicks on dynamic content links (shortprofile, selected magazines, etc.)

    document.querySelectorAll('.infoolga').forEach(link => {
        link.addEventListener('click', function(e) {
            // Make sure wrap_info_id is set to 'flex' before anything else
            const wrapInfo = document.getElementById('wrap_info_id');
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



    // Function to handle screen resizing
    function handleResize() {
        // If the screen width is greater than 1000px, show the close button
        if (window.innerWidth > 1000) {
            if (wrapInfo.style.display === "flex") {
                closeBtn.style.display = "block"; // Show the close button if wrap_info_id is visible
            }
            // Ensure that menu-toggle remains in its correct default state for larger screens
            menuToggle.style.display = "none"; // Hide the menu-toggle on desktop view
        } else {
            // Reset other visibility based on wrap_info_id state
            if (wrapInfo.style.display === "flex") {
                mailbackButton.style.display = "none"; // Hide mailback button if wrap_info_id is visible
                rowid.style.display = "none"; // Hide rowid container if wrap_info_id is visible
                menuToggle.style.display = "none"; // Hide the menu-toggle on mobile
            }

            // Ensure menu-toggle remains visible on mobile (0-1000px) when wrap_info_id is not displayed
            // AND there is no visible lightbox
            if (wrapInfo.style.display !== "flex" && !isLightboxVisible()) {
                menuToggle.style.display = "flex"; // Ensure it remains visible on mobile view
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

window.onload = function() {
    // Check if the URL contains #wrap_info_id in the hash
    if (window.location.hash === "#wrap_info_id") {
        var wrapInfo = document.getElementById('wrap_info_id');
        if (wrapInfo) {
            // Set display to flex to make the section visible
            wrapInfo.style.display = 'flex';

            // Jump directly to the element without smooth scrolling
            wrapInfo.scrollIntoView({ behavior: 'auto' });
        }
    }
}