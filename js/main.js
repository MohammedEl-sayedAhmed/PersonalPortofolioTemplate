// Function to initialize the typing effect
function initializeTypingEffect() {
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
    loop: true,
  };

  // Create a new instance of the Typed object and apply it to the element with class "typed-output"
  var typed = new Typed(".typed-output", options);
}
// Event listener to initialize the typing effect when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeTypingEffect);

// Function to animate a counter element
function animateCounter(counterEl) {
  // Get the starting value from the data attribute and convert to integer
  const fromValue = parseInt(counterEl.dataset.from, 10);
  // Get the target value from the data attribute and convert to integer
  const toValue = parseInt(counterEl.dataset.to, 10);
  // Initialize the current value to the starting value
  let currentValue = fromValue;
  // Flag to track if the animation is complete
  let animationComplete = false;

  // Function to handle the animation
  const animate = () => {
    // Calculate the increment, dynamically adjusted based on the remaining value
    const increment = Math.max(1, (toValue - currentValue) / 5);

    // Increment the current value
    currentValue += increment;
    // Update the text content of the counter element
    counterEl.textContent = Math.floor(currentValue);

    // Check if the current value has reached or exceeded the target value
    if (currentValue >= toValue) {
      animationComplete = true;
    }

    // If the animation is not complete, request the next animation frame
    if (!animationComplete) {
      requestAnimationFrame(animate);
    }
  };

  // Start the animation
  animate();
}

// Event listener to initialize the counters when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class "counter"
  const counterEls = document.querySelectorAll(".counter");

  // Iterate over each counter element and start the animation
  counterEls.forEach((counterEl) => {
    animateCounter(counterEl);
  });
});


