document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');

    if (name) {
        // Create the personalized message
        greetingMessage.innerHTML = `
            Dear ${name},<br><br>
            I want to take a moment to wish you a Merry Christmas, filled with joy, love, and happiness. 
            May this magical time be an opportunity to share precious moments with loved ones, create unforgettable memories, and renew your hopes and dreams.<br><br>
            May the light and warmth of Christmas illuminate your path, may peace and serenity fill your heart, and may love and generosity guide your steps.<br><br>
            I wish you a new year filled with promises, challenges, and successes. 
            May your dearest dreams come true, may your sincerest hopes be fulfilled, and may your life be filled with meaning, purpose, and happiness.<br><br>
            Merry Christmas, and may the new year be kind to you!<br><br>
            With all my love and best wishes,<br>
            BRYAN
        `;
        greetingMessage.classList.remove('hidden');
        showFireworks(); // Trigger fireworks when the message is displayed
    } else {
        alert('Please enter your name.');
    }
});