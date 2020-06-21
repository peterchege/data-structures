function caesarCipher(str, num) {
    num = num % 26;

    lowerCaseStr = str.toLowerCase();
    alphabet = ('abcdefghijklmnopqrstuvwxz').split('')
    newString = ''

    for (var i = 0; i <= lowerCaseStr.lenght; i++) {
        var currentLetter = lowerCaseStr[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26
        if (newIndex < 0) newIndex = 26 + newIndex
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else newString += alphabet[newIndex]
    }
    return newString;
}