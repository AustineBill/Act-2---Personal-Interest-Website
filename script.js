const textElement = document.getElementById('intro-text');
const text = 'WE FLEX';
let index = 1;


function showNextLetter() {
    if (index <= text.length) {
        textElement.textContent = text.slice(0, index);
        index++;
        setTimeout(500);
        setTimeout(showNextLetter, 200);
    } else {
        // Show the login form when the animation is complete
        const loginForm = document.getElementById('login-form');
        loginForm.style.display = 'block';
    }
}

function startApp() {
    // You can add code here to handle the selected account and proceed to the main app.
    const accountSelect = document.getElementById('account-select');
    const selectedAccount = accountSelect.value;
    alert(`Starting We Flex as ${selectedAccount}`);
    // Redirect or perform further actions based on the selected account.
}

showNextLetter();
