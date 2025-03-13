document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input (basic validation)
    if (!name || !email || !password) {
        displayMessage('Please fill in all fields.', 'error');
        return;
    }

    // Prepare data to send
    const data = {
        name: name,
        email: email,
        password: password
    };

    try {
        // Send data to the server
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Handle response from the server
        if (response.ok) {
            const result = await response.text(); // or response.json() if your server returns JSON
            displayMessage(result, 'success');
            // Optionally clear the form
            document.getElementById('signupForm').reset();
        } else {
            const errorText = await response.text();
            displayMessage(Error: ${errorText}, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        displayMessage('An error occurred while signing up. Please try again.', 'error');
    }
});

// Function to display messages to the user
function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // You can style messages based on type (success/error)
}
