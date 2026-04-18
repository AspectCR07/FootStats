document.addEventListener('DOMContentLoaded', function() {
    // Sign Up Form Validation and Submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const terms = document.getElementById('terms').checked;
            
            // Reset previous error messages
            clearErrors();
            
            // Validate form
            let isValid = true;
            
            if (username === '') {
                showError('fullname', 'Please enter your full name');
                isValid = false;
            }
            
            if (email === '') {
                showError('email', 'Please enter your email address');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (password === '') {
                showError('password', 'Please create a password');
                isValid = false;
            } else if (password.length < 8) {
                showError('password', 'Password must be at least 8 characters long');
                isValid = false;
            }
            
            if (confirmPassword === '') {
                showError('confirm-password', 'Please confirm your password');
                isValid = false;
            } else if (password !== confirmPassword) {
                showError('confirm-password', 'Passwords do not match');
                isValid = false;
            }
            
            if (!terms) {
                showError('terms', 'You must agree to the Terms of Service and Privacy Policy');
                isValid = false;
            }
            
            if (isValid) {
                try {
                    const response = await fetch('http://localhost:3001/api/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username,
                            email,
                            password
                        })
                    });

                    const data = await response.json();

                    if (response.ok) {
                        showNotification('Account created successfully! Redirecting...', 'success');
                        setTimeout(() => {
                            window.location.href = 'signin.html';
                        }, 1500);
                    } else {
                        showNotification(data.message || 'Error creating account', 'error');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    showNotification('An error occurred. Please try again later.', 'error');
                }
            }
        });
    }
    
    // Sign In Form Validation and Submission
    const signinForm = document.getElementById('signin-form');
    const alertContainer = document.getElementById('alert-container');
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('http://localhost:3001/api/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Store user data in localStorage
                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    // Show success message
                    showAlert('Login successful! Redirecting...', 'success');
                    
                    // Redirect to home page after 2 seconds
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 2000);
                } else {
                    showAlert(data.message || 'Login failed. Please try again.', 'error');
                }
            } catch (error) {
                showAlert('An error occurred. Please try again later.', 'error');
                console.error('Error:', error);
            }
        });
    }
    
    // Social Authentication Buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    if (socialButtons.length > 0) {
        socialButtons.forEach(button => {
            button.addEventListener('click', function() {
                const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
                showNotification(`Social login with ${provider} is not available in this demo`, 'info');
            });
        });
    }
    
    // Helper Functions
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        // Insert error message after input or its parent for checkboxes
        if (input.type === 'checkbox') {
            input.parentElement.insertAdjacentElement('afterend', errorElement);
        } else {
            input.insertAdjacentElement('afterend', errorElement);
        }
        
        // Add error class to input
        input.classList.add('error');
    }
    
    function clearErrors() {
        // Remove all error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        // Remove error class from inputs
        const inputs = document.querySelectorAll('.error');
        inputs.forEach(input => input.classList.remove('error'));
    }
    
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Append to body
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Function to show alerts
    function showAlert(message, type) {
        alertContainer.innerHTML = `
            <div class="alert alert-${type}">
                ${message}
            </div>
        `;
    }
    
    // Add styles for error messages and notifications if not already in CSS
    if (!document.querySelector('#auth-styles')) {
        const style = document.createElement('style');
        style.id = 'auth-styles';
        style.textContent = `
            .error-message {
                color: #dc3545;
                font-size: 0.85rem;
                margin-top: 5px;
            }
            
            input.error {
                border-color: #dc3545;
            }
            
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 4px;
                color: white;
                font-weight: 500;
                z-index: 1000;
                transform: translateY(100px);
                opacity: 0;
                transition: all 0.3s ease;
                max-width: 300px;
            }
            
            .notification.show {
                transform: translateY(0);
                opacity: 1;
            }
            
            .notification.success {
                background-color: #28a745;
            }
            
            .notification.error {
                background-color: #dc3545;
            }
            
            .notification.info {
                background-color: #17a2b8;
            }
        `;
        document.head.appendChild(style);
    }
});