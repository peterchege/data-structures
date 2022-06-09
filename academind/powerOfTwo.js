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
 

// Best case: number = 13 => O(1)
// Average Case: 0(log n)
// Worst Case: 1,125,899,906,842,624 => O(log n)

console.log(squareOfTwo(8));