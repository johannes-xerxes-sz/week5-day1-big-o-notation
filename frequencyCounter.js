/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/


const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let num of arr1) {
        // Push the values to obbject with the count of the occurence
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
        console.log(` arr1 after ${num}`)

    }
    for (let num of arr2) {
        console.log(`arr2 before ${num}`)
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
        console.log(`arr2 after ${num}`)

    }

    for (let key in frequencyCounter1) {
        // check if the key value is the squared value
        if(!(key ** 2 in frequencyCounter2)) { // or key * key
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
console.log(same([1,2,3], [4,1,9])) // true
/* same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency) */