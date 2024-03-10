// Immediately Invoked Function Expressions (IIFE)

(function chai () {
    // named IIFE
    console.log(`DB CONNECTED`)
})(); // in immediate invoked function, it gets invoked but doesn't know where to stop the context so to end the invoked function we have to use (;)

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}  )('Vijay')
