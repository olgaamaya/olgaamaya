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

// Handle clicks on infoolga elements (links with # href)
document.querySelectorAll('.infoolga').forEach(link => {
    link.addEventListener('click', (e) => {
        // Reset the menu state when an infoolga element is clicked
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

        // Ensure that the logo and header are visible again when an infoolga link is clicked
        if (logo) {
            logo.style.display = ''; // Ensure logo is visible
        }

        if (header) {
            header.style.display = ''; // Ensure header is visible
        }

        // If the link is a hash, scroll smoothly to the target
        const targetId = link.getAttribute('href').substring(1); // Get the target ID without the #
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
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


// -- NEW ORDER FOR FIGURES -- !
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

// Handle resizing logic
function handleResize() {
    if (window.innerWidth < 1000) {
        if (!hasShuffled) {
            shuffleFigures();
            hasShuffled = true; // Set the flag to indicate the shuffle has been done
        }
    } else {
        if (hasShuffled) {
            resetFigures();
            hasShuffled = false; // Reset the flag since we're back to desktop size
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

    // Initially set the wrap_info_id to display: none
    wrapInfo.style.display = "none";

    // Function to handle smooth scroll and show the wrap_info_id
    function scrollToWrapInfo() {
        // Scroll to #wrap_info_id smoothly
        wrapInfo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Make sure wrap_info_id is visible (display: flex)
        wrapInfo.style.display = "flex";
    }

    // Function to check if #wrap_info_id is out of the viewport
    function checkVisibility() {
        const rect = wrapInfo.getBoundingClientRect();
        const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;

        // If wrap_info_id is out of the view, hide it (display: none)
        if (isOutOfView) {
            wrapInfo.style.display = "none";
        }
    }

    // Add click event listener on the mailback button
    mailbackButton.addEventListener("click", function() {
        // Check if the wrap_info_id is already visible
        if (wrapInfo.style.display === "none") {
            // If it's not visible, show it and scroll to it
            scrollToWrapInfo();
        } else {
            // If it's visible, do nothing or toggle visibility
            // Optional: You can hide it again if desired
            wrapInfo.style.display = "none";
        }
    });

    // Add click event listener to all elements with class 'infoolga'
    infoolgaLinks.forEach(link => {
        link.addEventListener("click", function() {
            // When any infoolga element is clicked, show wrap_info_id and scroll to it
            if (wrapInfo.style.display === "none") {
                scrollToWrapInfo();
            }
        });
    });

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