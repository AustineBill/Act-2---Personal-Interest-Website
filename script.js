const textElement = document.getElementById('intro-text');
const text = 'WE FLEX';
let index = 1;


function showNextLetter() {
    if (index <= text.length) {
        textElement.textContent = text.slice(0, index);
        index++;
        setTimeout(showNextLetter, 200);
    } else {
        // Show the login form when the animation is complete
        const intro = document.getElementById('introduction');
        intro.remove();;
    }
}


showNextLetter();



function toggleContent(button) {
    const contentId = button.getAttribute("data-toggle");
    const content = document.getElementById(contentId);
    const containers = document.getElementById("text-container");


    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        /*containers.style.display = "none"; /*if you want to  on and off the content */
        button.innerText = "Read Less";
    } else {
        content.style.display = "none";
        /*containers.style.display = "block";  /*if you want to  on and off the content  */
        button.innerText = "Read More";
    }
}



