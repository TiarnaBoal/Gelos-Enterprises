document.addEventListener("DOMContentLoaded", function() {

const form = document.getElementById('contact-form');
const submissionMsg = document.getElementById('submission-msg');

// check if form has been submitted
form.addEventListener('submit', validateForm);

function validateForm(event) {
    // prevent submitting form before validation
    event.preventDefault();

    // clear any error messages
    clearErrors(form);

    let isValid = true;
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    // firstname check
    if (name.value.trim() == "") {
        handleErrors(name, "Your name is required");
        isValid = false;
    }
    else if (name.value.length > 60) {
        handleErrors(name, "Your name is too long");
        isValid = false;
    }

    // phone number check
    if (phone.value.trim() == "" || phone.value.length < 10) {
        handleErrors(phone, "Please enter a valid phone number");
        isValid = false;
    }
    else if (!phone.value.match(/^[0-9]+$/)) {
        handleErrors(phone, "Please enter a valid phone number");
        isValid = false;
    }

    // message box check
    if (message.value.trim() == "") {
        handleErrors(message, "Your message is required");
        isValid = false;
    } 

    // if input fields are valid
    if (isValid) {
        submissionMsg.innerHTML = "Thanks for your submission!";
        submissionMsg.classList.add('visible');
    }
}

// show error messages
function handleErrors(field, errorMsg) {
    let errorLabel = document.createElement('span');
    errorLabel.className = 'error';
    errorLabel.textContent = errorMsg;
    
    field.insertAdjacentElement('afterend', errorLabel); // position error message after field label
    field.classList.add('error-border');
}

// clear messages
function clearErrors(form) {
    const errors = form.querySelectorAll('.error');

    errors.forEach(error => error.remove());
    const field = form.querySelectorAll('input, textarea');
    field.forEach(field => field.classList.remove('error-border'));
}
})