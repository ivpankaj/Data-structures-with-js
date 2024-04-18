const array = [12,45,63,98,48];3

function selectionsort(){
    let minvalue ;
    for(let i =0;i<array.length;i++){
        minvalue = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minvalue]){
                minvalue = j;
            }
        }

        let temp = array[minvalue];
        array[minvalue]=array[i];
        array[i]=temp;
    }
}
selectionsort(array)
console.log(array)

//completed