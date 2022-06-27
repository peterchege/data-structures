// write an algorithm that goes through all smaller numbers and  multiplies them with each other

function fact(number) { 
    let result = 1;
    for (let i = 2; i <= number; i++) { 
        result *= i;
    }
    return result;
}

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));