const array = [12,24,25,63,89];
let length = array.length;


function binarySearch(arr,target){
    let start = 0;
    let end = array.length-1;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid]==target){
            console.log(`element fount at ${mid}`)
            return ;
        }
        else if(target>array[mid]){
            start = mid+1;

        }
        else{
            end = mid-1;
        }
       
    }
    console.log("not found")
}
binarySearch(array,67)


//completed 
