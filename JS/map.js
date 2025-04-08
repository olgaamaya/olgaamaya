// Function to randomize case for each letter in a string, while preserving "", "", and "teen"
function randomizeCase(str) {
    let result = '';

    // Preserve "", "", and "teen" as they are
    str = str.replace(/\b\b|\b\b|\bteen\b/g, (match) => {
        return match; // Don't change the case of these words
    });

    // Now randomize the case for all other letters
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Only change letters (ignore non-letters like <br>)
        if (char.match(/[a-zA-Z]/)) {
            result += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
        } else {
            result += char; // If it's not a letter, keep it as is (like <br> tags)
        }
    }

    return result;
}

// Define the projectData object with TITELINDEX values being processed by randomizeCase function
const projectData = {
    Lightbox_1: {
        TITELINDEX: randomizeCase("sUmMeR pOstIsOlAtIoN/<br> fuckingyoung magazine"),
        ROLEINDEX: "art direction / fashion stylist",
        TITEL: 'sUmMeR pOstIsOlAtIoN  ',
        MODEL: 'Model Roland E  ',
        AGENCY: 'agency trend model ',
        MAKEUP: 'make up Andrea Trenado ',
        PHOTOGRAPH_RETOUCH: ' photographer and retoucher mar docavo ',
        ROLE: 'Fashion Stylist Olga Lucia Amaya ',
    },

    Lightbox_2: {
        TITELINDEX: randomizeCase("WinTeRBoY/<br> client magazine"),
        ROLEINDEX: "art direction / fashion stylist",
        TITEL: 'WinTeRBoY  ',
        MODEL: 'Model Yonathan Exss ',
        AGENCY: 'agency 2M models ',
        MAKEUP: 'make up Andrea Trenado ',
        PHOTOGRAPH_RETOUCH: 'photographer and retoucher mar docavo ',
        ROLE: 'Fashion Stylist olga lucia amaya ',
    },

    Lightbox_3: {
        TITELINDEX: randomizeCase("ME dESamAsTE"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'ME dESamAsTE  ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: 'Directed by Lyona / Produced by Astrolabi Films / Sony Music Entertainment España, S.L. / Starring Claire Romain / 2020 ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' ',
    },

    Lightbox_4: {
        TITELINDEX: randomizeCase("tE QuIEro UN pOCo"),
        ROLEINDEX: "Costume Designer",
        TITEL: 'tE QuIEro UN pOCo  ',
        MODEL: '',
        AGENCY: 'Carlos Sadness / Directed by Lyona / Produced by Astrolabi Films / Sony Music Entertainment España, S.L. / Starring ida Domènech (Dulceida), Koko Ishizuka, Sophie Petterin, Irene Noren',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' ',
        YEAR: '2018  ',
        ROLE: 'COSTUME DESIGNER olga lucia amaya  '
    },

    Lightbox_5: {
        TITELINDEX: randomizeCase("sEUnGrI"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'sEUnGrI  ',
        MODEL: ' Model Seung ',
        AGENCY: ' agency two management ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' photographer and retoucher mar docavo ',
        ROLE: ' fashion stylist Olga Lucia Amaya '
    },

    Lightbox_6: {
        TITELINDEX: randomizeCase("matea brakus x "),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'matea brakus x ',
        MODEL: '',
        AGENCY: 'agency society management',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' photographer alberto polo iañez ',
        ROLE: 'fashion stylist Olga Lucia Amaya ',
    },

    Lightbox_7: {
        TITELINDEX: randomizeCase("Shadow/ Marc Salvador"),
        ROLEINDEX: "Costume Designer",
        TITEL: 'Shadow/ Marc Salvador  ',
        ROLE: 'COSTUME DESIGNER olga lucia amaya ',
        MODEL: 'Starring Laia Manzanares  ',
        AGENCY: 'Directed by Lyona/ Produced by Complot Productions  ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' ',
        Year: ' 2018 ',
    },

    Lightbox_8: {
        TITELINDEX: randomizeCase("Adrenalina / Chica Sobresalto FEAT Zahara"),
        ROLEINDEX: "Costume Designer",
        TITEL: 'Adrenalina / Chica Sobresalto FEAT Zahara ',
        MODEL: '',
        AGENCY: 'Directed by Lyona / Produced by Astrolabi Films / El Dromedario Records  ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' ',
        Year: ' 2021 ',
        ROLE: 'COSTUME DESIGNER olga lucia amaya ',
    },

    Lightbox_9: {
        TITELINDEX: randomizeCase("Fusion de Nucleo / Chica Sobresalto"),
        ROLEINDEX: "Costume Designer",
        TITEL: 'Fusion de Nucleo / Chica Sobresalto ',
        MODEL: '',
        AGENCY: 'Directed by Lyona / Produced by Astrolabi Films / El Dromedario Records ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' ',
        Year: ' 2020 ',
        ROLE: 'COSTUME DESIGNER olga lucia amaya ',
    },

    Lightbox_10: {
        TITELINDEX: randomizeCase("What happens in PILMA stays in PILMA / Edició PRIDE!"),
        ROLEINDEX: "Costume Designer",
        TITEL: 'What happens in PILMA stays in PILMA / Edició PRIDE! BCN 2019 ',
        ROLE: 'COSTUME DESIGNER  ',
        MODEL: '',
        AGENCY: 'Directed by Lyona / Produced by Astrolabi Films ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },

    Lightbox_11: {
        TITELINDEX: randomizeCase("Back To School <br> @mangoteen"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Back To School Teen x  / teen ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },

    Lightbox_12: {
        TITELINDEX: randomizeCase("NAGUISA"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'NAGUISA ',
        MODEL: 'Model Judit piñal  ',
        AGENCY: 'agency View mangement',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' photographer olga de la iglesia ',
        Year: ' 2020 ',
        ROLE: 'fashion stylist Olga Lucia Amaya',
    },

    Lightbox_13: {
        TITELINDEX: randomizeCase("Kids x MANGO"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Kids x  ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },

    Lightbox_14: {
        TITELINDEX: randomizeCase("Chiharu Okungi"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Chiharu Okungi  ',
        MODEL: ' Model chiharu Okungi ',
        AGENCY: 'agency society management ',
        MAKEUP: 'make up paco garrigues ',
        PHOTOGRAPH_RETOUCH: ' photographer ector tre  ',
        ROLE: 'fashion stylist Olga lucia Amaya ',
    },

    Lightbox_15: {
        TITELINDEX: randomizeCase("E-COMMERCE"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'E-COMMERCE / fashion stylist Olga lucia Amaya / E-COMMERCE / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_16: {
        TITELINDEX: randomizeCase("clara infante x MANGO home"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'clara infante x  home / fashion stylist Olga lucia Amaya / clara infante x  home / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_17: {
        TITELINDEX: randomizeCase("TEEN x MANGO  / @mangoteen"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'TEEN x  / teen / fashion stylist Olga lucia Amaya / TEEN x teen / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_18: {
        TITELINDEX: randomizeCase("cakemagazine / <br> mikaela oldenburg"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'cakemagazine ',
        MODEL: 'Model mikaela oldenburg ',
        AGENCY: 'agency two mangement  ',
        MAKEUP: 'make up elizabeth vailo  ',
        PHOTOGRAPH_RETOUCH: 'photographer and retoucher mar docavo ',
        ROLE: ' fashion stylist Olga lucia Amaya ',
    },

    Lightbox_19: {
        TITELINDEX: randomizeCase("Vilet"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Vilet  ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },

    Lightbox_20: {
        TITELINDEX: randomizeCase("PARISIAN FALL / TEEN x MANGO"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: ' PARISIAN FALL / TEEN x  / teen / fashion stylist Olga lucia Amaya /  PARISIAN FALL / TEEN x  / teen / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_21: {
        TITELINDEX: randomizeCase("julia brezgina"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'julia brezgina / fashion stylist Olga lucia Amaya / julia brezgina / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_22: {
        TITELINDEX: randomizeCase("AW24 RE-GEN <BR> CITY SHADES <BR> THINKINGMU"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'AW24 RE-GEN CITY SHADES / thinkingmu ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },

    Lightbox_23: {
        TITELINDEX: randomizeCase("Maty Fall x MANGO"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Maty Fall x   ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },

    Lightbox_24: {
        TITELINDEX: randomizeCase("Denim seams x @mangoteen"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Denim seams x @teen  ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    }
};

// Display the lightboxes to confirm randomization
console.log(projectData);



// Function to Populate Lightboxes
function populateLightboxes() {
    if (window.innerWidth > 100) { // Check if the viewport width is greater than 100px
        for (let projectId in projectData) {
            const project = projectData[projectId];
            const lightbox = document.getElementById(projectId); // Get the corresponding lightbox element by ID

            if (lightbox) {
                // Check if the scroll2 div already exists, if so, skip
                let existingScrollDiv = lightbox.querySelector('.scroll2');
                if (existingScrollDiv) {
                    continue; // Skip this lightbox if scroll2 already exists
                }

                // Create the section wrapper
                const sectionWrapper = document.createElement('section');
                sectionWrapper.classList.add('banner2'); // Add the 'banner2' class to the section

                // Create the scroll2 div
                const scrollDiv = document.createElement('div');
                scrollDiv.classList.add('scroll2');
                scrollDiv.style.textTransform = 'lowercase'; // Apply lowercase text transformation here as well

                let projectInfo = [];
                for (let category in project) {
                    // Check if the category is not "TITELINDEX" or "ROLEINDEX" and is not an empty string
                    if (category !== 'TITELINDEX' && category !== 'ROLEINDEX' && project[category] && project[category].trim() !== '') {
                        projectInfo.push(project[category]); // Add only non-empty data, excluding "TITELINDEX" and "ROLEINDEX"
                    }
                }

                // Join all the project data into a single string with " / " separator
                let allCredits = projectInfo.join(' / ');

                // Ensure the string ends with " / " (with a space before and after)
                if (allCredits && !allCredits.endsWith(' / ')) {
                    allCredits += ' / ';
                }

                // Create one span with all the credits inside
                const creditsSpan = document.createElement('span');
                creditsSpan.textContent = allCredits; // Set the text content to all credits
                creditsSpan.style.marginBottom = '';
                creditsSpan.style.fontSize = ''; // Font size in rem (you can adjust as needed)

                // Wrap the span inside a div
                const divWrapper = document.createElement('div');
                divWrapper.appendChild(creditsSpan); // Append the span to the div

                // Add the divWrapper (with the span) to the scrollDiv multiple times
                for (let i = 0; i < 4; i++) { // Adjust the number of repetitions as needed
                    const clonedDiv = divWrapper.cloneNode(true);
                    scrollDiv.appendChild(clonedDiv); // Append each cloned div to the scrollDiv
                }

                // Apply styles to the scroll2 div
                scrollDiv.style.position = '';
                scrollDiv.style.textTransform = 'lowercase'; // Corrected 'texttransform' to 'textTransform'
                scrollDiv.style.color = 'black';
                scrollDiv.style.bottom = '0';
                scrollDiv.style.left = '0';

                // Append the scroll2 div to the section wrapper
                sectionWrapper.appendChild(scrollDiv);

                // Append the section wrapper to the lightbox
                lightbox.appendChild(sectionWrapper);
            } else {
                console.warn(`Lightbox with ID ${projectId} not found.`);
            }
        }
    }
}


// Function to Populate Figures with Lightbox Data
// New Function to Populate Figures with Lightbox Data
function populateProjectInfo() {
    const projectList = document.querySelector('.project-list-index');
    const figures = projectList.querySelectorAll('.project-index'); // All figure elements

    figures.forEach((figure) => {
        const lightboxId = figure.querySelector('a').getAttribute('href');

        if (lightboxId && lightboxId.startsWith("#lightbox")) {
            const lightboxNumber = lightboxId.replace("#lightbox", "");
            const project = projectData[`Lightbox_${lightboxNumber}`];

            if (project) {
                const figcaption = figure.querySelector('.project-info-index');
                const existingBanner = figcaption.querySelector('.banner');
                if (existingBanner) {
                    return; // Skip if banner already exists
                }

                const credits = [];
                for (let category in project) {
                    if (project[category] && category !== 'TITELINDEX' && category !== 'ROLEINDEX') {
                        credits.push(project[category]);
                    }
                }

                // Join all the credits with " / " separator and ensure proper spacing
                let allCredits = credits.join(' / ');

                // Ensure the string ends with " / " (with a space before and after)
                if (allCredits && !allCredits.endsWith(' / ')) {
                    allCredits += ' / ';
                }

                // Add Banner Section
                const banner = document.createElement('section');
                banner.classList.add('banner');

                const scrollDiv = document.createElement('div');
                scrollDiv.classList.add('scroll');
                scrollDiv.style.textTransform = 'lowercase'; // Apply lowercase text transformation here as well

                let divWrapper = document.createElement('div');
                const creditsSpan = document.createElement('span');
                creditsSpan.textContent = allCredits;
                divWrapper.appendChild(creditsSpan);

                for (let i = 0; i < 2; i++) {
                    const clonedDiv = divWrapper.cloneNode(true);
                    scrollDiv.appendChild(clonedDiv);
                }

                banner.appendChild(scrollDiv);
                figcaption.appendChild(banner);

                // Insert TITELINDEX and ROLEINDEX into jobtitle and jobsub, if they exist
                if (project.TITELINDEX) {
                    const jobTitle = figcaption.querySelector('.jobtitle');
                    if (jobTitle) {
                        jobTitle.innerHTML = project.TITELINDEX; // Replace content if exists
                    }
                }

                if (project.ROLEINDEX) {
                    const jobSub = figcaption.querySelector('.jobsub');
                    if (jobSub) {
                        jobSub.innerHTML = project.ROLEINDEX.toLowerCase(); // Ensure ROLEINDEX is lowercase
                    }
                }
            }
        }
    });
}

// Initialize when the page loads
window.onload = function() {
    populateLightboxes();
    populateProjectInfo(); // Add this function call to populate the figure data
};

// Re-run the function if the window is resized (to handle changes in viewport size)
window.onresize = function() {
    populateLightboxes();
    populateProjectInfo(); // Re-run both functions on resize
};







const figures = {
    figure1: {
        CATEGORIES: ['']
    },
    figure2: {
        CATEGORIES: ['']
    },
    figure3: {
        CATEGORIES: ['']
    },
    figure4: {
        CATEGORIES: ['']
    },
    figure5: {
        CATEGORIES: ['']
    },
    figure6: {
        CATEGORIES: ['']
    },
    figure7: {
        CATEGORIES: ['']
    },
    figure8: {
        CATEGORIES: ['']
    },
    figure9: {
        CATEGORIES: ['']
    },
    figure10: {
        CATEGORIES: ['']
    },
    figure11: {
        CATEGORIES: ['']
    },
    figure12: {
        CATEGORIES: ['']
    },
    figure13: {
        CATEGORIES: ['']
    },
    figure14: {
        CATEGORIES: ['']
    },
    figure15: {
        CATEGORIES: ['']
    },
    figure16: {
        CATEGORIES: ['']
    },
    figure17: {
        CATEGORIES: ['']
    },
    figure18: {
        CATEGORIES: ['']
    },
    figure19: {
        CATEGORIES: ['']
    },
    figure20: {
        CATEGORIES: ['']
    },
    figure21: {
        CATEGORIES: ['']
    },
    figure22: {
        CATEGORIES: ['']
    },
    figure23: {
        CATEGORIES: ['']
    },
    figure24: {
        CATEGORIES: ['']
    },
    figure25: {
        CATEGORIES: ['']
    }
};

// Function to toggle the visibility of the filter container
document.getElementById("filter-toggle").addEventListener("click", function() {
    const filterContainer = document.getElementById("filter-container");
    const filterIcon = document.querySelector(".filter-icon");

    // Toggle the display of the filter container
    filterContainer.classList.toggle("show");

    // Rotate the icon when the filter is displayed
    if (filterContainer.classList.contains("show")) {
        filterIcon.style.transform = "rotate(0deg)";
    } else {
        filterIcon.style.transform = "rotate(0deg)";
    }
});

// Function to apply filters based on the selected checkboxes
function filterProjects() {
    const selectedCategories = [];
    const checkboxes = document.querySelectorAll('.filter-checkbox');

    // Get all selected categories from the checkboxes
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value);
        }
    });

    // Get all figure elements
    const figures = document.querySelectorAll('.project-index');

    // Loop through each figure and show/hide based on categories
    figures.forEach(figure => {
        const figureCategory = figure.classList[1]; // The second class is the category (e.g., "special", "", etc.)

        // If the category matches any of the selected ones, display the figure
        if (selectedCategories.length === 0 || selectedCategories.includes(figureCategory)) {
            figure.style.display = 'flex';
        } else {
            figure.style.display = 'none';
        }
    });

    // Update the URL with the selected filters (similar to Baunetz.de)
    updateURL(selectedCategories);
}

// Add event listeners to checkboxes to trigger filtering
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', filterProjects); // Apply filter when checkbox state changes
});

// Function to update the URL with the selected filter categories
function updateURL(selectedCategories) {
    let url = new URL(window.location.href);
    let params = new URLSearchParams();

    if (selectedCategories.length > 0) {
        selectedCategories.forEach(category => params.append('category', category));
    }

    // Update the URL with the new search parameters
    url.search = params.toString();
    history.pushState(null, '', url); // Update the URL in the browser without reloading the page
}

window.addEventListener('load', function() {
    filterProjects(); // Call filterProjects on page load to show all figures
    // Ensure the filter container is not shown initially
    const filterContainer = document.getElementById('filter-container');
    filterContainer.style.display = 'none'; // Hide filter container on initial load
});

window.addEventListener('scroll', updateFilterPosition);

window.addEventListener('DOMContentLoaded', () => {
    // Initial check on page load to set the correct filter position
    updateFilterPosition();
});

function updateFilterPosition() {
    const firstHeaderHeight = document.querySelector('.header').offsetHeight; // Get the height of the first header
    const filterToggleButton = document.getElementById('filter-toggle');
    const filterContainer = document.getElementById('filter-container');

    // Check if we're scrolled to the very top of the page
    if (window.scrollY === 0) {
        // If we're at the top, apply absolute positioning for the filter container
        filterToggleButton.style.position = 'absolute';
        filterToggleButton.style.top = ''; // Add some space from the top of the page (adjust this as needed)
        filterToggleButton.style.left = '';
        filterToggleButton.style.width = '3rem'; // Or adjust the width of the filter button

        filterContainer.style.position = 'absolute'; // Position the filter container absolutely
        filterContainer.style.top = '6rem'; // Apply top margin (or adjust this value)
        filterContainer.style.left = '0';
        filterContainer.style.width = '100%'; // Full width for the filter container
    } else if (window.scrollY >= firstHeaderHeight) {
        // If we've scrolled down past the header, make the filter container fixed
        filterToggleButton.style.position = 'fixed';
        filterToggleButton.style.top = '0'; // Stick to the top of the viewport
        filterToggleButton.style.left = '0'; // Stick to the left of the viewport
        filterToggleButton.style.width = '3rem'; // Set button width

        filterContainer.style.position = 'fixed'; // Position the filter container as fixed
        filterContainer.style.top = '0'; // Stick to the top of the viewport (below the button)
        filterContainer.style.left = '0'; // Position to the left of the viewport
        filterContainer.style.width = '100%'; // Filter container takes up full width of the viewport
    }
}






// Toggle the filter visibility when the filter button is clicked
const filterToggleButton = document.getElementById('filter-toggle');
const filterContainer = document.getElementById('filter-container');

filterToggleButton.addEventListener('click', function() {
    // Toggle the visibility of the filter container
    if (filterContainer.style.display === 'none' || filterContainer.style.display === '') {
        filterContainer.style.display = 'flex'; // Show filters
        filterToggleButton.innerHTML = '<span class="filter-icon">▲</span>'; // Change button text
    } else {
        filterContainer.style.display = 'none'; // Hide filters
        filterToggleButton.innerHTML = '<span class="filter-icon">▼</span>'; // Change button text
    }
});






// Assuming your existing figures are in a container with class "project-list-index"
const projectListIndex = document.querySelector('.project-list-index');

// Iterate over each figure and add the appropriate categories as class names
Object.keys(figures).forEach((figureKey, index) => {
    const figure = figures[figureKey];
    const categories = figure.CATEGORIES; // Get categories (e.g. ['', ''])

    // If categories are empty or contain only empty strings, skip the current iteration
    if (!categories || categories.length === 0 || categories.every(category => category === '')) {
        return;
    }

    // Select the corresponding figure element in the DOM
    const figureElement = document.querySelector(`#rowid figure:nth-child(${index + 1})`);

    if (figureElement) {
        // Remove empty strings from categories before adding them as class names
        const filteredCategories = categories.filter(category => category !== '');
        // Add the filtered categories as class names
        figureElement.classList.add(...filteredCategories);
    }
});




// Remove '#menu' from the URL when <p class="menupoint show"></p> is clicked
const menuPoint = document.querySelector('.menupoint.show');
if (menuPoint) {
    menuPoint.addEventListener('click', function() {
        // Check if the current href is '#menu'
        if (menuPoint.getAttribute('href') === '#menu') {
            // If it is, remove the hash (set it to empty)
            menuPoint.setAttribute('href', '');
            // Remove '#menu' from the URL without reloading the page
            history.replaceState(null, '', window.location.href.split('#')[0]);
        } else {
            // If it's empty, set it back to '#menu'
            menuPoint.setAttribute('href', '#menu');
            // Update the URL with '#menu'
            history.replaceState(null, '', window.location.href.split('#')[0] + '#menu');
        }
    });
}

// Function to check and update filter visibility
function checkFilterVisibility() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterContainer = document.getElementById('filter-container');

    // Check if the URL has a hash (and it's not an empty hash like #)
    if (window.location.hash && window.location.hash !== "#") {
        // Hide the filter toggle and container if a hash is present
        filterToggle.style.display = 'none';
        filterContainer.style.display = 'none';
    } else {
        // Show the filter toggle and container if there's no hash in the URL
        filterToggle.style.display = 'flex';
        filterContainer.style.display = 'flex';
    }
}

// Listen to popstate events (when the history state changes)
window.addEventListener('popstate', checkFilterVisibility);

// Overriding pushState and replaceState to ensure we listen to changes in the URL (without a full page reload)
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

history.pushState = function(state, title, url) {
    originalPushState.apply(history, arguments);
    checkFilterVisibility(); // Check the filter visibility when the URL changes
};

history.replaceState = function(state, title, url) {
    originalReplaceState.apply(history, arguments);
    checkFilterVisibility(); // Check the filter visibility when the URL changes
};

// Call the function once on initial load to set the correct visibility
checkFilterVisibility();














document.addEventListener('DOMContentLoaded', () => {
    // Get all filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');

    // Listen for changes in the filter checkboxes
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateLayout);
    });

    // Listen for window resize to adjust layout based on screen size
    window.addEventListener('resize', updateLayout);

    // Function to update the grid layout based on active filters and window size
    function updateLayout() {
        // Get the active category from the checked checkbox
        const activeCategories = [];
        filterCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                activeCategories.push(checkbox.value);
            }
        });

        // Get all figure elements
        const figures = document.querySelectorAll('.project-index');
        const projectList = document.querySelector('.project-list-index');

        const image = document.querySelector('img');
        const caption = document.querySelectorAll('.link-to-project');

        // Check screen width for mobile
        if (window.innerWidth < 1000) {
            // If mobile, use flex layout and show filtered figures in a column
            if (activeCategories.length === 0) {
                figures.forEach(figure => {
                    resetFigureStyles(figure); // Reset figure styles to default
                });

                projectList.style.display = 'flex'; // Use flex layout for project list
                projectList.style.flexDirection = 'column'; // Stack figures vertically
            } else {
                // Filter figures based on the active categories
                figures.forEach(figure => {
                    const figureCategories = Array.from(figure.classList);
                    const isActive = activeCategories.some(category => figureCategories.includes(category));

                    if (isActive) {
                        figure.style.display = 'flex'; // Show the figure if it matches the active filter
                        figure.style.flexDirection = 'column'; // Stack the filtered figures vertically
                    } else {
                        figure.style.display = 'none'; // Hide the figure if it doesn't match the filter
                    }
                });

                projectList.style.display = 'flex'; // Use flex layout for project list
                projectList.style.flexDirection = 'column'; // Stack figures vertically
            }

            return; // Exit early to avoid grid-related changes on mobile
        }

        // For larger screens, apply the grid layout and row height logic
        // If no filters are checked, reset to default layout
        if (activeCategories.length === 0) {
            resetGridLayout(); // Reset grid layout and figures styles

            return; // Exit early to avoid further changes when no filters are selected
        }

        // Filter figures based on the active categories (only one category allowed)
        figures.forEach(figure => {
            const figureCategories = Array.from(figure.classList); // Get the categories of each figure

            // Check if the figure's categories match the active filter
            const isActive = activeCategories.some(category => figureCategories.includes(category));

            if (isActive) {
                figure.style.display = 'grid'; // Show the figure if it matches the active filter
            } else {
                figure.style.display = 'none'; // Hide the figure if it doesn't match the filter
            }
        });

        // Recalculate the grid layout for the filtered figures
        const activeFigures = Array.from(document.querySelectorAll('.project-list-index .project-index:not([style*="display: none"])'));

        // Ensure the grid always has 16 columns when any filters are applied
        projectList.style.gridTemplateColumns = 'repeat(16, 1fr)'; // Always 16 columns
        projectList.style.justifyItems = 'start'; // Ensure the figures are left-aligned, even in the last row
        projectList.style.setProperty('--row-height', '500px'); // Set row height to 500px when a filter is active

        let currentIndex = 0; // This will track the current position in the grid

        // Ensure the figures themselves follow the new grid layout
        activeFigures.forEach((figure, index) => {
            const spans = [4]; // Original spans values (4, 8, 12)

            // To track the current row sum of spans
            let rowSpanSum = 0;
            const rowFigures = [];

            // Calculate how to fill the row with spans of 4, 8, and 12, while the total span of each row must add up to 16
            while (rowSpanSum < 16 && rowFigures.length < 16) {
                const randomSpan = spans[Math.floor(Math.random() * spans.length)];

                // Only add the span if it won't exceed 16 for the row
                if (rowSpanSum + randomSpan <= 16) {
                    rowFigures.push(randomSpan);
                    rowSpanSum += randomSpan;
                }
            }

            // Apply the span values to the figures in this row
            rowFigures.forEach((span, i) => {
                const figure = activeFigures[currentIndex + i];

                // Ensure that the figure exists
                if (figure) {
                    figure.style.gridColumn = `span ${span}`;
                    figure.style.gridRow = 'span 1'; // 50% chance for span 1 or span 2
                }
            });

            // Move the index by the number of figures used for this row
            currentIndex += rowFigures.length;

            // Reset for the next row if needed
            if (currentIndex >= activeFigures.length) return; // No more figures
        });

        // Iterate over each figure
        activeFigures.forEach(figure => {
            const image = figure.querySelector("img"); // Select the image element within the figure
            const links = figure.querySelectorAll('.link-to-project'); // Select all links to project inside the figure

            // Apply aspect ratio to the image to make sure it resizes based on row height
            if (image) {
                image.style.width = '100%'; // Make sure the image fills its container's width
                image.style.height = 'auto'; // Maintain the aspect ratio of the image
                image.style.maxHeight = '100%'; // Ensure the image height doesn't overflow its container
            }

            // Ensure that all figures are positioned relative
            figure.style.position = 'relative'; // Set position relative for all figures

            // Set all `a` tags with class "link-to-project" to position absolute and height 100%
            links.forEach(link => {
                link.style.position = 'absolute'; // Set position absolute for the link
                link.style.height = '100%'; // Set height 100% for the link
            });
        });
    }

    // Reset the figure styles to their default state
    function resetFigureStyles(figure) {
        figure.style.display = ''; // Remove inline display style
        figure.style.position = ''; // Reset position style
        figure.style.gridColumn = ''; // Reset grid column span
        figure.style.gridRow = ''; // Reset grid row span
        figure.style.height = ''; // Reset height for figures
        const links = figure.querySelectorAll('.link-to-project');
        links.forEach(link => {
            link.style.position = ''; // Reset position style for links
            link.style.height = ''; // Reset height for links
        });
    }

    // Reset the grid layout to its default state
    function resetGridLayout() {
        const figures = document.querySelectorAll('.project-index');
        const projectList = document.querySelector('.project-list-index');

        figures.forEach(figure => {
            resetFigureStyles(figure); // Reset all figures' styles
        });

        projectList.style.display = ''; // Reset display style
        projectList.style.gridTemplateColumns = ''; // Clear grid layout
        projectList.style.gridTemplateRows = ''; // Clear grid layout
        projectList.style.justifyItems = ''; // Reset justifyItems
        projectList.style.setProperty('--num-cols', ''); // Reset custom num-cols property
        projectList.style.setProperty('--row-height', ''); // Reset custom row height

        // Apply default layout for screens
        if (window.innerWidth < 1000) {
            projectList.style.display = 'flex'; // Use flex layout for screens smaller than 1000px
            projectList.style.flexWrap = 'wrap'; // Ensure items wrap
            projectList.style.justifyContent = 'flex-start'; // Align items to the left
        } else {
            projectList.style.display = 'grid'; // Use grid layout for larger screens
            projectList.style.gridTemplateColumns = ''; // Clear grid layout
            projectList.style.gridTemplateRows = ''; // Clear grid layout
        }
    }
});