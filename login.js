document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        alert('Login successful! Token: ' + data.token);
        // Redirect or handle successful login here
        // Example: window.location.href = 'dashboard.html'; // Redirect to a dashboard page
    } else {
        alert('Login failed! Please check your credentials.');
    }
});
if (response.ok) {
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify({ username: data.username })); // Adjust according to the actual response structure
    window.location.href = 'dashboard.html';
}
