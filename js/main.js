// Function to initialize the typing effect
function initializeTypingEffect() 
{
    // Configuration options for the typing effect
    var options = {
        // Array of strings to type out
        strings: ["I am Mohammed Elsayed", "I am a Freelancer.", "I am a Developer."],
        // Speed of typing (in milliseconds)
        typeSpeed: 70,
        // Speed of backspacing (in milliseconds)
        backSpeed: 50,
        // Delay before starting to backspace (in milliseconds)
        backDelay: 1500,
        // Delay before starting to type (in milliseconds)
        startDelay: 1000,
        // Loop the typing effect
        loop: true
    };

    // Create a new instance of the Typed object and apply it to the element with class "typed-output"
    var typed = new Typed(".typed-output", options);
}

// Event listener to initialize the typing effect when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeTypingEffect);
