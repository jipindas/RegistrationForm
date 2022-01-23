let hasAgeValidationError
let hasPasswordValidationError
let hasPasswordMatchValidationError
let hasPhoneNumberValidationError
let hasTechnologyValidationError
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                hasAgeValidationError = false
                hasPasswordValidationError = false
                hasPasswordMatchValidationError = false
                hasPhoneNumberValidationError = false
                hasTechnologyValidationError = false
                passwordMatchCheck()
                validatePassword()
                validateDateOfBirth()
                validateMobileNumber()
                validateTechnology()
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                if (!hasAgeValidationError && !hasTechnologyValidationError && !hasPasswordValidationError && !hasPasswordMatchValidationError && !hasPhoneNumberValidationError) {
                    var firstName = document.getElementById('first_name').value;
                    alert("Hi Mr/Miss " + firstName + " Your application is submitted!")
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)

        })
})();

function validatePassword() {
    let message = document.getElementById('password_validate_message');
    let password = document.getElementById('password').value;
    const regexExp =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`])\S{8,16}$/
    if (regexExp.test(password)) {
        hasPasswordValidationError = false
        message.textContent = ''
    } else {
        hasPasswordValidationError = true
        message.textContent =
            'Password must be a combination of 8 to 16 characters containing atleast one number, small case letter, capital letter & special character.'
    }
}

function passwordMatchCheck() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let message = document.getElementById('password_match_message');
    if (password !== confirmPassword) {
        hasPasswordMatchValidationError = true
        message.textContent = "passwords don't match"
    } else {
        hasPasswordMatchValidationError = false
        message.textContent = ""
    }
}

function validateDateOfBirth() {
    let message = document.getElementById('age_validate_message');
    let today = new Date()
    let dob = new Date(document.getElementById('dob').value);
    let age = today.getFullYear() - dob.getFullYear()
    if (age > 18) {
        hasAgeValidationError = false
        message.textContent =
            ''
    } else {
        hasAgeValidationError = true
        message.textContent =
            'Age should be greater than 18'
    }
}

function validateMobileNumber() {
    let message = document.getElementById('mobile_validate_message');
    let phoneNumber = document.getElementById('mobile_number').value;
    const regexExp = /^[6-9]\d{9}$/gi;
    if (regexExp.test(phoneNumber)) {
        hasPhoneNumberValidationError = false
        message.textContent = ''
    } else {
        hasPhoneNumberValidationError = true
        message.textContent =
            'phone number must have 10 digits. Should start with 6-9'
    }
}

function validateTechnology() {
    let technologyCheckboxes = document.getElementsByName('technology');
    let message = document.getElementById('technology_validate_message')
    var atleastOneChecked = false;
    for (var i = 0, l = technologyCheckboxes.length; i < l; i++) {
        if (technologyCheckboxes[i].checked) {
            atleastOneChecked = true;
            break;
        }
    }
    if (atleastOneChecked) {
        hasTechnologyValidationError = false
        message.textContent = ''
    } else {
        hasTechnologyValidationError = true
        message.textContent = 'Please check atleat one technology"'
    }
}