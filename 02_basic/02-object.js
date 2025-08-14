// object literal

// const tinderUser = new Object()  both are same work
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Anas"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser ={
    email: "regularuser@example.com",
    fullname: {
        userfullname: {
            firstname: "babu",
            lastname: "jaan"
        }
    }
}
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2= {3: "c", 4: "d"}

// // const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// // const obj3 = Object.assign({}, obj1, obj2) {}- optional hota hain but accha hota hain 

// console.log(obj3);

const mergedObj = {...obj1, ...obj2} // best and new 
// console.log(mergedObj);

const user = [
    {
        id: 1,
        email: "uas2gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
]

// user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));
// console.log(tinderUser.hasOwnProperty("age"));



const course = {
    coursename: "js in hondi",
    price:  "999",
    courseInstructor: "John Doe"

}

const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course //SHORT NAME 
console.log(instructor);
