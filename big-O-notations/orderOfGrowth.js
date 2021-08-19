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


/* O(n log n) = Linearithmic */

function nLogN(n) {
    let y = n;
    
    while(n > 1){
        n = Math.floor(n / 2);
        for (i = 0; i <= y; i++){
            console.log(i);
        }
    }
}

/* MergeSort in Linearithmic */

function mergeSort(arr){
    if (arr < 2){
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(0, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }

    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}