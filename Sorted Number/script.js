function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

const numbers = [5, 2, 8, 9, 3, 8, 1, 2, 7, 4, 6];
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers);