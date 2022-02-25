/**
 * code implements functionality for shopping bag
 * this is for the UI portion of the shopping cart on the nav bar
 */

// call the required functions to add something to cart
function addToBag(item){
    addToCart(item);
    updateBagCount();
}

// update the bag counter based on the number of items in the cart
function updateBagCount(){
    console.log(cartCount);
    if (cartCount > 0){
        document.getElementById("bag_count").innerHTML = cartCount;
    }
}
