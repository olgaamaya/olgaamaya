const projectData = {

    //check
    Lightbox_1: {
        TITEL: 'sUmMeR pOstIsOlAtIoN / ',
        MODEL: 'Model Roland E / ',
        AGENCY: 'agency trend model /',
        MAKEUP: 'make up Andrea Trenado /',
        PHOTOGRAPH_RETOUCH: ' photographer and retoucher mar docavo / ',
        ROLE: 'Fashion Stylist Olga Lucia Amaya / '
    },
    //check
    Lightbox_2: {
        TITEL: 'WinTeRBoY / ',
        MODEL: 'Model Yonathan Exss /',
        AGENCY: 'agency 2M models /',
        MAKEUP: 'make up Andrea Trenado /',
        PHOTOGRAPH_RETOUCH: 'photographer and retoucher mar docavo /',
        ROLE: 'Fashion Stylist olga lucia amaya / '
    },
    //check
    Lightbox_3: {
        TITEL: 'ME dESamAsTE / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: 'Directed by Lyona / Produced by Astrolabi Films / Sony Music Entertainment España, S.L. / Starring Claire Romain / 2020 /',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    //check?
    Lightbox_4: {
        TITEL: 'Julia Brezgina / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_5: {
        TITEL: 'PARISIAN FALL/Teen x MANGO / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_6: {
        TITEL: 'Vilet / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    //checked
    Lightbox_4: {
        TITEL: 'tE QuIEro UN pOCo / ',
        MODEL: '',
        AGENCY: 'Carlos Sadness / Directed by Lyona / Produced by Astrolabi Films / Sony Music Entertainment España, S.L. / Starring ida Domènech (Dulceida), Koko Ishizuka, Sophie Petterin, Irene Noren/',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' ',
        YEAR: '2018 / ',
        ROLE: 'COSTUME DESIGNER olga lucia amaya / ',
    },

    Lightbox_9: {
        TITEL: 'Back To School Teen x MANGO / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_10: {
        TITEL: 'What happens in PILMA stays in PILMA / Edició PRIDE! BCN 2019 /',
        ROLE: 'COSTUME DESIGNER / ',
        MODEL: '',
        AGENCY: 'Directed by Lyona / Produced by Astrolabi Films ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_12: {
        TITEL: 'sEUnGrI / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_13: {
        TITEL: 'E-Commerce / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_14: {
        TITEL: 'ShAdOW / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_15: {
        TITEL: 'Chiharu Okungi x Mango / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_16: {
        TITEL: 'Fusión del Núcleo/Chica Sobresalto / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_22: {
        TITEL: 'AW24 RE-GEN CITY SHADES / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_23: {
        TITEL: 'Maty Fall x MANGO / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },
    Lightbox_24: {
        TITEL: 'Denim seams x @mangoteen / ',
        ROLE: 'Fashion Stylist / ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    }
};

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

                let projectInfo = [];
                for (let category in project) {
                    if (project[category]) {
                        projectInfo.push(project[category]); // Add only non-empty data
                    }
                }

                // Join all the project data into a single string
                const allCredits = projectInfo.join(' / '); // Join all data with a separator like " / "

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

// Chunk array into smaller arrays of specific size (not needed for this version but kept for consistency)
function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// Initialize when the page loads
window.onload = function() {
    populateLightboxes();
};

// Re-run the function if the window is resized (to handle changes in viewport size)
window.onresize = function() {
    populateLightboxes();
};