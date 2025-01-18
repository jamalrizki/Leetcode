/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let curr = 0;
    let next = 1;
    yield curr
    yield next
    while(true) {
        yield curr + next
        let temp = curr + next
        curr = next
        next = temp
    }    
};


 const gen = fibGenerator();

 console.log(gen.next().value); // 0
 console.log(gen.next().value); // 1
 console.log(gen.next().value); // 1
 console.log(gen.next().value); // 2
 console.log(gen.next().value); // 3
 console.log(gen.next().value); // 5
 console.log(gen.next().value); // 8
 console.log(gen.next().value); // 13

