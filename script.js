function typeWriter(element, text, speed) {
    let i = 0; // Initialize counter for typing
    element.innerHTML = ""; // Clear the existing text content
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i); // Add the next character
        i++;
        setTimeout(type, speed); // Call the typing function again after the speed interval
      }
    }
    type(); // Start the typing animation
  }
  // Get the existing HTML elements
  const headerElement = document.getElementById("header");
  // Get the existing text content from these elements
  const headerText = headerElement.textContent;
  // Apply typing effect with a speed of 50ms
  typeWriter(headerElement, headerText, 50); // For h1
 

function downloadResume() {
    const fileUrl = './Images/ArResume.docx'; // Ensure the file path is correct
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Aravind_Doosa_Resume.docx'; // Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  
