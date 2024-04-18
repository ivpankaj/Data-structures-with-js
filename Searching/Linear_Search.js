let array = [12, 45, 63, 78, 15, 6]
let length = array.length;
let found = true;
let index = 78;

for (let i = 0; i < length - 1; i++) {
  if (index == array[i]) {
    console.log(`element found at index ${i}`)
  }
     found = false;

}
if (!found) {
  console.log("element not found")
}

//not done


