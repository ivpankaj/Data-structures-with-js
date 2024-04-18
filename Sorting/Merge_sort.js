function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: if array has 0 or 1 element, it's already sorted
    }

    // Divide the array into two halves
    const middleIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middleIndex);
    const rightHalf = arr.slice(middleIndex);

    // Recursively sort each half
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftHalf, rightHalf) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from the left and right halves and merge them into result
    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
            result.push(leftHalf[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightHalf[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in leftHalf or rightHalf, add them to result
    while (leftIndex < leftHalf.length) {
        result.push(leftHalf[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightHalf.length) {
        result.push(rightHalf[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage:
const array = [6, 3, 8, 2, 9, 1, 5, 7, 4];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//chatgpt