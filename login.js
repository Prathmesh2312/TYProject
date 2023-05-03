const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
e.preventDefault();

if (email.value.trim() === '' || !isValidEmail(email.value)) {
    showError(email, 'Please enter a valid email');
} else {
    hideError(email);
}

if (password.value.trim() === '') {
    showError(password, 'Please enter a password');
} else {
    hideError(password);
}

if (email.value.trim() !== '' && isValidEmail(email.value) && password.value.trim() !== '') {
    // submit form
    form.submit();
}
});

function isValidEmail(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
const formControl = input.parentElement;
const error = formControl.querySelector('small');
error.innerText = message;
formControl.classList.add('error');
}

function hideError(input) {
const formControl = input.parentElement;
formControl.classList.remove('error');
}
