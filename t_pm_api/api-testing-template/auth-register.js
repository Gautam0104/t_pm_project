// Base URL of the API
const API_BASE_URL = 'http://localhost:5000/api/auth';

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const messageElement = document.getElementById('registerMessage');

    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            messageElement.style.color = 'green';
            messageElement.textContent = data.message;
        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = data.message || 'Registration failed.';
        }
    } catch (error) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'An error occurred.';
        console.error(error);
    }
});