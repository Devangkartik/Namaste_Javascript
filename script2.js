 /*let num = 3+4
console.log(num)
console.log(num+3)*/

/*
//variable means we can change the value 
let user_name = "devangkartik"
console.log(user_name)
*/

/*
let radious = 5
const pi =3.14
//let pi = 3.14
let area 
pi = 5
area = pi*radious*radious
console.log(area)
*/

/*Datatype :primtive data type (number , string ,Boolean,Bigint) and object. Nothing is difficult it's just unfamiliar  */

/*
let data = 8           //number
let name = "devang"     //string
let num1 = 74368472327665
console.log(typeof(num1*25,+typeof( name), +typeof(data)));
*/

/*
let num = 5/0
console.log(num)
*/

/*
let num = 3274562551427570958945777777777774235n
console.log(num)
*/

/*
let msg ='devang kartik'
let cost = "Suryavanshi"
console.log(msg +" "+ cost)
*/

/*
//let num
let num = null
let num1 = 10 
console.log(typeof num)
console.log(10/"devang")
*/

/*javascript 1990 internet is new  1993 mosaic famous browser , company Netscape is creat a browser which is called netscape navicator
sun microsystem breden Eich make anew language make javascrapet in ten days (Mocha)Livescript after than changed (1995)javascript 
ecma is the yoropiyen  computer comunity 2000 me (netscape make firefox) */

/*
//Type convertion 
let num = String(6)
let num2 = Number("132")
let x
console.log(x,typeof x)
console.log(num2,typeof num2)
console.log(num,typeof num)
*/
/*
console.log(Boolean(2))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean("navin"))
console.log(Boolean(undefined))
*/

/*
let num1 = true
let num2 = true
let result = num1+num2
console.log(result)
*/

/*
let num = 5
let  pow = num**2
let power = Math.pow(num,3)
let results = num*num*num
console.log(results)
console.log(power)
console.log(pow)
*/

/*
console.log(45<67)
let data = 7>6
console.log(6<=6)
console.log(data)
let x = "Devang"
let y = "Aatyamafdhg"
let compare = x>y
console.log(compare)
//type Coercion
 console.log(3==="3")
 console.log(3=="3")
*/

/*
//Coditional operator
let num1 = 45  
let num2 = 99
let num3 = 67
//let result =num1<num2

if(num1>num2 && num1>num3)
    console.log("num1 is greater")
else if(num2>num1 && num2>num3)
    console.log("num2 is greater")
else 
    console.log("num3 is greater ")
*/

/*
//identation : Give the proper space 
//ternary oprator
let num = 20
let find = (num%2 === 0) ? "even" : "odd"
console.log(find)
*/
/*
let day ="Tuesday"
switch(day){
    case`Monday`:
        console.log("wake up 7 pm")
        break;
    case `Tuesday`:
        console.log("wake up bhaiya 8 am")
        break
    case `Wednessday`:
        console.log("wake up uncle 9am")
        break
        case`Thursday`:
        console.log("wake up devangkartik 7 pm")
        break;
    case `Friday`:
        console.log("wake up pushpa 8 am")
        break
    case `Saturday`:
        console.log("wake up shneha 9am")
        break
     default:
     console.log("write only T W M days");
     
}

*/

/*
let num1 = 45
let num2 = 46
let result = num1+num2;
console.log("the sum of num1 and num2  : "+result)
console.log("the sum of "+num1+" and "+num2+"  :  "+result)
console.log(`the sum of ${num1} and ${num2}  : ${result}`)
*/

//loop:reprated task , DRY : DO NOT REPEAT YOURSELF
/*
let i = 1
if(i<=5){
console.log("hi")
i++}*/

/*

//while(i<5){
    for(let i =1; i<=5; i++){
    console.log("hello",i);
    i++;
}
*/
/*
for(let i = 1; i<=100; i++){
    if(i%3===0)
    console.log(i)
}*/

// object: is the data tyep in javascript
/*
let alian = {
    name :"devangkartik",
    tecnology :"javascript",
    'work exp' : 4
}
//console.log(alian['work exp']);
//console.log(alian.name);
//console.log(alian.input)
//console.log(alian);
*/

//complex object
/*
let alian = {
    name :"devangkartik",
    tecnology :"javascript",
    'work exp' : 4,
    laptop : {
        cpu : 'Intel 3',
        ram : 8 ,
       // brand1 : "acer"
        brand : "acer"
    }
}
for(let key in alian){
    //console.log(key,alian[key]);
   console.log(key,alian.laptop[key]);
}
//console.log(alian);
//delete alian.laptop
//delete alian.tecnology
//console.log(alian);
//console.log(alian.laptop.brand);
//console.log(alian.laptop);
//console.log(alian.laptop.brand.length);
//console.log(alian.laptop.brand?.length)

*/
/*
function greet(){
    console.log("Hello world");
}
 
greet()
greet()
greet()

*/
//keep learning keep sharing keep growing 

