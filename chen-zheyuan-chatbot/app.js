const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = 'You: ' + userInput;
    chatBox.appendChild(userMessage);
    document.getElementById('user-input').value = '';

    // Simulated bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = 'Chen ZheYuan: ' + getBotResponse(userInput);
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }, 1000);
}

function getBotResponse(input) {
    // Simulated responses
    const responses = [
        "Hey, my crush ALINA ",
        "Good to see you",
        "Do like me?",
        "Remember, I like you too",
        "I'm here to brighten your day!",
        "Stay positive, just like me!",
        "Acting is all about expression!",
        "Always believe in yourself!",
        "What do you want to know?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
