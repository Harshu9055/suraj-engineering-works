function logout() {
    localStorage.removeItem('user'); // Remove user data from local storage
    window.location.href = 'index.html'; // Redirect to the homepage
}