/*
function greet(user){
    return `Hello world ${user}`
}
let user = "Devangkartik"
 let str = greet(user);
console.log(str);
*/

//function expression : function is an onject
/*
let add = function(num1,num2){
     return num1+num2;
}
let sum = add
let result = sum(5,9)
console.log(result);
*/

/*
function add(a,b,c=34){
    return a+b+c;
}
let sum = add
let result = sum(43,12);
console.log(result);
*/

//arrow function
/*
let greet = (user) => {
    console.log("Hello world "+user);
    return 1;
}
console.log(greet('Devang kartik'));
*/

/*
let add = (num1,num2) => num1+num2
let sum =add
let result = sum(45,45)
console.log(result);
*/
/*
let laptop = {
    cpu : "9i",
    ram : 16,
    brand : "Acer",

    greet : function(){
        // allow arrow function [() =>]
        console.log("Hellow World");
    }
}

 laptop.greet()
 console.log(laptop)
*/

/*
let laptop = {
    cpu : "9i",
    ram : 16,
    brand : "Acer",

    getconfig : function(){
        // allow arrow function [() =>]
        //let storage =100
        console.log(this.brand);
      //console.log(laptop.cpu);
    }
}

 laptop.getconfig()
*/

//why is called this keyword

/*
let laptop = {
    cpu : "9i",
    ram : 16,
    brand : "Acer",

    getconfig : function(){
        // allow arrow function [() =>]
        //let storage =100
        console.log(this.brand);
      //console.log(laptop.cpu);
    }
}

 laptop.getconfig()
*/

/*
//construster function 
function Alian1(name,tech){
    this.name = name;
    this.tech = tech;
    //return this
    this.work = function(){
        console.log("Solving  bugs from 12");
    }
}
let alian = new Alian('Devang','js')

console.log(Alian1);
*/

/*
//let values = new Array();
let values = [5,7,9,3,1];
values.push(4)
console.log(values.length);
console.log(values);
console.log(values[0]);
*/
/*
let names = ["devang",45,"aarush","aatish","omjais",function(){console.log("Hey devang")},98]

console.log(names);
//shift(),pop(),unshift(),push(),append(),splice()
*/

/*
let num = [];
num[0] = 5
num[99] = 9
for(let key in num){
    //console.log(num)
    console.log(num[key])
}
//console.log(num)
/*
for(let n of num){
    console.log(n)
}
*/

//dustrating in array
/*
let nums = [5,6,7,2,3,5,9]
console.log(nums);
//let a =nums[0]
let [a,b,c,d,e,f,g] = nums;
console.log(a)
console.log(d)

let x = 5
let y = 6
console.log("before swapping : "+x,y);
[x,y] = [y,x]
console.log("After swapping : "+x,y);

let words = "My Name  Devang Kartik Suryavanshi".split('');
let [p,q,r,s,t] = words;
console.log(r);
//console.log(words)
//let [p,q,, ...t] = words 
//console.log(...t , words)
*/
/*
let nums = [42,52,24,98,65,12]
//console.log(nums);
nums.forEach((num,i,nums)=>{
    //(num,indexvalue ,array)
   // console.log(num*2);
   console.log(num,i,nums);
})
*/

/*
let nums = [42,52,24,98,65,12]
nums.filter(num=>num%2===0).map(num=>num*2)
//.reduce((a,b)=> a+b);
//console.log(nums.filter(num=>num%2===0))
.forEach((num)=>{
    console.log(num);
})*/

//set : set is the class
//let nums = new Set("Devangkartik")
//console.log(nums);
/*
let values = new Set()
values.add(23);
values.add(54);
values.add(78);
values.add(45);
values.add("satyam");
values.add("Arush");
console.log(values.has("devang"));
/*
values.forEach((digit)=>{
    console.log(digit);
})
*/

/*
let map = new Map()

map.set("devang","js")
map.set("Navin","Andriod");
map.set("chirag","ML")
map.set("nitin","Blockchain")


for(let [k,v] of map){
    console.log(k," : ",v);
}

//console.log(map.get("devang"));
let num = 1; 
function show(){
    console.log("hi"+num);
   // show();
}
function abc(){
    //show();
    
}

abc();
*/

/*
function fact(n){
    if(n===0)
    return 1
    else 
    return n*fact(n-1);
}

let num = 5
let result = fact(num)

console.log(result);
*/



























































  















































