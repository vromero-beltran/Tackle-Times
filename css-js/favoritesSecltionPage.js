function toggleBackground(element) {
    const isActive = element.parentElement.classList.toggle('active');
    const maxTeams = 6; // Maximum number of teams allowed

    if (isActive) {
        if (selectedTeams.length < maxTeams) {
            showNextButton(true);
            addTeamToSelection(element);
        } else {
            element.parentElement.classList.remove('active'); // Deselect the team
            showNextButton(true); // Still show the "Next" button
        }
    } else {
        removeTeamFromSelection(element);
    }
}

function addTeamToSelection(element) {
    const teamName = element.alt;
    const teamSrc = element.src;

    // Assign teamId based on the position in the selectedTeams array (team 1 through team 6)
    const teamId = `team ${selectedTeams.length + 1}`;

    selectedTeams.push({ id: teamId, name: teamName, src: teamSrc });
    updateLocalStorage();
}

function removeTeamFromSelection(element) {
    const teamId = element.id;
    const index = selectedTeams.findIndex(team => team.id === teamId);

    if (index !== -1) {
        selectedTeams.splice(index, 1);
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    localStorage.setItem("selectedTeams", JSON.stringify(selectedTeams));
}






// Function to show or hide the "Next" button based on team selection
function showNextButton(isActive) {
    const nextButton = document.getElementById("nextButton");
    if (isActive) {
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none";
    }
}

// Attach the toggleBackground function to each team image's onclick event
const teamImages = document.querySelectorAll(".favoriteTeam img");
teamImages.forEach((image) => {
    image.onclick = function () {
        toggleBackground(this);
    };
});


function handleTeamClick(teamId) {
    // Store the selected team in local storage
    localStorage.setItem('selectedTeam', teamId);

    // Pass the image source URL as well
    const teamImageSrc = document.getElementById(teamId).src;
    localStorage.setItem('selectedTeamImage', teamImageSrc);

    // Redirect to the second page
    window.location.href = 'myfavoriteteams.html'; 
}


const selectedTeams = [];

document.addEventListener('DOMContentLoaded', function() {
    // Data for your teams (replace with your data)
    const nflTeams = [
        {
            id: '49ers',
            imageSrc: 'Nfl logos/49ers.png',
            altText: '49ers',
        },
        {
            id: 'steelers',
            imageSrc: 'Nfl logos/768px-Pittsburgh_Steelers_logo.png',
            altText: 'steelers',
        },
        {
            id: 'chargers',
            imageSrc: 'Nfl logos/2560px-Los_Angeles_Chargers_logo.png',
            altText: 'chargers',
        },
        {
            id: 'giants',
            imageSrc: 'Nfl logos/2560px-New_York_Giants_logo.png',
            altText: 'giants',
        },
        {
            id: 'washington',
            imageSrc: './Nfl logos/washington_wbg (1).png',
            altText: 'washington',
        },
        {
            id: 'rams',
            imageSrc: './Nfl logos/i (1).png',
            altText: 'rams',
        },
        {
            id: 'cardinals',
            imageSrc: 'Nfl logos/Arizona-Cardinals-Logo.png',
            altText: 'cardinals',
        },
        {
            id: 'ravens',
            imageSrc: './Nfl logos/Baltimore-Ravens-logo.png',
            altText: 'ravens',
        },
        {
            id: 'bills',
            imageSrc: './Nfl logos/buffalo_bills.png',
            altText: 'bills',
        },
        {
            id: 'bears',
            imageSrc: 'Nfl logos/Chicago-Bears-Logo.png',
            altText: 'bears',
        },
        {
            id: 'bengals',
            imageSrc: 'Nfl logos/Cincinnati_Bengals_logo.png',
            altText: 'bengals',
        },
        {
            id: 'browns',
            imageSrc: 'Nfl logos/Cleveland-Browns-Logo.png',
            altText: 'browns',
        },
        {
            id: 'broncos',
            imageSrc: 'Nfl logos/denver-broncos-logo-.png',
            altText: 'broncos',
        },
        {
            id: 'lions',
            imageSrc: 'Nfl logos/Detroit-Lions-Logo.png',
            altText: 'lions',
        },
        {
            id: 'Colts',
            imageSrc: 'Nfl logos/Indianapolis_Colts_logo.png',
            altText: 'Colts',
        },
        {
            id: 'jaguars',
            imageSrc: 'Nfl logos/jacksonville-jaguars-logo-.png',
            altText: 'jaguars',
        },
        {
            id: 'cheifs',
            imageSrc: 'Nfl logos/kansas-city-chiefs-logo-transparent.png',
            altText: 'cheifs',
        },
        {
            id: 'raiders',
            imageSrc: 'Nfl logos/las_vegas_raiders.png',
            altText: 'raiders',
        },
        {
            id: 'Dolphins',
            imageSrc: 'Nfl logos/Miami Dolphins.png',
            altText: 'Dolphins',
        },
        {
            id: 'vikings',
            imageSrc: 'Nfl logos/minnesota-vikings-logo-transparent.png',
            altText: 'vikings',
        },
        {
            id: 'Patriots',
            imageSrc: 'Nfl logos/New England Patriots.png',
            altText: 'Patriots',
        },
        {
            id: 'New-york-jets',
            imageSrc: 'Nfl logos/New_York_Jets_logo.png',
            altText: 'New-york-jets',
        },
        {
            id: 'Saints',
            imageSrc: 'Nfl logos/New-Orleans-Saints-Logo.png',
            altText: 'Saints',
        },
        {
            id: 'Eagles',
            imageSrc: 'Nfl logos/Philadelphia-Eagles-Logo.png',
            altText: 'Eagles',
        },
        {
            id: 'seahawks',
            imageSrc: 'Nfl logos/seattle-seahawks-logo-transparent.png',
            altText: 'seahawks',
        },
        {
            id: 'buccaneers',
            imageSrc: 'Nfl logos/tampa-bay-buccaneers-flag-logo.png',
            altText: 'buccaneers',
        },
        {
            id: 'titans',
            imageSrc: 'Nfl logos/tennessee-titans-logo-.png',
            altText: 'titans',
        },
        {
            id: 'texans',
            imageSrc: 'Nfl logos/Texans-Logo.png',
            altText: 'texans',
        },
        {
            id: 'falcons',
            imageSrc: 'Nfl logos/atlanta-falcons-logo-fixed.png',
            altText: 'falcons',
        },
        {
            id: 'panthers',
            imageSrc: 'Nfl logos/car panthers fixed logo.png',
            altText: 'panthers',
        },
        // Add data for other teams as needed
    ];
    

    // Get the Handlebars template
    const source = document.getElementById('team-template').innerHTML;
    const template = Handlebars.compile(source);

    // Get the container where teams will be rendered
    const teamsContainer = document.querySelector('.teams');

    // Render teams using Handlebars
    teamsData.forEach(function(team) {
        const html = template(team);
        teamsContainer.insertAdjacentHTML('beforeend', html);
    });
});


// save teams to array with the labes team 1 team 2 team 3 team 4 team 5 team 6 then change id of them on the next page to team 1-6