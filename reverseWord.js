function reverseWord(string) {
    var wordArr = lowerCaseStr.split(' ');
    var reversedWordsArr = [];

    wordArr.forEach(word => {
        reverseWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i]
        }
        reversedWordsArr.push(reverseWord);
    });
    return reversedWordsArr.join(' ');
}