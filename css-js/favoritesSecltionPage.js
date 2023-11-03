
function toggleBackground(element) {
    const isActive = element.parentElement.classList.toggle('active');
    if (isActive) {
        showNextButton(true);
        const imageId = element.id; // Get the "id" of the clicked image
        // Save the "id" to local storage
        localStorage.setItem("selectedImageId", imageId);
        // Add a delay before navigating to the next page
        setTimeout(function () {
            // Simulate a click on the "Next" button after a delay
            const nextButton = document.getElementById("nextButton");
            nextButton.click();
        }, 2000); // Delay for 2 seconds (2000 milliseconds)
    } else {
        showNextButton(false);
        localStorage.removeItem("selectedImageId");
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
