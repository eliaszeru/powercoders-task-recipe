// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show or hide recipe steps when clicking on the prompt
function showSteps(recipeId) {
    const recipeSteps = document.getElementById(recipeId + '_steps');
    if (recipeSteps.style.display === 'none' || recipeSteps.style.display === '') {
        recipeSteps.style.display = 'block';  // Show the steps
    } else {
        recipeSteps.style.display = 'none';  // Hide the steps
    }
}

// Add visibility class when scrolling to the section
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 1.2) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    });

    // Trigger the scroll event to show sections when the page loads
    window.dispatchEvent(new Event("scroll"));
});

