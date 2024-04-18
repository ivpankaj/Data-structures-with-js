// The splice() method of Array instances changes the contents of an array
//  by removing or replacing existing elements and / or adding new elements in place.

//Remove 1 element at index 2, and insert "trumpet"
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// removed is ["drum"]
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
console.log(myFish)


