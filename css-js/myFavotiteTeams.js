const selectedTeams = [];


function showNextButton() {
    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";
}
function toggleBackground(element) {
    element.parentElement.classList.toggle('selected');
}

// Rest of your code remains the same








function initializeSelectedTeams() {
    const selectedTeams = JSON.parse(localStorage.getItem("selectedTeams")) || [];

    selectedTeams.forEach(team => {
        // Find the corresponding team element by ID
        const teamElement = document.getElementById(team.id);

        if (teamElement) {
            // Set the team's image source and ID
            teamElement.src = team.src;
            teamElement.id = team.id;

            // Add the "active" class to mark it as selected
            teamElement.parentElement.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the selected teams when the page loads
    initializeSelectedTeams();
});


// Sample data for your teams
const teamsData = {
    teams: [
        {
            id: 'team1',
            imageSrc: 'path-to-image1.png',
            altText: 'Team 1',
        },
        {
            id: 'team2',
            imageSrc: 'path-to-image2.png',
            altText: 'Team 2',
        },
        // Add more teams as needed
    ],
};

// Compile the Handlebars template
const source = document.getElementById('team-template').innerHTML;
const template = Handlebars.compile(source);

// Render the template with data
const teamList = document.getElementById('teamList');
teamList.innerHTML = template(teamsData);
