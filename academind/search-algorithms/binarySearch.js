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
