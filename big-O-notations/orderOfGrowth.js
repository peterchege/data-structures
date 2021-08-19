/*

ORDER OF GROWTH (GOOD - BAD)

O (1) = Constant
O (log n) = Logarithmic
O (n) = Linear
O (n Log n) = Linearithmic
O (n^2) = Quadratic
O (n^3) = Cubic
O (2^n) = Exponential
O (n!) = Factorial

*/


function linearFunc(arr){
    for (let i = 0; i < arr.length; i++) { //linear
        console.log(100 * 100000) //constants
    }
}


/* O(n^2) = Quadratic */

function square (n){
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j< n; j++){
            console.log(i, j);
        }
    }
}


/* O(n^3) = Cubic */

function cube (n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++){
                console.log(i, j, k);
            }
        }
    }
}

/* O(log n) = Logarithmic */

/* Recursive function */

function logFunc(n) {
    if( n === 0 ) return "Done";
    n = Math.floor(n /2);
    return logFunc(n);
    
}

/* iterative/non-recursive function */

function logn(n) {
    while (n > 1){
        n = Math.floor(n /2);
    }
}

/* Binary Search function */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = arr.length - 1;
let target = 8;

function binarySearch(arr, start, end, target) {
    if (start > end) return false;

    midIndex = Math.floor((start + end) / 2);

    if (arr[midIndex] === target) return true;
    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex -1, target);
    else if (arr[midIndex] < target) return binarySearch(arr, midIndex + 1, end, target)

}