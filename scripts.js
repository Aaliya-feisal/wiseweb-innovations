// Text typing animation
const mainText = "WiseWeb Innovations";
const captionText = "Building Solutions, One Step at a Time";
let mainIndex = 0;
let captionIndex = 0;
const mainElement = document.getElementById("typed");
const captionElement = document.getElementById("caption");

function typeMainText() {
  if (mainIndex < mainText.length) {
    mainElement.innerHTML += mainText.charAt(mainIndex);
    mainIndex++;
    setTimeout(typeMainText, 100); // Adjust typing speed if needed
  } else {
    typeCaptionText(); // Start typing the caption after the main text is finished
  }
}

function typeCaptionText() {
  if (captionIndex < captionText.length) {
    captionElement.innerHTML += captionText.charAt(captionIndex);
    captionIndex++;
    setTimeout(typeCaptionText, 50); // Adjust typing speed if needed
  }
}

typeMainText();


