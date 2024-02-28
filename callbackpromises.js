//nameste javascript session  tooo
// its help to write Asynchronous code isn javascript

// its(javascript) has one calls stack and executes just one thing at a time which code give javascript its quickly execute by javascript engine

// console.log("start");

// setTimeout(function(){
//     console.log("Just wait for 3 seconds");
// })

// console.log("end");

//Asynchronus code is written in javascript because of callbacks 
//this structure is called Pyramid of doom in javascript its grow horizontaly instead of varticaly so its also known as callback hell
//inversion of controol : you loses the control of the your code ()

// const cart =["shoes","pants","curta","caps","motas"];
// api.createOrder(cart,function(){

//     api.proceedToPayment(function () {

//         api.showOrderSummarry(function(){

//             api.updateWallet()

//         })

//     })

// })



// const cart = ["panst","mobile","curta","assets","watches"]

// createOrder(cart,function(orderId){

//     proceedToPayment(orderId)

// });   

// const promise =createOrder(cart);

//  //{data :undefined = (orederDetails); whats return createOrder Api its also a Asychronous operation we dont no when it wiil be executes}

// promise.then(function (orderId){

// });

// this promise object we have lots of trust on it because our javascript engine take gurrenty to executes or resolves onece either successful(fullfiled) or unsucessful(rejected)
//promise object are immutable : whenever our data is fullfiled then are able to us e anywhere in  our code nobady mutted data
//promise object is the placeholder for a certain period of time untill receive a value from aasynchronous operation
//or a container for a future value which it will have fullfilled after the promises resolved
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const GITHUB_API = "https://github.com/Devangkartik"

// const user = fetch( GITHUB_API);

// console.log(user);

// user.then(function(data){
//     console.log(data)
// })

//promises chaining : 
//inversion of control : 

const cart = ["panst","mobile","curta","assets","watches"]

createOrder(cart,function(orderId){

    proceedToPayment(orderId,function(paymentInfp){

        showOrderSummary(paymentInfp,function (){

            updateWalletBalence();

        })

    })

});  

createOrder(cart)
   .then(orderId => proceedToPayment(orderId))
   .then(paymentInfp => showOrderSummary(paymentInfp))
   .then( paymentInfp => updateWalletBalence(paymentInfp))

createOrder(cart)
.then(function(orderId){
   return proceedToPayment(orderId)
})
.then(function(paymentInfp){
   return showOrderSummary(paymentInfp)
})
.then(function(){
   return updateWalletBalence()
})

// const promise =createOrder(cart);

// promise.then(function (orderId){

// });























