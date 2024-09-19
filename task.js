document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const form = document.getElementById('loginForm');
   
    username.setCustomValidity('');
    password.setCustomValidity('');

    if (username.value.trim() === '') {
        username.setCustomValidity('Please enter your username');
        username.reportValidity(); 
    } else if (username.value.length > 50) {
        username.setCustomValidity('Username must be smaller than 50 letters');
        username.reportValidity();
    } else if (password.value.trim() === '') {
        password.setCustomValidity('Please enter your password');
        password.reportValidity();
    } else if (password.value.length < 6) {
        password.setCustomValidity('Password must be at least 6 characters');
        password.reportValidity();
    } else {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Modal functionality
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const closeModal = document.getElementsByClassName('close')[0];

// When the user clicks the "Forgot Password" link, open the modal
forgotPasswordLink.addEventListener('click', function() {
    forgotPasswordModal.style.display = 'flex'; // Show the modal by changing display to 'flex'
});

// When the user clicks on the close button, close the modal
closeModal.addEventListener('click', function() {
    forgotPasswordModal.style.display = 'none'; // Hide the modal
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none'; // Hide modal when clicked outside
    }
});

