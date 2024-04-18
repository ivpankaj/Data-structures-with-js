let found = false;

function linearSearch(arr, target) {
  for (let i = 0; i < length; i++) {
    if (target == arr[i]) {
      console.log(`element found at ${i}`);
      found = true;
    }
  }
  if(!found){
    console.log("not found")
  }
}

let array = [12, 45, 63, 89, 74];
let length = array.length;

linearSearch(array, 89);
//done
