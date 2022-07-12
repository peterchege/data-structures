function  findSum(numbers,  queries)  {


    let totalSum = [];
    let totalSubArray = [];
    let checkZeroCount = numbers[0] == 0 ? 1 : 0;
    let myZeroArr = [];
    myZeroArr[0] = checkZeroCount
    totalSubArray[0] = numbers[0];
    
    for(let i = 1; i <= numbers.length -1; i++){
        if(numbers[i] == 0){
            checkZeroCount++;
            myZeroArr[i] = checkZeroCount;
        }
        else{
            myZeroArr[i] = checkZeroCount;
        }
        totalSubArray[i] = totalSubArray[i -1] + numbers[i];
    }
    
    for (let query of queries){
        if(query.length == 3){
            let i = query[0];
            let j = query[1];
            let x = query[2];
            
            let mySum = 0;
            
            mySum = totalSubArray[j - 1] - ((i -2 < 0) ? 0 : totalSubArray[i - 2]);
            mySum = mySum + (myZeroArr[j - 1] - ((i - 2 < 0)? 0 : myZeroArr[i -2])) * x;
            totalSum.push(mySum);
        }
        
        return totalSum;
    }

}
console.log(findSum([20, 30, 0, 10], [
  [1, 3, 10]
]))
console.log(findSum([5, 10, 15], [
  [1, 2, 5]
]))
console.log(findSum([0, 10, 15], [
  [1, 2, 5]
]))