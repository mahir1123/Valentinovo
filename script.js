function revealImages() {
    // Hide the main text and the button when it's clicked
    const mainText = document.getElementById('main-text');
    mainText.style.display = 'none'; // Hide the main text

    const button = document.querySelector('.reveal-button');
    button.style.display = 'none'; // Hide the button when clicked

    let images = document.querySelectorAll(".image-box");
    let finalMessage = document.getElementById("final-message");

    // Show image container after a short delay
    const imageContainer = document.getElementById('image-container');
    imageContainer.style.opacity = 1; // Show images container

    // Show images one by one with delays
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.display = "block";  // Make the image visible
            image.style.opacity = 1; // Apply opacity fade-in
        }, index * 3000); // Delay each image's appearance by 3 seconds
    });

    // After all images are shown, reveal the final message
    setTimeout(() => {
        finalMessage.style.opacity = 1; // Fade in "I Love You!"
    }, images.length * 3000);
}
