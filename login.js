document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const userData = localStorage.getItem(email);

    if (userData) {
        const user = JSON.parse(userData);

        if (user.password === password) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Incorrect password.");
        }
    } else {
        alert("No account found with that email.");
    }
});
