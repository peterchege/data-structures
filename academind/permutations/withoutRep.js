// without repetitions

function getPermutations(options) {
  permutations = [];

  //   console.log('First active ===>', options);

  if (options.length === 1) {
    return [options];
  }

    partialPermutations = getPermutations(options.slice(1));
  //   console.log('Sliced Options ===>', options);
  //   console.log('The partialPermutations ===>', partialPermutations);

  const firstOption = options[0];
  //   console.log('The firstOption ===>', firstOption);

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i];
        // console.log('The partialPermutation ===>', partialPermutation);
  
        for (let j = 0; j <= partialPermutation.length; j++) {
            const permutationsInFront = partialPermutation.slice(0, j);
            const permutationsAfter = partialPermutation.slice(j);
            permutations.push(
                permutationsInFront.concat([firstOption], permutationsAfter)
            );
        }
    }
  return permutations;
}

const todoListItems = [
  'Walk the dog',
  'clean the toilet',
  'buy groceries',
  'order food',
];

console.log(getPermutations(todoListItems));

// Time complexity: O(n!) => 4 * 3 * 2 * 1
