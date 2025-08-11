const marvel_heros = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];
const dc = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Green Lantern'];

// marvel_heros.push(dc)

// console.log(marvel_heros);


// const all_heros = marvel_heros.concat(dc);
// console.log(all_heros);


// const all_heros = [...marvel_heros, ...dc];
// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);