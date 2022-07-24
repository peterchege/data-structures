// quick sort algorithm example

function sort(arr) { 

    const copiedArr = [...arr];
    console.log('FUNCTION STARTING');
    console.log(arr);

    if (copiedArr.length <= 1) { 
        console.log('ONLY ONE ITEM - RETURNING');
        console.log(copiedArr);
        return copiedArr;
    }

    const smallElementArr = [];
    const biggerElementArray = [];
    const pivotElement = copiedArr.shift();
    const centerElementArr = [pivotElement];

    while (copiedArr.length) { 
        currentElement = copiedArr.shift();

        if (currentElement === pivotElement) {
            centerElementArr.push(currentElement);
        } else if (currentElement < pivotElement) {
            smallElementArr.push(currentElement);
        } else { 
            biggerElementArray.push(currentElement);
        }
    }

    console.log('AFTER WHILE');
    console.log(smallElementArr);
    console.log(centerElementArr);
    console.log(biggerElementArray);

    const smallElementArrSort = sort(smallElementArr);
    const biggerElementArraySort = sort(biggerElementArray);

    return smallElementArrSort.concat(centerElementArr, biggerElementArraySort);

}


const sortedArr = sort([-5, 10, -30, 40, -30, 5, -4]);

console.log(sortedArr);