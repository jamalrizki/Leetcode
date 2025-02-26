
var addBinary = function(a, b) {
    let total = parseInt(a) + parseInt(b)
    let str = ''
    let arr = []

    while(true) {
        if(total == 0 || total == 1) {

            break
        }
        if( total % 2 === 0 ) {
            str = str.concat('0')
            arr.push(0)           
        }
        else{
            str = str.concat('1')
            arr.push(1)
        }
        total = Math.floor(total / 2)
       
        
    }
    return str.split('').reverse().join('')
    
};

console.log(addBinary('11', '1'));