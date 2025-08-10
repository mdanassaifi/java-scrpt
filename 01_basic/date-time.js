// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

// let myCreateDate = new Date('2025-08-10');
// let myCreateDate = new Date('2025-08-10, 5:3');
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("01-08-2025");
// // console.log(myCreateDate.toLocaleString());

// let mytimestamp = Date.now();

// // console.log(mytimestamp);
// // console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newdate = new Date();

console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());



console.log(newDate.toLocaleString('default', 
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    }
));

