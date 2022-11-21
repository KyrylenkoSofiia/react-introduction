function getSumOfSquares(arr) {
    return arr.reduce((acc, next) => acc += Math.pow(next, 2), 0)
}

getSumOfSquares([1, 2, 3, 4, 5]);
