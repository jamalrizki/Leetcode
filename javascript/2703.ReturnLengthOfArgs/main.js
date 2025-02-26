/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    for(let i = 0; i < args.length; i++) { // loop
        count++
        // console.log(i); // just the idx
        // console.log(args[i]); // data
    }

    for(i in args) { // for in loop
        count++
    console.log(i); // check to see data i is just the index
    console.log(args[i]);
     }
    // for(i of args) { // for of loop
    //     count++
    //     // console.log(i); check to see data
    // }
    return count
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
console.log(argumentsLength(1, 2, 3));
console.log(argumentsLength({}, null, "3", 8, 9));