// contains catalog of products 
var catalog = {
    1: {name: "Potato", price: "5.99", description: "A beautiful potato", image: "./images/potato.jpeg"},
    2: {name: "White T-Shirt", price: "25.00", description: "A plain white T-shirt", image: "./images/PWS.jpeg"},
    3: {name: "A Book", price: "10.00", description: "A pile of paper", image: "./images/book.jpeg"},
    4: {name: "Cheetos", price: "1.99", description: "Dangerously cheesy", image: "./images/cheetos.jpeg"},
    
}

// track which product is in which category 
var category = {
    food: [1, 4],
    clothes: [2],
    books: [3],
    best_sellers: [1, 2, 3, 4]
}
