var prefixCount = function(words, pref) {
    let count = 0;
    for(let i = 0; i < words.length; i++) {
        let prefix = words[i].slice(0, pref.length)
        if(prefix == pref) {
            count++
        }     
    }
    return count
};

console.log(prefixCount(["pay","attention","practice","attend"], 'at' ))