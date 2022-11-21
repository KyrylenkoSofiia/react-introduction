function arrayComparison(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])) return true;

  return false;
}

arrayComparison([1, 2, 3], [1, 2, 3]);
