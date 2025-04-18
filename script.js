// Function to open the envelope and reveal the message
function openEnvelope() {
    const envelope = document.getElementById("envelope");
    const topFlap = document.querySelector(".top-flap");
    const letter = document.querySelector(".letter");

    // Open the envelope by rotating the top flap
    topFlap.classList.add("open-flap");

    // Increase the envelope's height to fit the letter content
    envelope.style.height = '400px'; // Increase height for bigger letter content

    // Fade in the letter after a slight delay to simulate envelope opening
    setTimeout(() => {
        letter.style.opacity = 1;
    }, 1000);
}

// Tulips in the background: Generate random tulips
window.onload = function() {
    const tulipsContainer = document.querySelector(".tulips");
    const tulipImages = ["Tulip.png", "mao.jpg"]; // Array with two tulip images
    const tulipCount = 15;  // Number of tulips

    for (let i = 0; i < tulipCount; i++) {
        let tulip = document.createElement("img");
        // Randomly select one image from the tulipImages array
        tulip.src = tulipImages[Math.floor(Math.random() * tulipImages.length)];
        tulip.classList.add("tulip");
        tulip.style.left = `${Math.random() * 100}%`;
        tulip.style.bottom = `-${Math.random() * 50 + 10}vh`; // Start from random position at the bottom
        tulip.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        tulipsContainer.appendChild(tulip);
    }

    const audio = document.getElementById("audio");  // Use correct ID here

    // Play/Pause music when clicking the envelope
    document.getElementById("envelope").addEventListener("click", function() {
        if (audio.paused) {
            audio.play();  // Play the audio if paused
        } else {
            audio.pause(); // Pause the audio if playing
        }
    });

    // Set the volume (between 0 and 1)
    audio.volume = 0.5;  // Adjust volume here (e.g., 50%)
}
