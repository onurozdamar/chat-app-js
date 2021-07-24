const container = document.querySelector("#messages");

let messageCount = 0;

function createMessage(messageText) {
  var messageContainer = document.createElement("div");
  messageContainer.setAttribute("class", "messageContainer");

  var message = document.createElement("div");
  message.setAttribute("class", "message");

  var messageTextDiv = document.createElement("div");
  messageTextDiv.setAttribute("class", "messageText");
  var messageDateDiv = document.createElement("div");
  messageDateDiv.setAttribute("class", "messageDateText");

  messageTextDiv.appendChild(document.createTextNode(messageText));
  var date = new Date();
  var dateText = date.getHours() + "." + date.getMinutes();
  messageDateDiv.appendChild(document.createTextNode(dateText));

  message.appendChild(messageTextDiv);
  message.appendChild(messageDateDiv);

  if (messageCount % 2 == 0) {
    messageContainer.style.justifyContent = "flex-end";
    message.style.marginLeft = "50px";
  } else {
    message.style.marginRight = "50px";
  }

  messageContainer.appendChild(message);

  return messageContainer;
}

const sendButton = document.querySelector("#send-button");
const input = document.querySelector("#input");

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    return;
  }

  const newMessage = createMessage(input.value);

  input.value = "";

  messageCount++;

  container.appendChild(newMessage);

  container.scrollTop = container.scrollHeight;
});
