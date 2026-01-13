function startVoice() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-IN";

  recognition.onresult = function(event) {
    document.getElementById("userInput").value =
      event.results[0][0].transcript;
    sendMessage();
  };

  recognition.start();
}