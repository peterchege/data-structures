// write an algorithm that should take an array if numbers as input and return the minimum value in the array

function smallestValue(myArrays) { 
    myArrays.sort(function (a, b) { return a - b });
    return myArrays[0];
}


// Write an algorith that should take a number as input and return "true" its an even number, "false" if its an odd number


function isEven(numbers) { 
    if (numbers % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(smallestValue([20,4, 7, 2, 6, 10]));
console.log(isEven(5));
