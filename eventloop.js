//

// function a(){
//     console.log("a");
// }
// a();
// comsole.log("End");

// console.log("start");
// setTimeout(function cb(){
// console.log("callbacks");
// },5000);
// console.log("End");

// const radius  = [3,1,2,4]
// const calculateArea = function (radious){
//     const output = [];
//     for (let i = 0;  i<radius.length; i++){
//         output.push(2*Math.PI*radius[i]*radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius));

// hosting rules is not defined on literals and constant 
// function fruit(){

//       console.log(fname);
//       console.log(price);

//  var fname = "apple"
//  let price = 20;
// }

// fruit()


// for (var i=0; i<3; i++){
//     setTimeout(()=>
//        console.log(i)
//     )
// }

// for(let i=0; i<5; i++){
//     setTimeout(()=>console.log(i));
// }

// console.log(+true)
// console.log(typeof +true)  //number

// console.log(!"anilr")    //false
// console.log(typeof ("anilr")) //string

// let data = "size";
// const bird = { 
//     size : "small"
// }
// console.log(bird["size"])  //small
// console.log(bord.size)   //small
// console.log(bird[data])   //small
// console.log(bird.data)    //undefined

//  whenever we using object  it will bacally used referenced type  so if we do the copy od c into d then both indicate the same memory location
//so if we change the c its refelect on the d also

// let c = {
//     name : "peter"    
// }
// let d ;
// d = c;
// c.name = "devang";
// console.log(d.name);  //devang

// const sum =  eval('10*10+5')
// console.log(sum);  //105

// sessionStorage.setIteam('cool_secret',123);
//its is work automatically removed when closed the browser(tab)

// const obj = { 1:"a",2:"b",3:"c",4:"d"}
// obj.hasOwnProperty("1");  //a
// obj.hasOwnProperty(1);   //a


// const obj  = { a:"one",b:"two",a:"repeate"}
// console.log(obj)  //1:repeate 2:two


// <div>
//     <div onclick="console.log('first div')">
//         <div onclick="console.log('second div')">
//             <button onclick="console.log('button')">
//                  Click Me
//             </button>
//         </div>
//     </div>
// </div>


// const person  = {name:"lydia"};
// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21)); // lydia is 21
// console.log(sayHi.bind(person,21));  // function{...}
// console.log(sayHi.bind(person,21)());  //lydia is 21

// function sayHi(){
//     return (()=>0)();
// }
// console.log(sayHi()) //0
// console.log(typeof sayHi()) //Number

// const numbers = [1,2,3,4]
// numbers [6] = 12;
// console.log(numbers)

// const numbers = [1,2,3,4];
// numbers [4]= numbers;
// console.log(numbers);

// console.log(!!null) //false
// console.log(!!"")  //false
// console.log(!!1)   //true

// let data = [1,2,3,4].map(num=>{
//     if(typeof num === 'number') return;
//     return num*2;
// });
// console.log(data)
//empty return in javascript is undefined


// function getInfo(member){
//     member.name = 'Anil'
// }
// const person = {name:"devang"};
// getInfo(person)
// console.log(person) //anil

// function Car(){
//     this.make = 'tata';
//     return {make:'kia'}
// }
//  const myCar = new Car();
//  console.log(myCar.make);

// let and const is variable , constant
 










