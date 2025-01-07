const reverseString = function(text) {

    let str = [];
    let j = 0;
    for(let i=text.length-1;i>=0;i--){
        str[j] = text[i];
        j++;
    }
    
    return str.join("");

};

// Do not edit below this line
module.exports = reverseString;
