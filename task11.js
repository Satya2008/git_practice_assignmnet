1. find is it prime or not?
let num=13;
let count=0;
for(let i=0; i<=num; i++)
{
if(num%i==0)
{
count++
}
}
if(count==2){
console.log("it is prime num")
}
else{
console.log("it is not prime")
}
2. Given string is palindrome or not?
let str="masai";
let bag='';
for(let i<=str.length-1;i>=0; i--){
bag+=str[i];
}
if(str==bag){
console.log("It is palindrome")
}else{
console.log("It is not palindrome")
}