function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: if array has 0 or 1 element, it's already sorted
    }

    const pivot = arr[0]; // Choose the first element as the pivot
    const left = [];
    const right = [];

    // Partition the array into two sub-arrays: elements less than pivot and elements greater than pivot
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right sub-arrays
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [6, 3, 8, 2, 9, 1, 5, 7, 4];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//chatgpt solutionn 
