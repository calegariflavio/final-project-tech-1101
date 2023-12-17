// JavaScript to handle zooming effect
const textToZoom = document.getElementById('zoomText');

textToZoom.addEventListener('mouseover', function () {
  textToZoom.style.fontSize = '26px'; // Change font size on hover
});

textToZoom.addEventListener('mouseout', function () {
  textToZoom.style.fontSize = '20px'; // Revert to default font size on mouseout
});



// JavaScript function to redirect to Instagram
function redirectToWebsite() {
  window.open("https://www.instagram.com/flaviocalegari/", "_blank");
}

//hint
// Get the image and hint elements
const image = document.getElementById('picture');
const hint = document.getElementById('hint');

// Show the hint message when hovering over the image
image.addEventListener('mouseover', function (event) {
  const x = event.pageX;
  const y = event.pageY;

  hint.style.display = 'block';
  hint.style.left = x + 'px';
  hint.style.top = (y + 20) + 'px'; // Adjust the vertical position as needed
  hint.innerHTML = 'Click to visit my Instagram!'; // Replace with your message
});

// Hide the hint when the mouse leaves the image area
image.addEventListener('mouseout', function () {
  hint.style.display = 'none';
});