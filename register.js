if (document.getElementById("register-form")) {
    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
    
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }
    
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
    
        const user = { name, email, password };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Registration successful!");
    });
}
