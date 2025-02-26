var filter = function(arr, fn) {
    let vals = []
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            vals.push(arr[i]) 
        }
    }
    return vals
};

arr = [1,2,3]
fn = function firstIndex(n, i) { return i === 0; }
console.log(filter(arr,fn));


let arr10 =[0,10,20,30]
let func = function greaterThan10(n) { return n > 10; }
let returnValue = filter(arr10,func)
console.log(returnValue);

