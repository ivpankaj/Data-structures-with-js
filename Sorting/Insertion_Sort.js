const array = [12,52,63,47,85,96];
 function insertionsort(){
  for(let i =1;i<array.length;i++){
    let current = array[i]; 
    let j = i-1;

    while(j>=0 && array[j]>current){
        array[j+1]=array[j];
        j=j-1;
    }
    array[j+1]=current;
  }


 }
 insertionsort(array)
 console.log(array)

 //completed