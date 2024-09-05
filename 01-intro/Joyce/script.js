document.getElementById('textInput').addEventListener('input', function() {
    const textInput = this.value;
    const wordsList = ['dog', 'tea','sun','sunshine','nature','outdoor','outdoors','friend','family','hang out','flower','drinks','tree','puppy','cat','kitty','warm','chill','sea','break','vacation','book','bed','meditation','trip','home','sleep','cook','laugh','song','favorite','laughing','money','satisfying','coffee',':)',":D",
    'weather','love'
    ]; // Your list of words
    const displayText = document.getElementById('displayText');
    
    function cleanWord(word) {
        return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    }

    const processedText = textInput.split(/\s+/).map(word => {
        // Clean punctuation from the current word before checking
        const cleanedWord = cleanWord(word);
        if (wordsList.includes(cleanedWord.toLowerCase())) {
            return `<span class="match">${word}</span>`;
        }
        return word;
    }).join(' ');
  
    displayText.innerHTML = processedText;
});
