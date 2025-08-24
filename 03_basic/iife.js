// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTION`);

})();

( () => {
    console.log(`BASE`);

})();

( (user) => {
    console.log(`BASE ${user}`);

})("anas")