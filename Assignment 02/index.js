// 01. Function(calculateDifference) that takes two arguments and returns difference between the first and second arguments.
function calculateDifference(num1, num2) {
    return num1 - num2;
}
console.log(calculateDifference(10, 5));      // Output: 5
console.log(calculateDifference(3, 7));      // Output: -4


// 02. Function(isOdd) that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(2));      // Output: true (3 is odd)
console.log(isOdd(8));     // Output: false (4 is not odd)

// 03. Function(findMin) that takes an array of numbers and returns the smallest number from the array.
function findMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    return Math.min(...numbers);
}
console.log(findMin([3, 1, 4, 1, 5, 9]));       // Output: 1
console.log(findMin([-10, -20, 0, 5, 10]));    // Output: -20


// 04. Function(filterEvenNumbers) that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array of numbers.");
    }
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([81, 42, 23, 64, 5]));     // Output: [42, 64]
console.log(filterEvenNumbers([17, 51, 83]));           // Output: []


// 05. Function(sortArrayDescending) that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array of numbers.");
    }
    return [...numbers].sort((a, b) => b - a);
}
console.log(sortArrayDescending([-10, 20, -30, 40]));    // Output: [40, 20, -10, -30]


// 06. Function(lowercaseFirstLetter) that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello World"));    // Output: "hello world"


// 07. Function(findAverage) that takes an array of numbers and returns the average of all elements.
function findAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));      // Output: 3


// 08. Function(isLeapYear) that takes a year as an argument and returns true if the year is a leap year, and false if it is not
function LeapYear(input) {
    const year = parseInt(input);
    const isLeap = isLeapYear(year);
    console.log(`${year} is ${isLeap ? "" : "not "}a leap year.`);
}

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}
LeapYear("2020");            // Output: 2020 is a leap year.
LeapYear("1900");            // Output: 1900 is not a leap year.
LeapYear("2000");            // Output: 2000 is a leap year.
LeapYear("2023");            // Output: 2023 is not a leap year.