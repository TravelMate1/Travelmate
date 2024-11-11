
// Toggle chatbox slider
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.right === '-300px') {
        chatbox.style.right = '0px'; // Slide in from the right
    } else {
        chatbox.style.right = '-300px'; // Slide out to the right
    }
}

// Function to send a message
function sendMessage() {
    const message = document.getElementById('userMessage').value;
    if (message.trim() !== "") {
        const chatboxBody = document.getElementById('chatboxBody');
        const userMessage = `<p><strong>You:</strong> ${message}</p>`;
        chatboxBody.innerHTML += userMessage; // Append the message
        document.getElementById('userMessage').value = ''; // Clear input

        // Automatically scroll to the bottom
        chatboxBody.scrollTop = chatboxBody.scrollHeight;

        // Popup response from Roamly
        setTimeout(() => {
            const roamlyMessage = `<p><strong>Roamly:</strong> Thank you for your message!</p>`;
            chatboxBody.innerHTML += roamlyMessage;
            chatboxBody.scrollTop = chatboxBody.scrollHeight; // Scroll again after response
        }, 1000); // Simulate delay in response
    }
}