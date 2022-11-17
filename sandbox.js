/* implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in 
the array. There can be negative numbers in the array, but 
it will always be sorted */


const countUniqueValues = (arr) => {
    if (!arr.length) return 0;
    let i = 0;
    for ( let j = 1; j < arr.length; j++) {
        if ( arr[i] !== arr[j]) {
            console.log(`BEFORE j = ${j}, when i = ${i}, and when arr[1] ${arr[i]}`)
            i++;
            console.log(`DURING j = ${j}, when i = ${i}, and when arr[1] ${arr[i]}`)
            arr[i] = arr[j];
            console.log(`AFTER j = ${j}, when i = ${i}, and when arr[1] ${arr[i]}`)

        }
    }
    // return i + 1 to account for the index position of i
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
