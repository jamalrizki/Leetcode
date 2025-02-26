var map = function(arr, fn) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i],i))
    }
    return newArr
};

arr = [2,3,4,5,6]
fn = function(arrIDX, i) { return  arrIDX + 1}


arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
arr = [10,20,30], fn = function constant() { return 42; }

console.log(map(arr,fn));