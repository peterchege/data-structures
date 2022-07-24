// Return the nth element of the FIbonacci Sequence using recursive

function fib(n) {
    // [1,1,2,3,5,8]
    if(n === 0 || n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

// time complexity: O(2^n)

console.log(fib(4));