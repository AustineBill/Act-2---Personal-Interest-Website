
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

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }




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
var austineIcon = document.getElementById('hamburger-nav-austine').querySelector('.hamburger-icon');
var jadeIcon = document.getElementById('hamburger-nav-jade').querySelector('.hamburger-icon');
var maviIcon = document.getElementById('hamburger-nav-mavi').querySelector('.hamburger-icon');

austineIcon.addEventListener('click', function () {
    toggleMenu('hamburger-nav-austine');
});

jadeIcon.addEventListener('click', function () {
    toggleMenu('hamburger-nav-jade');
});

maviIcon.addEventListener('click', function () {
    toggleMenu('hamburger-nav-mavi');
});





