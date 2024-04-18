//done by me 

function quicksort(array){
    //base case 
    if(array.length<=1){
        return array;

    }

    //take a pivot element 
    let pivot = array[0];
    let left = []
    let right =[]

    //push into subarray by comparing to pivot 
    for(let i=1;i<array.length;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }
        else{
            right.push(array[i]);
        }
    }
    return [...quicksort(left ), pivot,...quicksort(right)]
}



const array = [12,45,63,78,96,52,47,69];
quicksort(array)
console.log(quicksort(array))