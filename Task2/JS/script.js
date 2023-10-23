const cancelButton = document.querySelector('.cancel-logo');
const messageBox = document.querySelector('.message-box');
const messageText = document.getElementById('message-text');
const containerDiv = document.querySelector('.container'); 

cancelButton.addEventListener('click', () => {
    messageBox.style.display = 'block';
    messageText.textContent = '';

    const textToDisplay = 'Have a nice day'.split('');

    textToDisplay.forEach((char, index) => {
        setTimeout(() => {
            messageText.textContent += char;
        }, index * 100);
    });

    setTimeout(() => {
        messageBox.style.display = 'none';
        containerDiv.style.display = 'none'; // Hide the whole container
    }, textToDisplay.length * 100 + 1000);  // hide time
});
