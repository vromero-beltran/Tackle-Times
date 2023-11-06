




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


