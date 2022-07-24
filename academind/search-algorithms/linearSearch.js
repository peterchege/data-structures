// linear search algorithm is a search algorithm that goes through all the elements of an array and checks if the element is equal to the searched element.

function findElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

const arr = [5, 3, 10, -10, 33, 51];


console.log(findElement(arr, 10));




//Using map of object function to find the index of the element

function findElement2(arr2, element) {
    let index = 0;
    for (const item of arr2) {
        if (item == element) {
            return index;
        }
        index++;
    }
}


const arr2 = [20, -30, 10, 50, -60, 70];


console.log(findElement2(arr2, 70));



// javascript inbuilt functions

console.log(arr2.findIndex((e) => e % 70 == 0)); // returns the index of the element that is divisible by 70
console.log(arr2.find((e) => e % 70 == 0)); // returns the element that is divisible by 70