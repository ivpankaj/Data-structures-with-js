function mergeSort(array) {
  //base case
  if (array.length <= 1) {
    return array;
  }
  //take a middle
  let mid = Math.floor(array.length / 2);
  //left subarray
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  let sortedarray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedarray.push(left.shift());
    } else {
      sortedarray.push(right.shift());
    }
  }
  return [...sortedarray, ...left, ...right];
}

const array = [12, 45, 85, 96, 32, 54, 65];
mergeSort(array);
console.log(mergeSort(array));

//done by me
