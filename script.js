/*
var a = 8;
var b = 2;
console.log(a&b);
console.log(a|b);
console.log(a^b);console.log(~a)
*/

//const num1 = 5;
//const num2 = 6;
//add two numbers
//console.log("the sum of "+ num1 +" and " + num2 + " is : "+num1+num2)
/*
const num1 = parseInt(prompt("Enter the firts number : "));
const num2 = parseInt(prompt("Enter the second number : "));
 const sum = num1 +num2;
console.log('the sum of numbers ${num1} and &{num2} is ${sum}');
*/
/*
let a = 100;
let b = 20;
console.log("a+b is "+(a+b));
//multiplication
console.log(" a*b is "+a*b);
//divide
console.log(" a/b is "+a/b);
//reminder
console.log(" a%b is "+a%b);
*/
/*
console.log("hello"+"world");
let a = 'javaScript';
a += ' tutorial';
console.log(a);
*/
/*
//logical AND
console.log(true && true);
console.log(true && false);
//logical OR
console.log(true||false);
console.log(false||false);
//logical NOT
console.log(!false);
*/
/*
let marks = prompt("Enter the exam  mark : ");
let results = (marks<=40)? 'fail':'pass';
console.log('you '+results+' the examnation.');
*/
/*
let age = prompt("Enter the numbers :")

let check = (age<18)?"Not elegible for vote ":"eligible for vote ";

console.log(check);
*/
/*
let a = prompt("Enter the first number : ");
let b = prompt("Enter the second number :");

let oprator = prompt("Enter  the  operator :");

switch(oprator){

  case `+`:
    console.log("the sum of number : "+(a+b));
    break;
  case `*`:
    console.log("multyply of two numbers :"+(a*b));
    break;
  case `-`:
    console.log("substraction of two numbers :"+(a/b));
    break;
  case `/`:
    console.log("multiplication of numbers :"+(a/b));
    break;
  default:
    console.log("Enter the write operator : TRY AGAIN ");
    break;
}*/
/*
let  num = prompt("Enter the number:");
let string = "";
for(let i=1; i<=num; i++){
    for(let j=1; j<=i; j++){
    string +="*";
  }
  string +="\n";
}
console.log(string);
*/
/*
const hey=()=>{
  console.log("mather chod  aaj uthana nhi hai ");
}

let v = hey();
console.log(v)
*/
/*
function my_function(){
  let x= 8;
  let y = 7;
  return x+y;
}
console.log("sum of two numbers "+my_function());
*/
/*
function sum(x,y){
  return x+y;
}
let a=34;
let b=56;
let add = sum(a,b);
console.log("The sum of two nmbers "+add);
//console.log("the sum of two numbers :"+sum(a,b));
*/

/*
//find the factorial of a numbers with the use of functon
let factorial = (num) =>{
  if (num==1)
  return 1;
  else
  return num * factorial(num-1);
  
} 
 let num = 5;
console.log(factorial(num));
*/
/*
let marks = {
  keshav : 45,
  shubham : 90,
  rohit : 70,
  mohit : 60
}
for(let i=0; i<object.keys(marks).length; i++){
  console.log("the marks of "+object.keys(marks[i]+" are "+marks[object.keys(marks)[i]]));
}
*/
/*
let name ="devang";
//console.log(name.length);
let  friend = 'satyam agnohotri';
console .log(friend);
console.log(name[0]);
console.log(name[1]);
*/

/*
//use bactic and dollor
let f1 = "pramode";
let f2 = "rathaur";
//console.log(`${f1} is the friend of ${f2}`);
console.log(f1+" is the friend of "+f2);
*/

//let  fruit = 'bana\'na';
//console.log(fruit);


//string manupulation
/*
let name = "Devang kartik ";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(6,name.length));
console.log(name.slice(0,6));
console.log(name.replace("Dev","Shiv"));
*/

//let str = "mather chod";
//console.log((str)+" "+str.length);

/*
let my_class_bca =[34,56,89,24,"satya","manshi","rehan",true,"Not present"];
console.log(my_class_bca.length);
console.log(my_class_bca[0]);
console.log(my_class_bca[3]);
console.log(my_class_bca[5]);
console.log(my_class_bca[7]);
console.log(my_class_bca[10]);
*/

//let number1 = [21,32,3,74,59,64,43,91,19];

//let number2= [821,432,23,74,159,264,443,791,919];
//let number3= [21,32,3,74,59,64,43,91,19];

//console.log(typeof(number1));
//let num =number1.toString();
//console.log(typeof(num));

//let c = num.join("_");
//console.log(c);

//delete number[4];
//console.log(number.length);
//console.log(number);
//console.log(number.length);

//let AllArray = number1.concat(number2,number3);
//console.log(typeof(AllArray));
//console.log(AllArray);

/*for printing accending or desidenging order 
we use compare() methode;
 */
/*
let compare = (a,b)=>{
  return a-b;
}
let num = [43,4,12,10,100,67,98,20,54,50,72];
num.sort(compare);
console.log(num);
*/

//delete num[2];
//console.log(num);

//num.sort();  //alphabheticaliy short
//console.log(num);

/*the splice and slice function in javascript  splice 
function is hanve theree argument (start index,num.of delete element,update value) and slice  have three argument (start index,end index ,jumping element )*/
/*
let num = [43,4,12,10,100,67,98,20,54,50,72];
//num.splice(1,3,34,56,78);
//console.log(num);

let deletedValues = num.splice(1,3,34,56,78);
console.log(deletedValues);//print delete values
*/

/*
let num = [43,4,12,10,100,67,98,20,54,50,72];
let viru = num.slice(1,6,2);
console.log(viru);
*/

/*Backticks are generally used when you need to include 
 &{expresion or variable} */

/*
const name1 = "peter";
const name2= "jack";
//const results = `the name are ${name1} and ${name2} both friends `;
// In string treating as array
//console.log(results);
//console.log(name1[4]);
//console.log(name2[3]);
//In string treating as 
console.log(name1.charAt(1));
  console.log(name2.charAt(1));
*/
/*
const a = 'a';
const b = 'A'; 
console.log(a==b);//fales
console.log(a===b);//false
*/
/*
let i = 0;
let num = 5;
do{
  console.log(i);
  i++;
}while(i<=num);
*/

/*
let i = 0;
const num = 5;
while(i<=num){
  console.log(i);
  i++;
}
*/
/*
const string = 'code';
//using for..in loop
for(let i in string ){
  console.log(string[i]);
}*/

/*
const arr = ['hello',1,'javascript',45,'devang'];
for(let x in arr){
  console.log (arr[x]);
}*/

/*
const student = ['ram','sita','laxman','ravan','dhavan'];
//using for of... loop
 for (let element of student){
   console.log(element);
 }
*/