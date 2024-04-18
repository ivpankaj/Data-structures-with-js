const array = [12,45,63,96,85,74,];

function bubblesort(array){
    let n = array.length;
    for(let i=0;i<n-1;i++){
        for( let j=0;j<n-i-1;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j]= array[j+1];
                array[j+1]= temp;
            }
        }
    }

    return array;


}
bubblesort(array)
console.log(bubblesort(array));

//done by me