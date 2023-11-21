/* Introduction */
const textElement = document.getElementById('intro-text');
const text = 'WE FLEX';
let index = 1;
function showNextLetter() {
    if (index <= text.length) {
        textElement.textContent = text.slice(0, index);
        index++;
        setTimeout(showNextLetter, 400);
    } else {
        // Show the login form when the animation is complete
        const intro = document.getElementById('introduction');
        intro.remove();;
    }
}
showNextLetter();
/* Button to Read More Content */
function toggleContent(button) {
    const contentId = button.getAttribute("data-toggle");
    const content = document.getElementById(contentId);
    const containers = document.getElementById("text-container");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerText = "Less";
  
    } else {
        content.style.display = "none";
        /*containers.style.display = "block";  /*if you want to  on and off the content  */
        button.innerText = "More";
    }
}




function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}



// Get all modal buttons and set up event listeners
var modalButtons = document.querySelectorAll(".img-container-options");
modalButtons.forEach(function (button, index) {
    var modalId = "myModal" + (index + 1);
    button.onclick = function () {
        openModal(modalId);
    }
});

// Get all close buttons and set up event listeners
var closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function (closeButton, index) {
    var modalId = "myModal" + (index + 1);
    closeButton.onclick = function () {
        closeModal(modalId);
    }
});
s
// Function to close a modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };
