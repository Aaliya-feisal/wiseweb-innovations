// Text typing animation
const aboutText = `
Wiseweb Innovations Ltd is a leading management-consulting firm established in 2014. 
We specialize in providing tailored solutions to meet the unique needs of our clients.
Our services range from research and survey solutions to impact and evaluation assessment, 
plan, policy, and project development.
`;

const companyCapabilitiesText = `
At Wiseweb Innovations Ltd, our capabilities are rooted in the extensive experience and deep knowledge of our consultants. We pride ourselves on our ability to deliver high-quality consultancy and implementation services tailored to the unique needs of our clients in the Somalia region and across East Africa.

Our consultants have a proven track record in various sectors, including but not limited to, agriculture, healthcare, education, and public administration. We offer a wide range of services such as strategic planning, capacity building, policy formulation, and project management.

Furthermore, we leverage innovative technologies and methodologies to ensure effective and sustainable solutions. Our commitment to excellence, integrity, and client satisfaction drives us to continually exceed expectations and contribute positively to the development and growth of our clients' businesses and communities.
`;

let aboutIndex = 0;
let companyCapabilitiesIndex = 0;

const aboutElement = document.querySelector(".about-content p");
const companyCapabilitiesElement = document.getElementById("company-capabilities-answer");

function typeText(element, text, index) {
  if (element && index < text.length) {
    if (text.charAt(index) === '\n') {
      element.innerHTML += '<br>'; // Add line break for new lines
    } else {
      element.innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(() => typeText(element, text, index), 30); // Adjust typing speed if needed
  }
}

// Start typing animations when the page loads
window.onload = function () {
  typeText(aboutElement, aboutText, aboutIndex);
  setTimeout(() => typeText(companyCapabilitiesElement, companyCapabilitiesText, companyCapabilitiesIndex), 500); // Delay for better presentation
};
