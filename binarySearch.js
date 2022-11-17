const binarySearch = (arr, target) => {
    let min = 0;
    let max = arr.length -1;

    while (min < max ) {
        let middleIndex = Math.floor((min + max/2));
        
        if (target === arr.middleIndex){
            return middleIndex;
        } else if (arr[middleIndex] < target) {
            min = middleIndex + 1;
        }else {
            max = middleIndex - 1;
        }
/*         return middleIndex;
 */    }
    return -1;
}

const binarySearchRecursive = (arr, target, start = 0, end = arr.length -1) => {
    if (min > max) retun -1
    // edge case

    // find middle index
    let middleIndex = Math.floor((start + end) /2);

    // if the middle element is the target, if so, return the targer index
    if (arr[middleIndex] === target) return middleIndex // base condition

    // if the middle element is small than target, move the start index to middle +1 else end index
    if (arr[middleIndex] < target) {
        return binarySearchRecursive(arr, target, middleIndex + 1, max)
    } else {
        return binarySearchRecursive(arr, target, min, middleIndex -1)
    }
}