const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) recognition = new SpeechRecognition();

let recording = false;

const searchRecognition = (value) => {
  if (value) {
    setTimeout(() => {
      searchForm.submit();
    }, 1000);
  } else {
    return;
  }
};

const processSpeechRecognition = (event) => {
  const micIcon = searchForm.querySelector("i");
  micIcon.classList.remove("fa-microphone-slash");
  micIcon.classList.add("fa-microphone");
  const transcript = event.results[event.resultIndex][0].transcript;
  searchFormInput.value = transcript;
  searchRecognition(searchFormInput.value);
};

const toggleRecording = () => {
  const micIcon = searchForm.querySelector("i");
  if (!recording || recording === false) {
    recording = true;
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    recognition.start();
  } else {
    recording = false;
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    recognition.stop();
  }
  recognition.addEventListener("result", processSpeechRecognition);
};

const init = () => {
  searchForm.insertAdjacentHTML(
    "beforeend",
    '<button type="button"><i class="fas fa-microphone"></i></button>'
  );
  const micBtn = searchForm.querySelector("button");
  micBtn.addEventListener("click", toggleRecording);
};

if (SpeechRecognition) init();
