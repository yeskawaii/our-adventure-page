var toggleButton = document.getElementById('accessibility-toggle');
  var optionsSection = document.getElementById('accessibility-options');

  toggleButton.addEventListener('click', function() {
    if (optionsSection.style.display === 'none') {
      optionsSection.style.display = 'block';
    } else {
      optionsSection.style.display = 'none';
    }
  });
  var fontSizeSlider = document.getElementById('font-size-slider');

fontSizeSlider.addEventListener('input', function() {
  var fontSize = fontSizeSlider.value + 'px';
  document.body.style.fontSize = fontSize;
});

var textToSpeechToggle = document.getElementById('text-to-speech-toggle');

textToSpeechToggle.addEventListener('change', function() {
  if (textToSpeechToggle.checked) {
    enableTextToSpeech();
  } else {
    disableTextToSpeech();
  }
});

function enableTextToSpeech() {
  if ('speechSynthesis' in window) {
      var utterance = new SpeechSynthesisUtterance();
      utterance.lang = 'es';
      utterance.text = getTextToRead();
      window.speechSynthesis.speak(utterance);
    }

}

function disableTextToSpeech() {
  if ('speechSynthesis' in window) {
      // Detener la lectura en voz alta
      window.speechSynthesis.cancel();
    }
  }

  function getTextToRead() {
    var textElements = document.querySelectorAll('.content-description p');
    var text = '';

    for (var i = 0; i < textElements.length; i++) {
      text += textElements[i].textContent + ' ';
    }

    return text;
  }

  var languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
  updateLanguage();
});

