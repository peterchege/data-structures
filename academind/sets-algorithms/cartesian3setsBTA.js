function cartProduct(setA, setB) { 
    product = [];

    for (let setAEL of setA) {
        if (!Array.isArray(setAEL)) { 
            setAEL = [setAEL];
        }
        for (const setBEl of setB) { 
            product.push([...setAEL, setBEl]);
        }
     }

    return product;
}

function cartesian(...sets) { 
    let tempProduct = sets[0];

    for (let i = 1; i < sets.length; i++) { 
        tempProduct = cartProduct(tempProduct, sets[i]);
    }

    return tempProduct;

}


const colors = ['blue', 'red'];
const sizes = ['m', 'l'];
const styles = ['round neck', 'v neck'];


console.log(cartesian(colors, sizes, styles)); // [['blue', 'm'], ['blue','l'], ...]


// Time Complexity: O(n*m) => O(n^x)
// Space Complexity: O(n*m) => O(n^x)