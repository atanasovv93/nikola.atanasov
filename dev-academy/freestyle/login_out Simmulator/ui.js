export function displayMessage(message, isError = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = "block";
    messageDiv.textContent = message;
    messageDiv.className = isError ? "error" : "success";
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 2000);
}
