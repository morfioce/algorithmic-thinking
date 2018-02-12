var swap = function(array, firstIndex, secondIndex) {
  let len = array.length
  let validFirstIndex = firstIndex > -1 && firstIndex < len;
  let validSecondIndex = secondIndex > -1 && secondIndex < len;

  if (validFirstIndex && validSecondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }
};

let indexOfMinimum = function(array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  let minValue = array[startIndex];
  let minIndex = startIndex;

  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:

  return minIndex;
};

var selectionSort = function(array) {
  // you code goes here
};
