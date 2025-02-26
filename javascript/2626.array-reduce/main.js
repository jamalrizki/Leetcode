var reduce = function(nums, fn, init) {
    let total = init // total = 10 
    for(let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i])
        // first pass // total = 11
        // second pass // 13
        // third // 16
        // fourth 20
    }
    return total  
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 10



console.log(reduce(nums,fn, init));