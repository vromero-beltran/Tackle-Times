// Function to toggle the background and navigate to the next page
// Function to toggle the background and save the "id" to local storage
function toggleBackground(element) {
    const isActive = element.parentElement.classList.toggle('active');
    if (isActive) {
        showNextButton(true);
        const imageId = element.id; // Get the "id" of the clicked image
        // Save the "id" to local storage
        localStorage.setItem("selectedImageId", imageId);
    } else {
        showNextButton(false);
        localStorage.removeItem("selectedImageId"); // Remove the "id" from local storage
    }
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
