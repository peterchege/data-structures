function isPalindrome(string) {
    string = string.toLowerCase();
    var charactArr = string.split('');
    var validateChar = ('abcdefghijklmnopqrstuvwxyz').split('')

    var letterChar = []
    charactArr.forEach(char => {
        if (validateChar.indexOf(char) > -1)
            letterChar.push(char)
    });

    if (letterChar.join('') === letterChar.reverse().join(''))
        return true;
    else return false;
}
console.log(isPalindrome("Madam I'm Adam"));