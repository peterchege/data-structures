function sort(arr) { 
    console.log('FUNCTION START');
    console.log(arr);

    if (arr.length < 2) {
        return arr;
    }

    if (arr.length === 2) { 
        console.log('EXACTLY 2 ITEMS');
        console.log(arr[0] > arr[1] ? [arr[1], arr[0]] : arr);

        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);
    
    console.log('LeftArray:', leftArr);
    console.log('RigthArray:', rightArr);
    
    const leftSortedArray = sort(leftArr);
    const rightSortedArray = sort(rightArr);

    console.log('AFTER RECURSIVE STEP');
    console.log('LeftSortedArray:', leftSortedArray);
    console.log('RigthSortedArray:', rightSortedArray);
    
    const mergeArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSortedArray.length || rightIndex < rightSortedArray.length) {

        if (leftIndex >= leftSortedArray.length || leftSortedArray[leftIndex] > rightSortedArray[rightIndex]) {
            mergeArr.push(rightSortedArray[rightIndex])
            rightIndex++;
        } else { 
            mergeArr.push(leftSortedArray[leftIndex]);
            leftIndex++;
        }
    }

    console.log('AFTER MERGE');
    console.log(mergeArr);
    
    return mergeArr;

}

const sortedArray = sort([-10, 33, 5, 24, 10, 9, 3, -19, -99, 100]);
console.log(sortedArray);