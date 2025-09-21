const mynum = [1, 2, 3,];

const sum = mynum.reduce((acc, num) => acc + num, 0);
console.log(sum);


const onlineBooks = [
    { itemName: 'Book One', price: 10 },
    { itemName: 'Book Two', price: 20 },
    { itemName: 'Book Three', price: 30 },
    { itemName: 'Book Four', price: 40 },
    { itemName: 'Book Five', price: 50 },
]

const totalPrice = onlineBooks.reduce((acc, book) => acc + book.price, 0);
console.log(totalPrice);