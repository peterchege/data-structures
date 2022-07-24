//bubble sort algotithm

function sort(arr) { 
    resultArray = [...arr];

    for (let outer = 0; outer <= resultArray.length; outer++) {
        outerEl = resultArray[outer];
        
        for (let inner = outer + 1; inner <= resultArray.length; inner++) {
            innerEl = resultArray[inner];

            if (outerEl > innerEl) {
                resultArray[outer] = innerEl;
                resultArray[inner] = outerEl;

                outerEl = resultArray[outer];
                innerEl = resultArray[inner];

            }

        }

    }
    return resultArray;


}

const sortedArr = sort([5, 10, -3, -10, -20, 1, 100, 99]);

console.log(sortedArr);