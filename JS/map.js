// Function to randomize case for each letter in a string, while preserving "mango", "MANGO", and "mangoteen"
function randomizeCase(str) {
    let result = '';

    // Preserve "mango", "MANGO", and "mangoteen" as they are
    str = str.replace(/\bmango\b|\bMANGO\b|\bmangoteen\b/g, (match) => {
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
        ROLE: 'Fashion Stylist Olga Lucia Amaya '
    },

    Lightbox_2: {
        TITELINDEX: randomizeCase("WinTeRBoY/<br> client magazine"),
        ROLEINDEX: "art direction / fashion stylist",
        TITEL: 'WinTeRBoY  ',
        MODEL: 'Model Yonathan Exss ',
        AGENCY: 'agency 2M models ',
        MAKEUP: 'make up Andrea Trenado ',
        PHOTOGRAPH_RETOUCH: 'photographer and retoucher mar docavo ',
        ROLE: 'Fashion Stylist olga lucia amaya '
    },

    Lightbox_3: {
        TITELINDEX: randomizeCase("ME dESamAsTE"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'ME dESamAsTE  ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: 'Directed by Lyona / Produced by Astrolabi Films / Sony Music Entertainment España, S.L. / Starring Claire Romain / 2020 ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
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
        ROLE: 'COSTUME DESIGNER olga lucia amaya  ',
    },

    Lightbox_5: {
        TITELINDEX: randomizeCase("sEUnGrI"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'sEUnGrI  ',
        MODEL: ' Model Seung ',
        AGENCY: ' agency two management ',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' photographer and retoucher mar docavo ',
        ROLE: ' fashion stylist Olga Lucia Amaya ',
    },

    Lightbox_6: {
        TITELINDEX: randomizeCase("matea brakus x MANGO"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'matea brakus x mango',
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
        TITELINDEX: randomizeCase("Back To School <br> mangoteen"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Back To School Teen x MANGO / mangoteen ',
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
        TITELINDEX: randomizeCase("Kids x Mango"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Kids x Mango ',
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
        TITEL: 'clara infante x MANGO home / fashion stylist Olga lucia Amaya / clara infante x MANGO home / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_17: {
        TITELINDEX: randomizeCase("TEEN x MANGO / Mangoteen"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'TEEN x MANGO / Mangoteen / fashion stylist Olga lucia Amaya / TEEN x MANGOteen / fashion stylist Olga lucia Amaya  ',
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
        TITEL: ' PARISIAN FALL / TEEN x MANGO / Mangoteen / fashion stylist Olga lucia Amaya /  PARISIAN FALL / TEEN x MANGO / Mangoteen / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_21: {
        TITELINDEX: randomizeCase("julia brezgina "),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'julia brezgina / fashion stylist Olga lucia Amaya / julia brezgina / fashion stylist Olga lucia Amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: '',
        ROLE: '',
    },

    Lightbox_22: {
        TITELINDEX: randomizeCase("AW24 RE-GEN <BR> CITY SHADES <BR>lightTHINKINGMU"),
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
        TITEL: 'Maty Fall x MANGO  ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    },

    Lightbox_24: {
        TITELINDEX: randomizeCase("Denim seams x @mangoteen"),
        ROLEINDEX: "Fashion Stylist",
        TITEL: 'Denim seams x @mangoteen  ',
        ROLE: 'Fashion Stylist olga lucia amaya  ',
        MODEL: '',
        AGENCY: '',
        MAKEUP: '',
        PHOTOGRAPH_RETOUCH: ' '
    }
};

// Display the lightboxes to confirm randomization
console.log(lightboxes);



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
                    if (project[category] && project[category].trim() !== '') { // Ensure no empty string or spaces
                        projectInfo.push(project[category]); // Add only non-empty data
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