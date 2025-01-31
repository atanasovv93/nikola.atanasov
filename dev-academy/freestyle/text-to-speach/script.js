const form = document.querySelector('form');
const voiceSelect = document.getElementById('voice');

function populateVoices() {
  const voices = speechSynthesis.getVoices();
  const filteredVoices = voices.filter(voice => voice.lang.startsWith('en') || voice.lang.startsWith('de'));
  voiceSelect.innerHTML = filteredVoices
    .map(voice => `<option value="${voice.name}" data-lang="${voice.lang}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const text = document.querySelector('input[name="text"]').value;
  const speed = document.querySelector('input[name="speed"]').value;
  const pitch = document.querySelector('input[name="pitch"]').value;
  const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('value');

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = speed;
  utterance.pitch = pitch;

  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find(voice => voice.name === selectedVoiceName);

  speechSynthesis.speak(utterance);
});
