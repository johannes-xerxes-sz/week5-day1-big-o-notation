// example 1:

// iterative method

const factorialIterative = (num) => {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

// 5 * 4 * 3 * 2 * 1

const factorialRecursive = (num) => {
    // base case
    if (!num) return 1;
    return num * factorialRecursive(num-1)
}

// 5 * 4 * 3 * 2 * 1

// Problem: Given an array of numbers, return a new array with just odd numbers
const arr1 = [1,2,3,4,5,6,7,8,9,10]

const collectOddValues = (arr) => {
    let newArr = [];

    if (!arr.length) return newArr;

    if(arr[0] % 2 !== 0) newArr.push(arr[0])

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr;
}