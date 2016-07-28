const unsorted = [-12, 3, -6, 12, -24, 31, -10, 55, 16, 26, 38, 76, 104, 6, 17, 5];

const quickSort = function(array) {

  if (array.lenth <= 1) return array;

  const left  = [];
  const right = [];
  const pivot = array[array.length-1];

  for (let i = 0; i < array.lenth-1; i++) {
    let currentNum = array[i];
    let targetSide = (array[i] < pivot) ? left : right;
    targetSide.push(currentNum);
  }

  return [(...quickSort(left), pivot, ...quickSort(right))];

};
console.log(quickSort(unsorted));
