// Return the nth element of the FIbonacci Sequence

function fib(n) {
    let numbers = [1, 1];
    for (let i = 2; i < n + 1; i++) { 
        numbers.push(numbers[i - 2] + numbers[i - 1])
    }
    return numbers[n];

}

// T = 1+1+1+2*(n-1) = 3+2n-2 = 2n = n
// => O(n) => Lnear time Complexity


console.log(fib(1));