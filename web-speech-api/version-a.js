const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const startSpeechRecognition = () => {
  console.log("RECORDING STARTS!");
  searchFormInput.focus();
  const micIcon = searchForm.querySelector("i");
  micIcon.classList.remove("fa-microphone");
  micIcon.classList.add("fa-microphone-slash");
};

const stopSpeechRecognition = () => {
  console.log("RECORDING OVER!");
  searchFormInput.focus();
  const micIcon = searchForm.querySelector("i");
  micIcon.classList.remove("fa-microphone-slash");
  micIcon.classList.add("fa-microphone");
};

const processSpeechRecognition = (event) => {
  const transcript = event.results[event.resultIndex][0].transcript;
  searchFormInput.value = transcript;

  if (searchFormInput.value)
    setTimeout(() => {
      searchForm.submit();
    }, 1000);
};

const startRecognition = () => {
  const micIcon = searchForm.querySelector("i");
  const recognition = new SpeechRecognition();
  //   recognition.continuous = true;
  //   recognition.lang = "en-GB";

  micIcon.classList.contains("fa-microphone")
    ? recognition.start()
    : recognition.stop();
  recognition.addEventListener("start", startSpeechRecognition);
  recognition.addEventListener("end", stopSpeechRecognition);
  recognition.addEventListener("result", processSpeechRecognition);
};

const createSearchForm = () => {
  searchForm.insertAdjacentHTML(
    "beforeend",
    '<button type="button"><i class="fas fa-microphone"></i></button>'
  );
  const micBtn = searchForm.querySelector("button");
  micBtn.addEventListener("click", startRecognition);
};

const init = () => {
  createSearchForm();
};

if (SpeechRecognition) init();
