const form = document.getElementById('registrationForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkPasswordStrength(password) {
    const strengthElement = document.getElementById('passwordStrength');
    const strengthText = document.getElementById('strengthText');
    const strengthFill = document.getElementById('strengthFill');

    if (password.length === 0) {
        strengthElement.classList.remove('show');
        return;
    }

    strengthElement.classList.add('show');

    if (password.length < 8) {
        strengthText.textContent = 'Lemah (minimal 8 karakter)';
        strengthFill.className = 'strength-fill strength-weak';
    } else if (password.length < 12) {
        strengthText.textContent = 'Sedang';
        strengthFill.className = 'strength-fill strength-medium';
    } else {
        strengthText.textContent = 'Kuat';
        strengthFill.className = 'strength-fill strength-strong';
    }
}

passwordInput.addEventListener('input', function() {
    checkPasswordStrength(this.value);
});


fullnameInput.addEventListener('blur', validateFullname);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

function validateFullname() {
    const fullname = fullnameInput.value.trim();
    const fullnameError = document.getElementById('fullnameError');

    if (fullname === '') {
        fullnameInput.classList.add('error');
        fullnameError.textContent = 'Nama lengkap tidak boleh kosong';
        fullnameError.classList.add('show');
        return false;
    } else if (fullname.length < 3) {
        fullnameInput.classList.add('error');
        fullnameError.textContent = 'Nama minimal 3 karakter';
        fullnameError.classList.add('show');
        return false;
    } else {
        fullnameInput.classList.remove('error');
        fullnameInput.classList.add('success');
        fullnameError.classList.remove('show');
        return true;
    }
}


function validateEmail() {
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');

    if (email === '') {
        emailInput.classList.add('error');
        emailError.textContent = 'Email tidak boleh kosong';
        emailError.classList.add('show');
        return false;
    } else if (!isValidEmail(email)) {
        emailInput.classList.add('error');
        emailError.textContent = 'Format email tidak valid (contoh: user@example.com)';
        emailError.classList.add('show');
        return false;
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailError.classList.remove('show');
        return true;
    }
}


function validatePassword() {
    const password = passwordInput.value;
    const passwordError = document.getElementById('passwordError');

    if (password === '') {
        passwordInput.classList.add('error');
        passwordError.textContent = 'Password tidak boleh kosong';
        passwordError.classList.add('show');
        return false;
    } else if (password.length < 8) {
        passwordInput.classList.add('error');
        passwordError.textContent = 'Password minimal 8 karakter';
        passwordError.classList.add('show');
        return false;
    } else {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordError.classList.remove('show');
        return true;
    }
}

function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (confirmPassword === '') {
        confirmPasswordInput.classList.add('error');
        confirmPasswordError.textContent = 'Konfirmasi password tidak boleh kosong';
        confirmPasswordError.classList.add('show');
        return false;
    } else if (password !== confirmPassword) {
        confirmPasswordInput.classList.add('error');
        confirmPasswordError.textContent = 'Password tidak cocok';
        confirmPasswordError.classList.add('show');
        return false;
    } else {
        confirmPasswordInput.classList.remove('error');
        confirmPasswordInput.classList.add('success');
        confirmPasswordError.classList.remove('show');
        return true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isFullnameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        successMessage.classList.add('show');

        setTimeout(() => {
            form.reset();
            successMessage.classList.remove('show');
            fullnameInput.classList.remove('success');
            emailInput.classList.remove('success');
            passwordInput.classList.remove('success');
            confirmPasswordInput.classList.remove('success');
            document.getElementById('passwordStrength').classList.remove('show');
        }, 2000);
    }
});
