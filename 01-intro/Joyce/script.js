document.getElementById('textInput').addEventListener('input', function () {
    const textInput = this.value;
    const wordsList = ['dog', 'tea', 'sun', 'sunshine', 'nature', 'outdoor', 'outdoors', 'friend', 'family', 'hang out', 'flower', 'drinks', 'tree', 'puppy', 'cat', 'kitty', 'warm', 'chill', 'sea', 'break', 'vacation', 'book', 'bed', 'meditation', 'trip', 'home', 'sleep', 'cook', 'laugh', 'song', 'favorite', 'laughing', 'money', 'satisfying', 'coffee', ':)', ":D",
        'weather', 'love', 'soup', 'turkey', 'trifle', 'sherry', 'cheddar', 'excellent', 'gleaming', 'sparkling'
    ]; // Your list of words
    const displayText = document.getElementById('displayText');
    const colors = ['#FFA2A2', '#FFDAA2', '#FFFBA2', '#A2FFBC', '#A2E9FF', '#A9A2FF'];

    function cleanWord(word) {
        return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    }

    const processedText = textInput.split(/\s+/).map(word => {
        // Clean punctuation from the current word before checking
        const color = colors[Math.floor(Math.random() * colors.length)];

        const cleanedWord = cleanWord(word);
        if (wordsList.includes(cleanedWord.toLowerCase())) {
            return `<span style="color: ${color};">${word}</span>`;
        }
        return word;
    }).join(' ');

    displayText.innerHTML = processedText;

});
