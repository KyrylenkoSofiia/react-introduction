function removingDuplcatesFromArray(arr) {
    const withoutDuplicates = arr.reduce((acc, item) => (acc.indexOf(item) === -1) ? [...acc, item] : acc, []);
    return withoutDuplicates;
}

removingDuplcatesFromArray([1, 2, 3, 4, 5, 4, 15, 2, 3]);
