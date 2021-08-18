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