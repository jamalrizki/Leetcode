/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init
    let data = {
        init: function(){
            return init
        },
        increment: function(){
            count++
            return count 
        }, 
        decrement: function(){
            count--
            return count
        },
        reset: function(){
            count = init
            return count
        } 
    }
    return data
};


const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());