var lengthOfLastWord = function(s) {
    let words = s.trim().split(' ')
    let lastWord = words.length
   return words[lastWord -1].length
};

console.log(lengthOfLastWord('Hello World'));