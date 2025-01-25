function checkPalindrome() {
    var word = prompt("Enter a word:").toLowerCase(); // Prompt user to enter a word and convert it to lowercase

    // Remove non-alphanumeric characters using regex
    var cleanWord = word.replace(/[^a-z0-9]/g, "");

    var reversedWord = "";
    var i = cleanWord.length - 1;

    while (i >= 0) {
        reversedWord += cleanWord.charAt(i);
        i--;
    }

    var isPalindrome = cleanWord === reversedWord;

    var outputMessage = '"' + word + '"';
    outputMessage += isPalindrome ? " is a palindrome." : " is not a palindrome.";

    alert(outputMessage);
}

// Call the function when the page is loaded
window.addEventListener("load", checkPalindrome);