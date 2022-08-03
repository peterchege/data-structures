// with repetitions

function getPermutations(options, length) {
  const permutations = [];

  if (length === 1) {
    return options.map((option) => [option]);
  }

  const partialPermutations = getPermutations(options, length - 1);
  console.log('Initial Partial Permutation ==>', partialPermutations);

  console.log('OPTION BEING CALLED');
  console.log('Initial Options ==>', options);

  for (const option of options) {
    for (const partialPermutation of partialPermutations) {
      permutations.push([option].concat(partialPermutation));
    }
  }

  return permutations;
}

const digits = [1, 2, 3];
const resultLength = 3;

console.log(getPermutations(digits, resultLength));
