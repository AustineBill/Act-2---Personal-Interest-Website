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

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    var icon = menu.querySelector('.hamburger-icon');
    var links = menu.querySelector('.menu-links');

    if (menu.style.display === 'none' || menu.style.display === '') {
        icon.classList.toggle("open");
        menu.classList.toggle("open");
        links.classList.toggle("open");

    } else {
        menu.style.display = 'none';
        icon.classList.remove('open');
        links.style.display = 'none';
    }
}

// Add event listeners for each hamburger icon
var Icon = document.getElementById('hamburger-nav').querySelector('.hamburger-icon');
var austineIcon = document.getElementById('hamburger-nav-austine').querySelector('.hamburger-icon');
var jadeIcon = document.getElementById('hamburger-nav-jade').querySelector('.hamburger-icon');
var maviIcon = document.getElementById('hamburger-nav-mavi').querySelector('.hamburger-icon');
var migsIcon = document.getElementById('hamburger-nav-miguel').querySelector('.hamburger-icon');

Icon.addEventListener('click', function () {
    toggleMenu('hamburger-nav');
});

austineIcon.addEventListener('click', function () {
    toggleMenu('hamburger-nav-austine');
});

jadeIcon.addEventListener('click', function () {
    toggleMenu('hamburger-nav-jade');
});

maviIcon.addEventListener('click', function () {
    toggleMenu('hamburger-nav-mavi');
});

migsIcon.addEventListener('click', function () {
    toggleMenu('hamburger-nav-miguel');
});


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



// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error("Modal not found with ID: " + modalId);
    }
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error("Modal not found with ID: " + modalId);
    }
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

// Function to close a modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
};

// Function to select only choosen person
function toggleSection(sectionId) {
    var sections = document.getElementsByClassName('movie-section');

    for (var i = 0; i < sections.length; i++) {
        var sect = sections[i];
        if (sect.id === sectionId) {
            sect.style.display = (sect.style.display === "none" || sect.style.display === "") ? "block" : "none";
        } else {
            sect.style.display = "none";
        }
    }
}
