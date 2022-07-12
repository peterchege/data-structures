
 
// Javascript program for the above approach
 
// Function to find the winner
function findWinner(N)
{
      
    // Stores the count of 1s
    let onesBeforeZero = 0, flag = 1, j = 0;
      
    let binString = [];
      
    // Converting N into a binary string
    for(let i = 31; i >= 0; i--)
    {
        let temp = N >> i;
          
        if ((temp & 1) == 1)
            binString[j] = "1";
        else
            binString[j] = "0";
              
        j += 1;
    }
  
    for(let i = 0; i < 32; i++)
    {
        if (binString[i] == "1")
          
            // If 1 is encountered
            // increment ones count
            onesBeforeZero += 1;
        else
        {
              
            // If 0 is encountered check
            //if ones count is odd
            if ((onesBeforeZero & 1) == 1)
            {
                  
                // If ones count is odd winner
                // is A break
                console.log("A");
                flag = 0;
                break;
            }
            else
              
                // If ones count is even
                // reset it to 0 and continue
                onesBeforeZero = 0;
        }
    }
      
    // If entire loop is traversed
    // without breaking, then
    // B is the winner
    if (flag == 1)
        console.log("B");
}
     
// Driver code
let N = 4;
  
// Function Call
findWinner(N);
 
// This code is contributed by code_hunt
 
