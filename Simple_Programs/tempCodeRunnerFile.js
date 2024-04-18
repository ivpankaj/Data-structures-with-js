let string = 'pankaj';
let start =0;
let end = string.length;
let result = true;
function palindrome(string){
  while(end>start){
    if(string[start]!=string[end]){
        result = false;

        start++;
        end--;
    }
  }
}

palindrome(str)
console.log(palindrome(string))