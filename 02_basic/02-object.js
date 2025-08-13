// object literal

// const tinderUser = new Object()  both are same work
const tinderUser = {} 

// tinderUser.id = "123abc"
// tinderUser.name = "Anas"
// tinderUser.isLoggedIn = false

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

// const obj3 = { obj1, obj2 }

console.log(obj3);

// const mergedObj = {...obj1, ...obj2}