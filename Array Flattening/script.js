function flattenArray(arr) {
    return arr.flat(Infinity);
}



const inputArray = [1, 4 [2, [3], 5]];
const result = flattenArray(inputArray);
console.log(result);