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
    cartCount++; // increment cart count
    // save to local storage
    window.localStorage.setItem("cart", JSON.stringify(cart));
    window.localStorage.setItem("cartCount", JSON.stringify(cartCount));
    console.log("cart:" + window.localStorage.getItem("cart"));
}

// remove 1 of an item from cart
function subtractFromCart(item_ID){
  cart[item_ID]--;
  cartCount--; // decrement cart count

  // delete item from cart if quantity falls to 0
  if (cart[item_ID] === 0){
    delete cart[item_ID];
  }
  // save to local storage
  window.localStorage.setItem("cart", JSON.stringify(cart));
  window.localStorage.setItem("cartCount", JSON.stringify(cartCount));
  console.log("cart:" + window.localStorage.getItem("cartCount"));
}

// remove all of an item from cart
function removeFromCart(item_ID){
  cartCount -= cart[item_ID];
  delete cart[item_ID];
  // save to local storage
  window.localStorage.setItem("cart", JSON.stringify(cart));
  window.localStorage.setItem("cartCount", JSON.stringify(cartCount));
  console.log("cart:" + window.localStorage.getItem("cart"));
  console.log("cart:" + window.localStorage.getItem("cartCount"));
}

//update the quantity of an item in cart
function updateItemQuantity(item_ID, quantity) {
  cartCount = cartCount - cart[item_ID];
  cartCount = cartCount + quantity;
  if (quantity == 0) {
    //If the updated quantity is 0, delete item from cart
    removeFromCart(item_ID);
    window.localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart:" + window.localStorage.getItem("cart"));
  }
  else {
    cart[item_ID] = quantity;
    // save to local storage
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
  window.localStorage.setItem("cartCount", JSON.stringify(cartCount));
}


//window.localStorage.clear();

// shopping cart made of ID and Quantity Pairs
var cart;
var cartCount;

if (window.localStorage.getItem("cart") === null){ // if cart is null, asign an empty cart
  cart = {};
}
else{
  cart = JSON.parse(window.localStorage.getItem("cart")); // try to retrieve cart from local storage
}

if (window.localStorage.getItem("cartCount") == null){
  cartCount = 0; // if cart count is empty set it to 0
  for (id in cart){ // if cart is not empty but count is calculate count
    cartCount += cart[id];
  }
}
else{
  cartCount = JSON.parse(window.localStorage.getItem("cartCount")); // try to retrieve cart count from local storage
}

console.log(cart)
