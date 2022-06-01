// writing a function that retuns the sum of a numbers

// linear Time O(n);

function sumUp(n) { 
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;

}

console.log(sumUp(3));


// constant time O(1); using a math equation

function sumUpMath(n) { 
    return (n / 2) * (n + 1);
}

console.log(sumUpMath(3));


// write an algorith that takes an array of numbers as input and calculates the sum of those numbers

// using linear time complexity

function sumOfArray(z) { 
    let sum = 0;
    for (let i = 0; i <= z.length - 1; i++) {
        sum += z[i];
    }
    return sum;
}

// using constant time complexity

function sumOfArray2(z) { 
    return z.reduce((a, b) => a + b);
}

console.log(sumOfArray([3,5,6,7,8,9,10]));
console.log(sumOfArray2([3,5,6,7,8,9,10]));

