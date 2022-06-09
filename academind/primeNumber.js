function isPrime(numbers) {
    for (let i = 2; i < numbers; i++) { 
        if( numbers % i === 0) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(3));
console.log(isPrime(10));