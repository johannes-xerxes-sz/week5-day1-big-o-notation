const performance = require('perf_hooks').performance;

const arr1 = [2, 3, 1, 5, 20, 10, 7, 19, 6, 11, 4, 8, 19, 9, 12, 13, 18, 17, 16, 14, 15 ];

// Option A

const pushNumberToArray1 = (arr, num) => {
    const lastIndex = arr.length -1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            arr.splice(lastIndex, 0 , num);
        }
    }
    return arr;
}

// Option B

const pushNumberToArray2 = (arr, num) => {
    return arr.push(num);
}

    const t0 = performance.now()
    pushNumberToArray1(arr1, 21);
    const t1 = performance.now();
    console.log(`Time to complete: ${(t1-t0)/1000}`);

    const t2 = performance.now()
    pushNumberToArray2(arr1, 21);
    const t3 = performance.now();
    console.log(`Time to complete: ${(t3-t2)/1000}`);

// Constant Time Complexity O(1);

// ex 1
// arr1.push(1)

// const get index
// arr1.indexOf(3)

// ex 3
// const twoSum = (num1, num2) => {
//     return num1 + num2
// }

// Log Time Complexity O(log n)

/* const logTime = (arr) => {
    let numberOfLoops = 0;
    for (let i = 1; i<arr.length; i*=2) {
        numberOfLoops++
    }
    return numberOfLoops
}

console.log(logTime(arr1))
 */
// Linear Time Complexity O(n)

//ex 1 
/* for(let i = 0; i < arr1.length; i++) {
    console.log(arr[i])
}
 */
//ex 2
/* while(arr1.length < 10) {
    console.log(arr1)
}
 */
//ex 3
// arr1.forEach(num => console.log(num));

//ex 4
// arr1.map(num => num * 2)

//ex 5
// arr1.find(num => num < 10)

//ex 6
// arr1.filter(num => num !== 3)

// Quadratic Time Complexity O(n^2)

//ex 1
for (let i = 0; i < arr1.length; i++){
    for (let j = 1; i < arr1.length; j++){

    }
}

//ex 2
for (let i = 0; i < arr1.length; i++){
    const newArr = arr1.map(num => num * 2)
}

//ex 3
for (let i = 0; i < arr1.length; i++){
    for (let j = 1; i < arr1.length; j*=2){

    }
}

// factorial Time Complexity O(n!)

const factorial = (n) => {
    let num = n; // num = 5 (sample)
    if (n === 0) return 1;
    for (let i = 0; i < n; i++) {
        num = n * factorial(n -1); // num = 5 * 4 * 3 ...
    }
    return num;
}
console.log(factorial(5))

/* const doSomething1 = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {

    }
    for (let j = 0; i < arr1.length; j++) {
        
    }
    
} */

/* const doSomething2 = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {

    }
    for (let j = 0; i < arr1.length; j++) {
        
    }
    
} */

// consolidating time complexity

/* const someFunction1 = (arr1) => {
    let sum = arr1[1] + arr1[2];
    while (condition) {
        sum = arr1[5] + arr[6]
    }
    for (let i = 0; i < arr1.length; i++){
        for (let j = 1; i < arr1.length; j++){
    
        }
    }
} */
/* 
const someFunction2 = (arr1) => {
    arr1.push(1).pop() //1
    
    for (let j = 1; i < arr1.length; i++) { // n

    }
    for (let j = 1; i < arr1.length; i++) { // n
        
    }
    for (let j = 1; i < arr1.length; i++) { // n^2 +  n^2 +  n^2
        for (let j = 1; i < arr1.length; i++) { //
            for (let j = 1; i < arr1.length; i++) {
        
            }
        }   
    }
} */

// 1 + n + n + n^3

// space complexity

// constant space O(1)
/* 1
true
undefined
null */

//linear space O(n)
/* 'this is a text'
[1,2,3]
const object = {
    name: 'Tony'
} */

//inserting
// object.age = 44; // constant O(1) - Time complexity

//delete
// delete object.age // contant O(1) - Time complexity

// searching 
/* object.hasOwnProperty['name'] // linear O(n) - time complexity

for ( const prop in object) {
    console.log(object[prop]) // linear O(n) - time complexity
}
 */
//accessing
// object.age // 44 // contant O (1) - time complexity

//retrieve keys
// Object.keys(object) // linear O(n) - time complexity

const arr2 = [1, 2, 3, 4, 5]

//inserting 1
arr2.push(6) // time complexity - O(1)

//inserting 2
arr2.unshift(6) // time complexity of - O(n)

//removing 1
arr2.pop() // time complexity - 0(1)

//removing 2
arr2.shift() // time complexity - 0(n)

// searching
const findNumber = arr2.find(num => num === 2) // time complexity - O(n)

//retrieving
const getNumber = arr2[4] // time complexity - O(1)

//splice
arr2.splice(1,1,5) // time complexity - 0(n)

//reduce
arr2.reduce((total, num) => total + num, 0) //time complexity - O(n)