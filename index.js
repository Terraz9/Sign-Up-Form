// const myform = document.querySelector("#form-data");
// const firstName = document.querySelector("#f-name");
// const email = document.querySelector("#email");
// const lastName = document.querySelector("#l-name");
// const phoneNumber = document.querySelector("#p-number");
// const password = document.querySelector("#password");
// const passwordConfirmation = document.querySelector("#c-password");
// const allInputs = document.querySelectorAll(".write-inputs");

// // When submit is clicked, it doesn't send the form until it is validated
// myform.addEventListener("submit", (e) => {
//     e.preventDefault();
//     validateForm();
// })

// // If input is invalid then setError() is used
// function setError(element, message) {
//     const inputControl = element.parentElement;
//     const errorMessage = inputControl.querySelector(".error-message");

//     errorMessage.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// // If input is valid then setSuccess() is used
// function setSuccess(element) {
//     const inputControl = element.parentElement;
//     const errorMessage = inputControl.querySelector(".error-message");

//     errorMessage.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// function submitAll() {
//     let allValid = allInputs.classList.contains('success');

//     if (allValid == true) {
//         myform.submit();
//     }
// }

// // These are the constraints for each of the inputs
// function validateForm() {
//     const firstNameValue = firstName.value;
//     const lastNameValue = lastName.value;
//     const emailValue = email.value;
//     const phoneNumberValue = phoneNumber.value;
//     const passwordValue = password.value;
//     const passwordConfirmationValue = passwordConfirmation.value
// // Name constraints
//     if (firstNameValue === '') {
//         setError(firstName, 'Name is required');
//     }
//     else {
//         setSuccess(firstName);
//     }

//     if (lastNameValue === '') {
//         setError(lastName, 'Last name is required');
//     }
//     else {
//         setSuccess(lastName);
//     }

//     if (emailValue === '') {
//         setError(email, 'Email is required');
//     }
//     else {
//         setSuccess(email);
//     }

//     if (phoneNumberValue === ''){
//         setError(phoneNumber, 'Phone Number is required');
//     }
//     else{
//         setSuccess(phoneNumber);
//     }
    
//     if (passwordValue === ''){
//         setError(password, 'Password is required');
//     }
//     else{
//         setSuccess(password);
//     }
//     if (passwordConfirmationValue === ''){
//         setError(passwordConfirmation, 'Password Confirmation is required');
//     }
//     else{
//         setSuccess(passwordConfirmation);
//     }

//     submitAll();
// }
