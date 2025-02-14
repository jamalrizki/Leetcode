var plusOne = function(digits) {
    let str = digits.join('') 
    let num = BigInt(str, 10)
    num++
    let numstr = num.toString()
    let arr = []
    for(let i = 0; i < numstr.length; i++) {
        arr.push(parseInt(numstr[i]))
    }  
    return arr
};

console.log(plusOne([4,3,2,1]));