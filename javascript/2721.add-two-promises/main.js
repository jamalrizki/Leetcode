var addTwoPromises = async function(promise1, promise2) {
    let one = await promise1
    let two = await promise2
    return  one + two
}

 addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4
