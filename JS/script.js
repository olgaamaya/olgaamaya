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


document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
});

//TO TOP BUTTON
// mybutton = document.getElementById("myBtn");
// // [When the user scrolls down 20px from the top of the document, show the button]
// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
//         mybutton.style.display = "flex";
//     } else {
//         mybutton.style.display = "none";
//     }
// };
// // [When the user clicks on the button, scroll to the top of the document]
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// };

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