function cartProduct(setA, setB) { 
    product = [];

    for (const setAEL of setA) {
        for (const setBEl of setB) { 
            product.push([setAEL, setBEl]);
        }
     }

    return product;
}


const colors = ['blue', 'red'];
const sizes = ['m', 'l'];

console.log(cartProduct(colors, sizes)); // [['blue', 'm'], ['blue','l'], ...]


// Time Complexity: O(n*m) => O(n^2)
// Space Complexity: O(n*m) => O(n^2)