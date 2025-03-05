// map.js project(nr) is the id of each of the div regarding a lightbox


// AW24 RE-GEN CITY SHADES - Lightbox 1
// Maty Fall x MANGO - Lightbox 2
// Denim seams x @mangoteen - Lightbox 3
// Julia Brezgina - Lightbox 4
// PARISIAN FALL/Teen x MANGO - Lightbox 5
// Vilet - Lightbox 6
// sUmMeR pOstIsOlAtIoN - Lightbox 7
// tE QuIEro UN pOCo - Lightbox 8
// Back To School Teen x MANGO - Lightbox 9
// ME dESamAsTE - Lightbox 10
// WinTeRBoY - Lightbox 11
// sEUnGrI - Lightbox 12
// E-Commerce - Lightbox 13
// ShAdOW - Lightbox 14
// Chiharu Okungi x Mango - Lightbox 15
// Fusión del Núcleo/Chica Sobresalto - Lightbox 16
// What happens in PILMA stays in PILMA - Lightbox 17
// Create a map of project data
const projectData = {
    Lightbox_1: {
        TITEL: 'AW24 RE-GEN CITY SHADES',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_2: {
        TITEL: 'Maty Fall x MANGO',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_3: {
        TITEL: 'Denim seams x @mangoteen',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_4: {
        TITEL: 'Julia Brezgina',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_5: {
        TITEL: 'PARISIAN FALL/Teen x MANGO',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_6: {
        TITEL: 'Vilet',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_7: {
        TITEL: 'sUmMeR pOstIsOlAtIoN',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_8: {
        TITEL: 'tE QuIEro UN pOCo',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_9: {
        TITEL: 'Back To School Teen x MANGO',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_10: {
        TITEL: 'ME dESamAsTE',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_11: {
        TITEL: 'WinTeRBoY',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_12: {
        TITEL: 'sEUnGrI',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_13: {
        TITEL: 'E-Commerce',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_14: {
        TITEL: 'ShAdOW',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_15: {
        TITEL: 'Chiharu Okungi x Mango',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_16: {
        TITEL: 'Fusión del Núcleo/Chica Sobresalto',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    },
    Lightbox_17: {
        TITEL: 'What happens in PILMA stays in PILMA',
        ROLE: 'Fashion Stylist',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ''
    }
};

// Function to populate lightboxes with the data
function populateLightboxes() {
    // Check if the viewport width is greater than 1250px
    if (window.innerWidth > 1250) {
        // Iterate over each project in the map
        for (let projectId in projectData) {
            const project = projectData[projectId];

            // Get the corresponding lightbox element by ID
            const lightbox = document.getElementById(projectId);

            // Check if the lightbox exists to avoid errors
            if (lightbox) {
                // Create the parent div with the class "scroll2"
                const scrollDiv = document.createElement('div');
                scrollDiv.classList.add('scroll2');

                // Create an array to hold the data for the spans (only values, not category names)
                let projectInfo = [];

                // Add the categories with data to the projectInfo array (excluding categories with no data)
                for (let category in project) {
                    if (project[category]) {
                        projectInfo.push(project[category]);
                    }
                }

                // Create 4 divs with spans
                const numberOfSpans = 4; // Number of spans to create
                const chunkedData = chunkArray(projectInfo, numberOfSpans);

                chunkedData.forEach(group => {
                    const div = document.createElement('div');
                    div.style.display = 'inline'; // Make spans inline

                    group.forEach(info => {
                        const span = document.createElement('span');
                        span.textContent = info;
                        span.style.marginBottom = '4rem'; // Add bottom margin of 4rem
                        span.style.fontSize = '10dvh'; // Set font size to 10dvh
                        div.appendChild(span);
                    });

                    scrollDiv.appendChild(div);
                });

                // Set position of the scroll2 div to fixed
                scrollDiv.style.position = 'fixed';
                scrollDiv.style.bottom = '0';
                scrollDiv.style.left = '0';

                // Append the scroll2 div to the lightbox
                lightbox.appendChild(scrollDiv);
            } else {
                console.warn(`Lightbox with ID ${projectId} not found.`);
            }
        }
    }
}

// Function to chunk an array into smaller arrays (each with a maximum size of 'size')
function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// Call the function to populate lightboxes when the page loads
window.onload = function() {
    populateLightboxes();
};

// Re-run the function if the window is resized (to handle changes in viewport size)
window.onresize = function() {
    populateLightboxes();
};