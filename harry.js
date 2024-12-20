// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.scatter-img');  // Select all images in the container

    // Add click event listener to each image
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            image.classList.toggle('scatter');  // Add or remove scatter class on click
        });
    });
});
