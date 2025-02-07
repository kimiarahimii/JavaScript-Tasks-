function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}


//test
const inputArray = [1, 2, 3, 3, 7, 4, 5, 9, 6, 7, 8, 12, 9, 10];
const evenNumbers = filterEvenNumbers(inputArray);
console.log(evenNumbers);