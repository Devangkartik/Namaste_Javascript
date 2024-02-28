/*let promise = new promise(function(resolve,reject){
  alert("hello")
  resolve(56)
})

console.log("hello")
settimeout(function(){
  console.log("hello two in 2 seconds")
},2000)
console.log("My mname is"+"HELLOWORLD");
console.log(promise)*/
/*
Example os syncronous programing
let a = prompt('what i syou name')
let b = prompt("what is yuor age")
let c= prompt("what is your favorit colr ");
console.log(a+" is "+" years old and age "+c+" is your favorit coleor");*/
/*console.log("start")
setTimeout(function(){
  console.log ("hey i am good")
},3000)
console.log("end")*/
//colbacks
/*
function loadScript(src){
  var script = document.creatElement("script");
  script.src;
  document.body.appendChild(script);
}
*/
/*
let p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("resolve aftre two second")
    resolve(56) 
  })
})
p1.then((value)=>{
  console.log(value)
  let p2 = new Promise((resolve,reject)=>{
    resolve("promises 2")
  },2000)
  return p2
}).then((value)=>{
  console.log("we are done")
  return 2
}).then(()=>{
  console.log("we are pakka done")
})
*/
// const a = [12,34,56,47,78]
// a.forEach(4,)


//  function greet(name){
//     console.log(name+" is the good boy");
// }
//      let name="nitin";
//      let name2="vansh";
//      let name3="satyam";
//      let name4="aarush";

//     greet(name);
//     greet(name2);
//     greet(name3);
//     greet(name4);

// console.log(name1+" is the good boy");
// console.log(name2 +"is the good boy");
// console.log(name3 +" is the good boy");
// console.log(name4+ "is the good boy");

//alert in browser in javascript -does not return anything
// alert("this is the massege");

// let a = alert("this is the massege");
// console.log(a);

// let name1 = prompt("what is your name ?","Guest")
// console.log(name1);
// let age = prompt("what is your age");
// if(age>18){
//     console.log("you are elegeable to use this browser");
// }else{
//     console.log("you can't use this browser");
// }

// let deletPost = confirm("Do you relly want to use this browser");
// console.log(deletPost);
 
// alert("Please go back ,this is dengerous for you !");

//loops is started in javascript 
//print the table any given number

// let num = parseInt(prompt('Enter the number which you want to print table'));

// for(let i=1; i<=10; i++){
//         console.log(num+' * ' +i+ ' = '+ num*i)
// }

// let friends = ['Devang','kanchani','kaveri','vansh','aarayan'];
// for (let i = 0; i < friends.length; i++) {
//         const element = friends[i];
//         console.log("hello friends  "+friends[i]);
// }

// let friends = ['Devang','kanchani','kaveri','vansh','aarayan'];
// friends.forEach(function f(element){
//         console.log("Hello Friend,"+element)
// });

// let friends = ['Devang','kanchani','kaveri','vansh','aarayan'];
// for(element of friends){
//         console.log("Hello friend "+element+" welcome to code with harry");
// }

// let student = {
//         name : "Devangkartik",
//         course:"BCA",
//         age : 20,
//         fees:3200,
//         Library : books={
//                 1 : "Java",
//                 2 : "python",
//                 3 : "Element of statics"
//         }    
// }

// for(key in student){
//         console.log(`the ${key} of student is ${student[key]}`);
// }

// let num = 0;
// while(10>num){
//         console.log(num);
//         num++;
// }


















