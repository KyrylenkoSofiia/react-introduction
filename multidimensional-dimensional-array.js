function getDismensionalArray(arr) {
    const flattetArr = arr.flat(Infinity);
    return flattetArr;
}

getDismensionalArray([1, 2, [3, 4, [5]]]);
