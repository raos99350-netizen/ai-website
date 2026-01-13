function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat-box");

  chat.innerHTML += `<p>🧑 ${input.value}</p>`;
  chat.innerHTML += `<p>🤖 Main Rao Sahab ka AI hoon</p>`;

  input.value = "";
}