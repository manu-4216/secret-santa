let arr;

const getRandomIntegerBetween = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

// Swap 2 elements of an array, using their index
const swap = (arr, i, j) => {
  let aux = arr[i];
  arr[i] = arr[j];
  arr[j] = aux;
};

module.exports = initialArr => {
  arr = [...initialArr] // copy the array, to avoid mutating it
    .filter(item => item.email !== ''); // and filter out the items with empty email
  pairs = [];

  const n = arr.length;
  let j;

  // Modern verion of the Fisher–Yates shuffle, introduced by Richard Durstenfeld:
  // source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  for (let i = 0; i <= n - 2; i++) {
    j = getRandomIntegerBetween(i, n - 1);
    swap(arr, i, j);
  }

  // Now that the array has been shuffled, return neighbour pairs
  for (let i = 0; i <= n - 2; i++) {
    pairs.push([arr[i], arr[i + 1]]);
  }

  // For the last pair, the last item will be paired with the first one:
  pairs.push([arr[n - 1], arr[0]]);

  return pairs;
};
