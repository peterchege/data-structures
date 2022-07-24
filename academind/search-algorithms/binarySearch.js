// binary search algorithm is a search algorithm that goes through all the elements of an array and checks if the element is equal to the searched element.


function findElement(sortedArr, element) {
    
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    
    while (startIndex <= endIndex) {
        let midvalue = startIndex + Math.floor((endIndex - startIndex) / 2);
        let midElement = sortedArr[midvalue];

        if (midElement === element) {
            return midvalue;
        } 
        if (midElement < element) {
            startIndex = midvalue + 1;
        } else { 
            endIndex = midvalue - 1;
        }

    }

}


arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));


// Usig recursive function to find the index of the element


function findElement2(sortedArr, element, offset) {
    
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    let midvalue = Math.floor((endIndex - startIndex) / 2);
    let midElement = sortedArr[midvalue];

    if (midElement === element) {
         return midvalue + offset;
    } 

    if (midElement < element) {
        startIndex = midvalue + 1;
        offset = offset + midvalue + 1;

    } else { 
        endIndex = midvalue - 1;
    }
    return findElement2(sortedArr.slice(startIndex, endIndex+1), element, offset);

}


arr2 = [1, 5, 9, 13, 99, 100];

console.log(findElement2(arr2, 99, 0));