function changeText() {
  const paragraph = document.getElementById('dynamic-text');
  paragraph.textContent = 'The text has been successfully changed!';
}

function toggleStyle() {
  const target = document.getElementById('style-target');
  target.classList.toggle('styled');
}

function toggleMessage() {
  const container = document.getElementById('message-box');
  const existing = document.getElementById('new-message');

  if (existing) {
    container.removeChild(existing);
  } else {
    const message = document.createElement('p');
    message.id = 'new-message';
    message.textContent = 'This message was added dynamically!';
    container.appendChild(message);
  }
}
