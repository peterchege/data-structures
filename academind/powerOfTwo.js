// write an algorithm that finds the number is a power of two and

function squareOfTwo(number) {
    if (number < 1) { 
        return false;
    }

    let currentNum = number;
    while (currentNum !== 1) {
        if (currentNum % 2 !== 0) {
            return false;
        }
        currentNum = currentNum / 2;
    }
    return true;

}
 

console.log(squareOfTwo(8));