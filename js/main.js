function initializeTypingEffect() 
{
    var options = {
        strings: ["I am Mohammed Elsayed", "I am a Freelancer.", "I am a Developer."],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 1000,
        loop: true
    };
    var typed = new Typed(".typed-output", options);
}

document.addEventListener("DOMContentLoaded", initializeTypingEffect);
