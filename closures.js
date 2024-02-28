// function x(){
//     var i = 1;
//     for( i=1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
//  }
//     console.log("nameste javascript");
// }
// x()

const { Declaration } = require("postcss")


// function outest(){
//     var c = 20; 
//     function outer(b){

//         function inner(){
//           console.log(a,b,c)
//         }
//         let a  = 10;
//         return inner;
//     }
//     return outer;
// }
// var close = outest()("Hello DevangKartik !")
// close()


// function counter(){
//     var count = 0;
// function incrementCounter(){
//     count++;
//     console.log(count);
//     }
// }
// // console.log(count);
// var counter1 = counter();
// counter1();
// counter1();
// counter1();


// function Counter(){
//     var count = 0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter() = function(){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();
// counter1.decrementCounter();
// counter1.decrementCounter();

// Function Statement is also known as function Declaration
// function a(){
//     console.log("Hello World");
// }
// a()
// // Function Expression
// var b = function (){
//     console.log("Nameste javascript");
// } 
// b()
// Function Declaration

// Annonymouns Function
// function () {

// }
// Named Function Expression Difference between parameter and argument
// function name(params) {}

// First class Function
// Arrow Function 

// let and const is the part of es6
// let makes variable and const makes constant
// let and  const is similar in few things like they are block scoped
// they are added to himself in window object

//arrow function is three types: functions Expression , function statement , annonymous function
 //simple fat arrow function
//  var func = ()=>{}

 //fat arrow function with one parameter 
//  var sum = (value1,value2) => {let c = value1+value2 ; return c}; sum(12,13)
// var sum = value => { return value}; sum(12)

 //fat arrow function with emplicite return : where function is called their we received the actual value of return 
// var  g = ( ) => 12; console.log( g() );

// template literals backticks : whenever we add a number with string then its become a string 
// console.log("sum of "+4+" and "+2+" is "+4+2);
// console.log(`sum of ${4} and ${2} is ${4+2}`);

// default parameter : we set value of parameter is called default parameter
// function abcd(a=0,b=0,c=0){
//     console.log(a+b+c);
// }
// abcd(1,23,12);
// abcd(32.21);
// abcd(2);


// spread : is used to copying the value of arary or to spread the value into the another location
// var a = [1,3,4,5,6,7,8]
// let b = [...a];
// console.log(b)

//rest : is used to except numbers of values store in one variable we used rest
// function abcd(a,b,c,...d){
// console.log(a,b,c,d)
// }
// abcd(1,2,3,4,5,6,7,8,9)

//destructuring : to getting the data inside the array and object
// var a = [1,2,3]
// var [b,,c] = a;
// var [b,c,d,e] = a;

// var obj = {name:"Devang kartik",age:24}
// var {age} = obj;


//promises: if we have promises then we get to possible results 1)resolve(.then()) 2)reject(.catch()) one extra is 3)pending
// promises have a function inside it 

// var ans = new Promise((res,rej)=>{
//     if(true){
//         return res();
//     }else{
//         return rej();
//     }
// })

// ans
// .then(()=>{
//     console.log("resolve ho gya ")
// })
// .catch(function(){
//     console.log("reject ho gya ")
// })


// var ans = new Promise(function(res,rej){
//    var num = Math.floor(Math.random*10);
//    if(num<5){
//     res();
//    }else{
//     rej();
//    }
// })

// ans
// .then(()=>{console.log("below")})
// .catch(()=>{console.log("above")})


// var ans = new Promise(function(res,rej){
//   return res("sabse phale ghar par aaoo")
// })

// var ans2 = ans.then((data)=>{
//     console.log(data);
//   return  new Promise((res,rej)=>{
//     return res("gate kholo aur andar aaoo");
//   })
// })
// var ans3 = ans2.then((data)=>{
//     console.log(data);
//     return Promise((res,rej)=>{
//         return res("khana khaoo aur soo jaoo");
//     })
// })

// ans3.then((data)=>{
//     console.log(data)










