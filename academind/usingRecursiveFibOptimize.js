// Return the nth element of the FIbonacci Sequence using recursive using memoization(Dynamic Programming)

function fib(n, mem) {
    // [1,1,2,3,5,8]
    let res;
    if(mem[n]) return mem[n];
    if (n == 0 || n == 1) {
        res = 1;
    } else { 
        res = fib(n - 1, mem) + fib(n - 2, mem);
    }
    mem[n] = res;
    return res;
}

// time complexity: O(n)

console.log(fib(15, {}));