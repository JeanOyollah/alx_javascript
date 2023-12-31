// Getting references to form elements and error/success message elements
const submitForm = document.getElementById('submitForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');
const successElement = document.getElementById('success');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieving the values entered in the form fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Performing form validation
    if (name === '' || email === '') {
        // Display an error message if any required field is empty
        errorElement.textContent = 'Please fill in all required fields.';
        successElement.textContent = '';
    } else {
        // Clearing any previous error messages
        errorElement.textContent = '';

        // Displaying a success message
        successElement.textContent = 'Form submitted successfully!';
    }
}

// Event listener for form submission
submitForm.addEventListener('submit', handleFormSubmit);