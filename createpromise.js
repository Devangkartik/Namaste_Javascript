const cart = ["pants","watches","pohnes","foods","shirts","motrola"]
//orderId ,createOrder api is the async operation
//createOrder function is return as a promise then after we attach a callback function to this promise object and that function will call the topayment

//its is a consumer part

// const promise = createOrder(cart) 
// // console.log(Promise)

// promise.then(function(orderId){
//     console.log(orderId)
//     // proceedToPayment(orderId)
// })

//whtas when our cart is proceed to payment when our cart is invalaid i know that beard but if you think like that random senario
//so what we do .catch() is handle(check) the  errors top of the code and whatever we write bottom of the .catch( ) that successfully executed

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId
    // proceedToPayment(orderId)
})

// .catch(function(err){
//     console.log(err.message);
// })

.then(function(orderId){
   return proceedToPayment(orderId)
})
.catch(function(err){
    console.log(err.message);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})

.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    console.log("NO matters whats happens , i will definetly run ;")
})
.catch(function(err){
    console.log(err.message);
})

//producer part of this code
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // Write logic to create a order 
        //valledatinng a cart
        if(!validateCart(cart)){
            const err = new Error("Cart will not valid");
        reject(err);
        }
        //logic for create order
        const orderId = "1435543";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
            
        }
   })
    return pr
}
function proceedToPayment(orderId){
    //i am writinting the logic here 
    return new Promise(function(resolve,reject){
        resolve("Payment is successful");
    })
}

function validateCart(cart){
    return false;
}