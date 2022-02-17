/**
 * code implements functionality for shopping cart 
 */

// add 1 of an item to cart
function addToCart(item_ID){
    // if an item is already in the cart increase quantity by 1
    if (cart.hasOwnProperty(item_ID)){
        cart[item_ID] += 1;
    }
    else { // add 1 of that item to the cart
      cart[item_ID] = 1;
    }
    // save to local storage 
    window.localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart:" + window.localStorage.getItem("cart"));
}

// remove 1 of an item from cart 
function subtractFromCart(item_ID){
  cart[item_ID]--; 
  // delete item from cart if quantity falls to 0
  if (cart[item_ID] === 0){
    delete cart[item_ID];
  }
  // save to local storage 
  window.localStorage.setItem("cart", JSON.stringify(cart));
}

// remove all of an item from cart 
function removeFromCart(item_ID){
  delete cart[item_ID];
  // save to local storage 
  window.localStorage.setItem("cart", JSON.stringify(cart));
  console.log("cart:" + window.localStorage.getItem("cart"));
}

//window.localStorage.clear();

// shopping cart made of ID and Quantity Pairs
var cart = JSON.parse(window.localStorage.getItem("cart")); // try to retrieve cart from local storage

if (window.localStorage.getItem("cart") === null){ // if cart is null, asign an empty cart
  cart = {};
}

console.log(cart)