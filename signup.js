document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const role = document.getElementById('role').value;

    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, name, phone, email, age, gender, role }),
    });

    if (response.ok) {
        const data = await response.json();
        alert(data.message);
        window.location.href = 'login.html'; // Redirect to login after signup
    } else {
        const errorData = await response.json();
        alert(errorData.message);
    }
});
