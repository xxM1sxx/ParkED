function togglePasswordVisibility(isChecked) {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    password.type = isChecked ? 'text' : 'password';
    confirmPassword.type = isChecked ? 'text' : 'password';
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    
    let isValid = true;

    // Password validation
    if (!passwordRegex.test(password.value)) {
        password.classList.add('is-invalid');
        password.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
        password.nextElementSibling.style.display = 'none';
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        confirmPassword.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.nextElementSibling.style.display = 'none';
    }

    if (isValid) {
        // If all validations pass, you can submit the form or perform further actions
        alert('Registration successful!');
        // Uncomment the next line to submit the form
        // this.submit();
    }
});

// Real-time password matching check
document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password');
    const confirmPassword = this;
    
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        confirmPassword.nextElementSibling.style.display = 'block';
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.nextElementSibling.style.display = 'none';
    }
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    // Here you would typically send a request to your server to handle the password reset
    alert(`Password reset link sent to ${email}. Please check your email.`);
});