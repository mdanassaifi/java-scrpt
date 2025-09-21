const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mynum= myArray.filter((num) => num > 4)
// console.log(mynum);

const books = [
    { title: 'Book One', author: 'Author One', year: 1980 },
    { title: 'Book Two', author: 'Author Two', year: 1990 },
    { title: 'Book Three', author: 'Author Three', year: 2000 },
    { title: 'Book Four', author: 'Author Four', year: 2010 },
    { title: 'Book Five', author: 'Author Five', year: 2020 },
];

const filteredBooks = books.filter((book) => book.year > 2000);

console.log(filteredBooks);


