// contains catalog of products 
var catalog = {
    1: {name: "Potato", price: "5.99", image: "./images/potato.jpeg" , short_description: "A beautiful potato", long_description: "A beautiful potato"},
    2: {name: "White T-Shirt", price: "25.00", image: "./images/pws.jpeg", short_description: "A plain white T-shirt", long_description: "The cotton T-Shirt is made from a substantial fabric builded from 100% cotton. This provides a classy look and comfort with all types of cloth wear. This has a round neck and long shoulders which look perfect. It offers ultimate smoothness with complete package."},
    3: {name: "A Book", price: "10.00", image: "./images/book.jpeg", short_description: "A pile of paper", long_description: "A pile of paper"},
    4: {name: "Cheetos", price: "1.99", image: "./images/cheetos.jpeg", short_description: "Dangerously cheesy", long_description: "Dangerously cheesy"},
    
}

// track which product is in which category 
var category = {
    food: [1, 4],
    clothes: [2],
    books: [3],
    best_sellers: [1, 2, 3, 4]
}
