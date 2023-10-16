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

function selectAccount(accountNumber) {
    // You can perform actions here when a button is clicked
    alert('Selected Account ' + accountNumber);
    // You can replace the alert with your custom logic.
}

showNextLetter();
