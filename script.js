
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




/*function toggleAustine() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}*/

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/*function toggleMenu(navId) {
    const menu = document.querySelector("#hamburger-nav .menu-links");
    const icon = document.querySelector("#hamburger-nav .hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

toggleMenu("hamburger-nav");*/






