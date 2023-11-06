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









function delayedNavigation() {
    // Add a delay before navigating to the next page
    setTimeout(function () {
        // Simulate a click on the "Next" button after a delay
        const nextButton = document.getElementById("nextButton");
        nextButton.click();
    }, 2000); // Delay for 2 seconds (2000 milliseconds)
}

// Assuming you have a button with an id "nextButton" that triggers navigation
document.getElementById("nextButton").addEventListener("click", delayedNavigation);




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
    window.location.href = 'myfavoriteteams.html'; // Replace 'secondPage.html' with your actual second page's URL
}


const selectedTeams = [];



// save teams to array with the labes team 1 team 2 team 3 team 4 team 5 team 6 then change id of them on the next page to team 1-6