const APP = {
    init() {
        APP.addListeners();
    },

    addListeners() {
        let form = document.querySelector('#form-data');
        const firstName = document.querySelector('#f-name');
        const email = document.querySelector('#email');
        const lastName = document.querySelector('#l-name');
        const phoneNumber = document.querySelector('#p-number');
        const password = document.querySelector('#password');
        const passwordConfirmation = document.querySelector('#c-password');

        firstName.addEventListener('input', APP.testName);
        passwordConfirmation.addEventListener('input', APP.testPasswordConfirmation)
        email.addEventListener('change', APP.testEmail)

        form.addEventListener('submit', APP.validateForm);
    },

    validateForm(e) {
        let form = e.target
        let current = form.checkValidity();
        if (!current)
        e.preventDefault();
    },

    testName(e) {
        let firstName = e.target;
        firstName.setCustomValidity('');
        //Check if HTML constrictions are valid
        let currently = firstName.checkValidity();
        //If HTML constrictions are valid, then add these extra Javascript constrictions
        if (currently) {
            let emReg = new RegExp('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$');
            if (emReg.test(firstName.value) === false) {
                firstName.setCustomValidity('Not a name');
                firstName.reportValidity();
            }
            else {
                firstName.setCustomValidity('');
            }
        }
    },

    testPasswordConfirmation(e) {
        let passwordConfirmation = e.target
        passwordConfirmation.setCustomValidity('')
        let currently = passwordConfirmation.checkValidity();
        if (currently) {
            let firstPassword = document.querySelector('#password');
            if (passwordConfirmation.value != firstPassword.value) {
                passwordConfirmation.setCustomValidity('Passwords don\'t match');
            passwordConfirmation.reportValidity();
            }
            else {
                passwordConfirmation.setCustomValidity('');
            }
        }
    },


}

document.addEventListener('DOMContentLoaded', APP.init);