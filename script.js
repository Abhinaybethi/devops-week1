// Get the form element and error message div
const form = document.getElementById('registrationForm');
const errorMessageDiv = document.getElementById('error-message');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get the input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const event = document.getElementById('event').value;

    // Validate the input values
    if (!name || !email || !phone || !event) {
        errorMessageDiv.textContent = 'Please fill in all the fields';
        return;
    } else {
        errorMessageDiv.textContent = ''; // Clear any previous error messages
    }

    // Create a new object to store the form data
    const formData = {
        name,
        email,
        phone,
        event,
    };

    // Send the form data to the server (replace with your server-side logic)