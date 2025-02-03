document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form redirect

    let username = document.getElementById("username").value.trim();
    let message = document.getElementById("message").value.trim();

    if (username === "" || message === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Send form data to Formspree
    fetch("https://formspree.io/f/xpwqryzo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, message: message })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("confirmationMessage").classList.remove("hidden");
            document.getElementById("username").value = "";
            document.getElementById("message").value = "";
            setTimeout(() => {
                document.getElementById("confirmationMessage").classList.add("hidden");
            }, 3000);
        } else {
            alert("Error sending message. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong.");
    });
});