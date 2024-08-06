function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const result = document.getElementById('result');
    const normalizedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = normalizedText.split('').reverse().join('');
    if (normalizedText === reversedText) {
        result.textContent = `"${inputText}" is a palindrome!`;
    } else {
        result.textContent = `"${inputText}" is not a palindrome.`;
    }
}