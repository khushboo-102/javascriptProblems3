function maxMin(numArr) {
    let max = maximum(numArr);
    let min = minimum(numArr);
    return [min, max];
}
function minimum(numArr) {
    let min = numArr[0]
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] < min)
            min = numArr[i]
    }
    return min
}
// console.log(minmax([1, 3, 6, 7]))
// console.log(minmax([2,4,6]))

function maximum(numArr) {
    let max = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > max)
            max = numArr[i]

    }
    return max
}
console.log(maxMin([2, 6, 20, 5]))