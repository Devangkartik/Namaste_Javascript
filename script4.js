// javascript was the browser creat to make web pages SpeechRecognitionAlternative
// js can be written right in a web page html make it interactive.
// javascript alridy in the browser is very limited to protected the user saftely  for example a webpage 
// on https://goofle.com cannot access http//codeswear.com and steal imformation is their

//image.html Embaded file

// var myname = "vishvjit";
//  myname = "tom";
//  console.log(myname);

//normal function
// function sayName(myname){
//     console.log(myname);
// }
// sayName("devangkatrik")

//arrow function
// let sayName = myName =>{
//     return myName;
// }
// console.log(sayName("Devangkartik"));

// let sayName = Myname => Myname;
// console.log(sayName("DEvangkartiksuryavanshi@gamil.com"));

// let double = num1 => num1*2
// console.log(double(10));


//Export and Import(Moduls);

// const person ={
//     Student : "Devangkartik",
//     Fname : "Murlidhar",
//     Mname:"Aarti",
//     course:"BCA",
//     Rollno:20,

// }
//  import {address} from './script5.js';
// // console.log(type(person));
// // console.log(person);
// console.log(address());

//class and object
// class coustomer{
//     constructor(n){
//         this.name = n;
//     }
// age = 25;

//  carry = () =>{
//     console.log("Nameste");
//  }
//     buy(){
//         // console.log("Hello...");
//         console.log(this.name);
//     }
// }

// let coustomer1 = new coustomer("Devangkartik");
// console.log(coustomer1);
// coustomer1.buy();


// class GuestCustomer extends coustomer{
//     hello(){
//         console.log("hello khushi I love You")
//     }
// }

//spread and rest operator(...)

// let list = ["audi","honda","bmw"];
// // let newList = [...list,"farrari"];
// let newList = ["farrari",...list];

// console.log(newList);


// let person = {
//     myName : "denamgkartik",
//     age : 20,
//     course:"Bca"
// }
// let newPerson = {
//     ...person,
//     city:"kanpur",
//     collage:"VSCMS"
// }

// console.log(newPerson);

// function hello(...all){
//     console.log(all)
//  }
//  hello(1,2,3,4,5,6,7,8,9);

// function hello1(a,b,c){
//    console.log(a);
// }
// hello1(1,2,3);

// Array destructuring
//  let list = ["honda","odi","farriri","thar","pulser"];
//  let [car1, ,car2,car4,car5] =list;
//  console.log(car5)
// console.log(list[3])

//object Destructring
// const person ={
//     Myname : "devangkartik",
//     age:20,
//     course:"bce",
// }

// let{Myname,age,course} = person;
// console.log(age);


//refrence type(array,object) and primitivetype(number,string)

// let num1=100;
// let num2 = num1;
// num2 = 50;
// console.log(num1);
// console.log(num2);


// let person ={
//     myName:"Devangkartik",
//     age:20,
//     course:"sorry",
//     collage:"VSCMS",
// }
// // person2 = person;

//  let  person2={
//     ...person
//  };

// person2.myName="Ajit";
// console.log(person);
// console.log(person2);


//map function

let array1 = [1,2,4,5,6,7,8,9]

// let array2 =array1.filter(x => x%2 == 0 ? x:null)
let array2 =array1.filter(x => x%2 == 0)

// let array2 = array1.filter(function(num){
//     if(num%2 == 0){
//         return num;
//     }
// })

//let array2 = array1.map(x => x*2)

// let array2 = array1.map(function(num){
//     return num*2;
// });

console.log(array1);
console.log(array2);