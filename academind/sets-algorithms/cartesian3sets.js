// personal iteration

function cartProduct(setA, setB, setC) { 
    product = [];

    for (const setAEL of setA) {
        for (const setBEl of setB) { 
            for (const setCEl of setC) { 
            product.push([setAEL,setBEl, setCEl]);
            }
        }
     }

    return product;
}


const colors = ['blue', 'red'];
const sizes = ['m', 'l'];
const styles = ['round neck', 'v neck'];
console.log(cartProduct(colors, sizes, styles)); // [['blue', 'm', 'round neck'], ['blue', 'm', 'v neck'], ...]


// Time Complexity: O(n*m) => O(n^3)
// Space Complexity: O(n*m) => O(n^3)